# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#USER1
User.create(username: "guest", password: "password")
#USER2
User.create(username: "aaron", password: "password")
#USER3
User.create(username: "alex", password: "password")
#USER4
User.create(username: "ajax", password: "password")
#USER5
User.create(username: "al", password: "password")
#USER6
User.create(username: "andy", password: "password")

#CAMPAIGN 1
Campaign.create(
  title: "Coca Cola",
  manager_id: 1,
  image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481736913/rrqv8fc6fumcjtyvyjep.jpg"
)
#CAMPAIGN 2
Campaign.create(
  title: "BMW",
  manager_id: 1,
  image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481737143/nfsxld8dggmkuct0cuql.jpg"
)
#CAMPAIGN3
Campaign.create(
  title: "Mass Effect Andromeda",
  manager_id: 1,
  image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481773214/golfeaggnaxhjjgagghn.jpg"
)

#MEMBERSHIP 1
Membership.create(campaign_id: 1, member_id: 1)
#MEMBERSHIP 2
Membership.create(campaign_id: 2, member_id: 1)
#MEMBERSHIP 3
Membership.create(campaign_id: 3, member_id: 1)
