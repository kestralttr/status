json.array! @postings do |posting|
  json.id posting.id
  json.title posting.title
  json.comments posting.comments
  json.link_url posting.link_url
  json.execution_id posting.execution_url
end
