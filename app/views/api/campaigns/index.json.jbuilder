json.array! @campaigns do |campaign|
  json.id campaign.id
  json.title campaign.title
  json.manager_id campaign.manager_id
end
