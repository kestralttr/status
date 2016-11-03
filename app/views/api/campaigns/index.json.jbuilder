json.array! @campaigns do |campaign|
  json.id campaign.id
  json.title campaign.title
  json.manager_id campaign.manager_id
  json.membership_id campaign.membership_id
  json.approvership_id campaign.approvership_id
end
