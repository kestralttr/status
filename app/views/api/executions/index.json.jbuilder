json.array! @executions do |execution|
  json.id execution.id
  json.title execution.title
  json.creator_id execution.creator_id
  json.approved execution.approved
end
