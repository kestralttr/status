json.array! @feedback do |feedback_item|
  json.id feedback_item.id
  json.comments feedback_item.comments
  json.link_url feedback_item.link_url
  json.posting_id feedback_item.posting_id
  json.creator_id feedback_item.creator_id
  json.creator_name feedback_item.creator_name
end
