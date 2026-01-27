#!/usr/bin/env ruby
# frozen_string_literal: true

require 'json'
require 'fileutils'

manifest_path = 'frontend/dist/.vite/manifest.json'
dist_dir = 'dist'
public_base = '/assets'

unless File.exist?(manifest_path)
  puts "Manifest not found: #{manifest_path}"
  exit 1
end

manifest = JSON.parse(File.read(manifest_path))
entry = manifest['src/main.js']

unless entry
  puts "Entry src/main.js not found in manifest"
  exit 1
end

js_file = entry['file']
css_files = entry['css'] || []

Dir.glob("#{dist_dir}/**/*.html").each do |html_file|
  content = File.read(html_file)
  modified = false

  # JSパスを修正（/main-xxx.js → /assets/main-xxx.js）
  if content.include?(%(<script type="module" src="/#{js_file}">))
    content = content.gsub(
      %(<script type="module" src="/#{js_file}">),
      %(<script type="module" src="#{public_base}/#{js_file}">)
    )
    modified = true
  end

  # CSSリンクを挿入
  if css_files.any? && !content.include?(css_files.first)
    css_links = css_files.map { |f| %(<link rel="stylesheet" href="#{public_base}/#{f}">) }.join("\n  ")
    content = content.gsub('</head>', "  #{css_links}\n</head>")
    modified = true
  end

  if modified
    File.write(html_file, content)
    puts "Fixed: #{html_file}"
  end
end

puts "Done! Fixed Vite asset paths in HTML files."
