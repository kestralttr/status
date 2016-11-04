# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#USER 1
User.create(username: "guest", password: "password")
#USER 2
User.create(username: "alex", password: "password")
#MEMBERSHIP 1
Membership.create(campaign_id: 1, member_id: 1)
#MEMBERSHIP 2
Membership.create(campaign_id: 2, member_id: 1)
#MEMBERSHIP 3
Membership.create(campaign_id: 3, member_id: 1)
#MEMBERSHIP 4
Membership.create(campaign_id: 4, member_id: 2)
#MEMBERSHIP 5
Membership.create(campaign_id: 5, member_id: 2)
#MEMBERSHIP 6
Membership.create(campaign_id: 4, member_id: 1)
#CAMPAIGN 1
Campaign.create(
  title: "My Awesome Campaign",
  manager_id: 1
)
#CAMPAIGN 2
Campaign.create(
  title: "My Disastrous Campaign",
  manager_id: 1
)
#CAMPAIGN 3
Campaign.create(
  title: "Holiday Hell",
  manager_id: 1
)
#CAMPAIGN 4
Campaign.create(
  title: "Yet Another Campaign",
  manager_id: 2
)
#CAMPAIGN 5
Campaign.create(
  title: "Final Campaign",
  manager_id: 2
)
