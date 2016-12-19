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
User.create(username: "don", password: "password")
#USER3
User.create(username: "pete", password: "password")
#USER4
User.create(username: "roger", password: "password")
#USER5
User.create(username: "burt", password: "password")
#USER6
User.create(username: "joan", password: "password")

#CAMPAIGN 1
Campaign.create(
title: "Coca Cola",
manager_id: 1,
image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481736913/rrqv8fc6fumcjtyvyjep.jpg"
)
  #EXECUTION 1
  Execution.create(
  title: "Coke Zero :15",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 1,
  format: "1920x1080i 30fps",
  info: "Coke Zero promo - Zero Sugar messaging"
  )
    #POSTING 1
    Posting.create(
    title: "Version 1",
    execution_id: 1,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/video/upload/v1482178138/CC_TV1a_pbsgpa.mp4"
    )
      #FEEDBACK 1
      Feedback.create(
      posting_id: 1,
      comments: "We like how this turned out.  Let's keep it how it is for now and if we need to make changes in the future, I'll let you know.",
      creator_name: "don",
      creator_id: 2
      )
      #FEEDBACK 2
      Feedback.create(
      posting_id: 1,
      comments: "Agreed.  I'm hoping we can keep it like this, but you never know...",
      creator_name: "pete",
      creator_id: 3
      )
  #EXECUTION 2
  Execution.create(
  title: "300x250 Banner",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 1,
  format: "Standard web banners",
  info: "Brand-focused banners in two sizes (300x250 & 728x90)"
  )
    #POSTING 2
    Posting.create(
    title: "Version 1",
    execution_id: 2,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176392/CC_300x2501c_eknsxd.jpg"
    )
      #FEEDBACK 3
      Feedback.create(
      posting_id: 2,
      comments: "This layout is extremely distracting.  Can we change it?",
      creator_name: "don",
      creator_id: 2
      )
    #Posting 3
    Posting.create(
    title: "Version 2",
    execution_id: 2,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176392/CC_300x2501b_vfqs8b.jpg"
    )
      #Feedback 4
      Feedback.create(
      posting_id: 3,
      comments: "Much better.  Can we move the Coca Cola bottle to the other side though?",
      creator_name: "don",
      creator_id: 2
      )
    #Posting 4
    Posting.create(
    title: "Version 3",
    execution_id: 2,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176392/CC_300x2501a_qji3oj.jpg"
    )
      #Feedback 5
      Feedback.create(
      posting_id: 4,
      comments: "Excellent.  Approved!",
      creator_name: "don",
      creator_id: 2
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
#MEMBERSHIP 4
Membership.create(campaign_id: 1, member_id: 2)
#MEMBERSHIP 5
Membership.create(campaign_id: 1, member_id: 3)
