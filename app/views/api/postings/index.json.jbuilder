json.array! @postings do |posting|
  json.id posting.id
  json.title posting.title
  json.image_url posting.image_url
  json.execution_id posting.execution_id
end
