#!/usr/bin/env ruby
require 'date'
require 'yaml'

posts_dir = File.join(__dir__, '..', 'content', 'posts')

Dir.glob(File.join(posts_dir, '*.md')).each do |file|
  content = File.read(file)

  match = content.match(/\A---\n(.*?)\n---\n(.*)\z/m)
  next unless match

  front_matter = YAML.safe_load(match[1], permitted_classes: [Date]) || {}
  body = match[2]

  if front_matter['published'] && !front_matter['date']
    front_matter['date'] = front_matter.delete('published')
  else
    front_matter.delete('published')
  end

  front_matter['layout'] ||= 'post'

  yaml = front_matter.to_yaml.sub(/\A---\s*\n/, '')
  new_content = "---\n#{yaml}---\n#{body}"

  File.write(file, new_content)
end
