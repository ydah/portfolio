#!/usr/bin/env ruby
require 'json'
require 'net/http'
require 'uri'

BASE_URL = 'https://note.com/api/v2/creators/ydah/contents'

contents = []
page = 1
is_last_page = false

until is_last_page
  uri = URI(BASE_URL)
  uri.query = URI.encode_www_form(kind: 'note', page: page)
  response = Net::HTTP.get(uri)
  data = JSON.parse(response)

  page_contents = data.dig('data', 'contents') || []
  contents.concat(page_contents)
  is_last_page = data.dig('data', 'isLastPage')
  page += 1
end

payload = {
  'data' => {
    'contents' => contents,
    'isLastPage' => true,
    'totalCount' => contents.size,
  },
}

File.write('content/data/note.json', JSON.pretty_generate(payload))
