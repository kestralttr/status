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
  title: "Refreshing :15",
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
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
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
  #Execution 3
  Execution.create(
  title: "728x90 Banner",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 1,
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
  )
    #Posting 5
    Posting.create(
    title: "Version 1",
    execution_id: 3,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176392/CC_728x90_1b_ghu0jt.jpg"
    )
      #Feedback 6
      Feedback.create(
      posting_id: 5,
      comments: "We like the motif, but there are too many distracting colors against that background.  Can we simplify?",
      creator_name: "pete",
      creator_id: 3
      )
    #Posting 6
    Posting.create(
    title: "Version 2",
    execution_id: 3,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176392/CC_728x90_1a_qijy1m.jpg"
    )
      #Feedback 7
      Feedback.create(
      posting_id: 6,
      comments: "Wow, love the improvement.  Let's move forward with this.",
      creator_name: "pete",
      creator_id: 3
      )
  #Execution 4
  Execution.create(
  title: "Two-Page Spread",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 1,
  format: "Magazine",
  info: "Standard print ad -- running in GQ and Esquire"
  )
    #Posting 7
    Posting.create(
    title: "Version 1",
    execution_id: 4,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176399/CC_print_1a_gawnlf.jpg"
    )
      #Feedback 8
      Feedback.create(
      posting_id: 7,
      comments: "We love the branding here.  However, we'd like to include a female focus, so can we update the stock image accordingly?",
      creator_name: "don",
      creator_id: 2
      )
    #Posting 8
    Posting.create(
    title: "Version 2",
    execution_id: 4,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176399/CC_print-1b_gjsqzd.jpg"
    )
      #Feedback 9
      Feedback.create(
      posting_id: 8,
      comments: "Excellent.  New stock image is great.  Approved.",
      creator_name: "don",
      creator_id: 2
      )
#CAMPAIGN 2
Campaign.create(
  title: "BMW",
  manager_id: 1,
  image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481737143/nfsxld8dggmkuct0cuql.jpg"
)
  #Execution 5
  Execution.create(
  title: "Mother in Law :30",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 2,
  format: "1920x1080i 30fps",
  info: "3 Series - Connected Email"
  )
    #Posting 9
    Posting.create(
    title: "Version 1",
    execution_id: 5,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/video/upload/v1482178150/BMW_TV1a_xmedlc.mp4"
    )
      #Feedback 10
      Feedback.create(
      posting_id: 9,
      comments: "Hilarious.  Love the timing.",
      creator_name: "roger",
      creator_id: 4
      )
  #Execution 6
  Execution.create(
  title: "300x250 Banner",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 2,
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
  )
    #Posting 10
    Posting.create(
    title: "Version 1",
    execution_id: 6,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_300x250_1a_jf1djk.jpg"
    )
      #Feedback 11
      Feedback.create(
      posting_id: 10,
      comments: "We like the shot of the interior.  Can we insert the BMW logo?",
      creator_name: "burt",
      creator_id: 5
      )
    #Posting 11
    Posting.create(
    title: "Version 2",
    execution_id: 6,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_300x250_1b_sedwzf.jpg"
    )
      #Feedback 12
      Feedback.create(
      posting_id: 11,
      comments: "Very nice, except we'd like to see a version with the logo on the top left.",
      creator_name: "burt",
      creator_id: 5
      )
    #Posting 12
    Posting.create(
    title: "Version 3",
    execution_id: 6,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_300x250_1c_fxk12e.jpg"
    )
      #Feedback 13
      Feedback.create(
      posting_id: 12,
      comments: "You know what?  We actually like the logo where it was before.  And can we emboss the text a little bit to make it more pronounced?",
      creator_name: "burt",
      creator_id: 5
      )
    #Posting 13
    Posting.create(
    title: "Version 4",
    execution_id: 6,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_300x250_1d_ocwf7o.jpg"
    )
      #Feedback 14
      Feedback.create(
      posting_id: 13,
      comments: "Perfect.  Thanks for your patience.  This is approved.",
      creator_name: "burt",
      creator_id: 5
      )
  #Execution 7
  Execution.create(
  title: "728x90 Banner",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 2,
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
  )
    #Posting 14
    Posting.create(
    title: "Version 1",
    execution_id: 7,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_728x90_1a_meymmk.jpg"
    )
      #Feedback 15
      Feedback.create(
      posting_id: 14,
      comments: "Let's make the copy all caps to improve the visibility.",
      creator_name: "roger",
      creator_id: 4
      )
    #Posting 15
    Posting.create(
    title: "Version 2",
    execution_id: 7,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_728x90_1b_r2r1ef.jpg"
    )
      #Feedback 16
      Feedback.create(
      posting_id: 15,
      comments: "Looking good.  However, we need to add a call out to the 3 Series in 'Onyx Black'.",
      creator_name: "roger",
      creator_id: 4
      )
  #Execution 8
  Execution.create(
  title: "Single Page",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 2,
  format: "Magazine",
  info: "Standard print ad -- running in Popular Mechanics"
  )
    #Posting 16
    Posting.create(
    title: "Version 1",
    execution_id: 8,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176415/BMW_print_single_1a_vjuk5m.jpg"
    )
      #Feedback 17
      Feedback.create(
      posting_id: 16,
      comments: "Can we add the BMW logo to this?",
      creator_name: "burt",
      creator_id: 5
      )
    #Posting 17
    Posting.create(
    title: "Version 2",
    execution_id: 8,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176415/BMW_print_single_1b_wst5qq.jpg"
    )
      #Feedback 18
      Feedback.create(
      posting_id: 17,
      comments: "Okay, thanks for adding the logo.  However, it seems like the spacing is now off because the rest of the elements are center aligned.  Can we try to incorporate the logo into the current alignment?",
      creator_name: "burt",
      creator_id: 5
      )
    #Posting 18
    Posting.create(
    title: "Version 3",
    execution_id: 8,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176415/BMW_print_single_1c_qr6nsh.jpg"
    )
      #Feedback 19
      Feedback.create(
      posting_id: 18,
      comments: "Yes, this is exactly what we want.  Approved!",
      creator_name: "burt",
      creator_id: 5
      )
#CAMPAIGN 3
Campaign.create(
  title: "Mass Effect Andromeda",
  manager_id: 1,
  image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1481773214/golfeaggnaxhjjgagghn.jpg"
)
  #Execution 9
  Execution.create(
  title: "Andromeda Initiative :60",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 3,
  format: "1920x1080i 30fps",
  info: "Andromeda Initiative intro -- 'Join Today' messaging"
  )
    #Posting 19
    Posting.create(
    title: "Version 1",
    execution_id: 9,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/video/upload/v1482178158/ME_TV1a_crz8xy.mp4"
    )
      #Feedback 20
      Feedback.create(
      posting_id: 19,
      comments: "Looking very very good.  We love it.",
      creator_name: "joan",
      creator_id: 6
      )
  #Execution 10
  Execution.create(
  title: "300x250",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 3,
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
  )
    #Posting 20
    Posting.create(
    title: "Version 1",
    execution_id: 10,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176424/ME_300x250_ark1a_qcosqb.png"
    )
      #Feedback 21
      Feedback.create(
      posting_id: 20,
      comments: "We're still getting back comments from the whole department, but while we're waiting, can we move up the text towards the top?",
      creator_name: "joan",
      creator_id: 6
      )
    #Posting 21
    Posting.create(
    title: "Version 2",
    execution_id: 10,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176425/ME_300x250_ark_1b_c898ts.png"
    )
      #Feedback 22
      Feedback.create(
      posting_id: 21,
      comments: "Thank you.  Also, we're going to need to include the 'Join Today' messaging.",
      creator_name: "joan",
      creator_id: 6
      )
    #Posting 22
    Posting.create(
    title: "Version 3",
    execution_id: 10,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176425/ME_300x250_ark_1c_n90jb6.png"
    )
      #Feedback 23
      Feedback.create(
      posting_id: 22,
      comments: "Messaging placement is great.  Can we just add the Andromeda Initiative logo in the bottom right?",
      creator_name: "joan",
      creator_id: 6
      )
    #Posting 23
    Posting.create(
    title: "Version 4",
    execution_id: 10,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176425/ME_300x250_ark_1d_goszuk.png"
    )
      #Feedback 24
      Feedback.create(
      posting_id: 23,
      comments: "Looks good.  Approved.",
      creator_name: "joan",
      creator_id: 6
      )
  #Execution 11
  Execution.create(
  title: "728x90",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 3,
  format: "Standard web banner",
  info: "Brand-focused banner in one of two sizes (300x250 & 728x90)"
  )
    #Posting 24
    Posting.create(
    title: "Version 1",
    execution_id: 11,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176425/ME_728x90_silhouette_1a_kxdy06.png"
    )
      #Feedback 25
      Feedback.create(
      posting_id: 24,
      comments: "Love the art.  However, can we make the text stand out a bit more and increase the saturation the image?  It looks a bit dull as is.",
      creator_name: "joan",
      creator_id: 6
      )
    #Posting 25
    Posting.create(
    title: "Version 2",
    execution_id: 11,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176425/ME_728x90_silhouette_1c_kt4ecb.png"
    )
      #Feedback 26
      Feedback.create(
      posting_id: 25,
      comments: "Very well done.  We're aligned on this: let's ship it.",
      creator_name: "joan",
      creator_id: 6
      )
  #Execution 12
  Execution.create(
  title: "Two-Page Spread",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 3,
  format: "Magazine",
  info: "Standard print ad -- running in Game Informer"
  )
    #Posting 26
    Posting.create(
    title: "Version 1",
    execution_id: 12,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176431/ME_spread_1a_uph1qf.jpg"
    )
      #Feedback 27
      Feedback.create(
      posting_id: 26,
      comments: "Great job, couple of things:  the quote on the right is actually from Kotaku, not Gamespot.  Also, let's add the AI logo on the bottom right.",
      creator_name: "joan",
      creator_id: 6
      )
    #Posting 27
    Posting.create(
    title: "Version 2",
    execution_id: 12,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176431/ME_spread_1b_mlgxaz.jpg"
    )
      #Feedback 28
      Feedback.create(
      posting_id: 27,
      comments: "Perfect!",
      creator_name: "joan",
      creator_id: 6
      )

    #OUT OF ORDER!!!
    #Posting 28
    Posting.create(
    title: "Version 3",
    execution_id: 7,
    image_url: "http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482176408/BMW_728x90_1c_pdfxe8.jpg"
    )
      #Feedback 29
      Feedback.create(
      posting_id: 28,
      comments: "Perfect!",
      creator_name: "roger",
      creator_id: 4
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
#MEMBERSHIP 6
Membership.create(campaign_id: 2, member_id: 4)
#MEMBERSHIP 7
Membership.create(campaign_id: 2, member_id: 5)
#MEMBERSHIP 8
Membership.create(campaign_id: 3, member_id: 6)
