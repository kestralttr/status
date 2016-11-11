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
User.create(username: "jeff", password: "password")
#USER3
User.create(username: "alex", password: "password")
#USER4
User.create(username: "ben", password: "password")



#CAMPAIGN 1
Campaign.create(
  title: "Stinky Candle Company - Garlic Candle",
  manager_id: 1
)
  #EXECUTION 1
  Execution.create(
    title: ":30 Spot",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 1
  )
    #POSTING 1
    Posting.create(
    title: "Script",
    comments: "Let us know what you think.  We're thinking of doing a vampire-themed spot to focus more attention on the garlic candle.  :)",
    link_url: "http://s000.tinyupload.com/download.php?file_id=67041491816113493351&t=6704149181611349335122024",
    execution_id: 1
    )
      #FEEDBACK 1
      Feedback.create(
      comments: "We love it!  The idea is approved.  Can't wait to see the video!",
      posting_id: 1,
      creator_id: 2
      )
    #POSTING 2
    Posting.create(
    title: "Final Video",
    comments: "Video has been finished.  Can we get this on the air?",
    link_url: "https://www.youtube.com/watch?v=oq7dF7bgZHw",
    execution_id: 1
    )
      #FEEDBACK 2
      Feedback.create(
      comments: "Absolutely!  Thanks!",
      posting_id: 2,
      creator_id: 2
      )
  #EXECUTION 2
  Execution.create(
    title: ":15 Spot",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 1
  )
#CAMPAIGN 2
Campaign.create(
  title: "Stinky Candle Company - Fire Safety",
  manager_id: 1
)
  #EXECUTION 3
  Execution.create(
    title: ":30 Spot",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 2
  )
    #POSTING 3
    Posting.create(
    title: "Script",
    comments: "This is a rough script of how we'd approach a humorous infomercial as a commercial.  Let us know your thoughts.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=59842714552647433782&t=5984271455264743378265214",
    execution_id: 3
    )
      #FEEDBACK 3
      Feedback.create(
      comments: "The script looks good.  However, let's make sure we hit the humor in more obvious ways as well.  As funny as this is, it's coming across understated.  So let's move forward with production, but look to make the humor more pronounced",
      posting_id: 3,
      creator_id: 3
      )
    #POSTING 4
    Posting.create(
    title: "Final Spot",
    comments: "I know we've discussed how to better approach the humor.  We believe we've been able to do that here, but let us know what you think.",
    link_url: "https://www.youtube.com/watch?v=Vc5L_HEEuTM",
    execution_id: 3
    )
  #EXECUTION 4
  Execution.create(
    title: ":15 Spot",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 2
  )
#CAMPAIGN 3
Campaign.create(
  title: "Stinky Candle Company - Candle Spotlights",
  manager_id: 1
)
  #EXECUTION 5
  Execution.create(
    title: ":30 Bacon Candle",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 3
  )
    #POSTING 5
    Posting.create(
    title: "Initial Spot",
    comments: "Here's the bacon candle highlight spot.  Again, we don't have enough money to further edit these, so let us know if you have any concerns.",
    link_url: "https://www.youtube.com/watch?v=38qQ_IuTfLE",
    execution_id: 5
    )
      #FEEDBACK 4
      Feedback.create(
      comments: "Nope, looks good to us.  The goal was to make a simple spot with the leftover funds we had, and it looks like we've done that.  Approved.",
      posting_id: 5,
      creator_id: 4
      )
  #EXECUTION 6
  Execution.create(
    title: ":30 Leather Jacket Candle",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 3
  )
    #POSTING 6
    Posting.create(
    title: "Initial Spot",
    comments: "Leather jacket candle highlight is available to view.  Awaiting approval.",
    link_url: "https://www.youtube.com/watch?v=jpcCGcG6X_g",
    execution_id: 6
    )
      #FEEDBACK 5
      Feedback.create(
      comments: "Looks good.  Approved.",
      posting_id: 6,
      creator_id: 3
      )
  #EXECUTION 7
  Execution.create(
    title: ":30 Timber Candle",
    format: "Network specs",
    media_type: "TV",
    creator_id: 1,
    campaign_id: 3
  )
    #POSTING 7
    Posting.create(
    title: "Initial Spot",
    comments: "Timber Candle is ready to go as well.  Awaiting go sign.",
    link_url: "https://www.youtube.com/watch?v=SNaf_yhoXS8",
    execution_id: 7
    )
      #FEEDBACK 6
      Feedback.create(
      comments: "Go sign given.  Approved.",
      posting_id: 7,
      creator_id: 3
      )
  #EXECUTION 8
  Execution.create(
    title: "Body Odor Static",
    format: "300x250",
    media_type: "Digital",
    creator_id: 1,
    campaign_id: 3
  )
    #POSTING 8
    Posting.create(
    title: "Initial Design",
    comments: "Here is the requested mock of the body odor candle banner.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=47788284852981837311&t=4778828485298183731176193",
    execution_id: 8
    )
      #FEEDBACK 7
      Feedback.create(
      comments: "Let's make the background more engaging.  Can we try a brighter color that grabs attention?",
      posting_id: 8,
      creator_id: 2
      )
    #POSTING 9
    Posting.create(
    title: "Revised Design",
    comments: "We've revised the background per the previous feedback.  Let us know what you think.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=02309906286681053968&t=0230990628668105396854912",
    execution_id: 8
    )
      #FEEDBACK 8
      Feedback.create(
      comments: "Looks great!  Approved.",
      posting_id: 9,
      creator_id: 2
      )
  #EXECUTION 9
  Execution.create(
    title: "SOCIAL - Firecracker",
    format: "FB & Instagram",
    media_type: "Digital",
    creator_id: 1,
    campaign_id: 3
  )
    #POSTING 10
    Posting.create(
    title: "Initial Social Plan",
    comments: "Before we get started on showing mocks, we wanted to share some main points on what we're planning on doing.  Let us know your thoughts.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=00638963505749124162&t=0063896350574912416201943",
    execution_id: 9
    )
      #FEEDBACK 9
      Feedback.create(
      comments: "We're aligned with this.  We're ready to proceed with reviewing mocks.",
      posting_id: 10,
      creator_id: 4
      )
    #POSTING 11
    Posting.create(
    title: "Rough Comp",
    comments: "Here's what we're planning for our firecracker candle.  We believe a simpe reminder of the upcoming 4th of July holiday will attract attention.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=01830366441624963570&t=0183036644162496357021783",
    execution_id: 9
    )
      #FEEDBACK 10
      Feedback.create(
      comments: "We agree.  Let's post it!",
      posting_id: 11,
      creator_id: 4
      )
  #EXECUTION 10
  Execution.create(
  title: "SOCIAL - Black Licorice",
  format: "FB & Instagram",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 3
  )
    #POSTING 12
    Posting.create(
    title: "Rough Comp",
    comments: "We've added some additional focus here, since black licorice is such a specific attractor.  We like the visuals and hope you do too.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=09960211364681767155&t=0996021136468176715585595",
    execution_id: 10
    )
      #FEEDBACK 10
      Feedback.create(
      comments: "Yup, we like it too.  Send it out!  :)",
      posting_id: 12,
      creator_id: 4
      )
  #EXECUTION 11
  Execution.create(
  title: "T-Shirt Logos",
  format: "",
  media_type: "Other",
  creator_id: 1,
  campaign_id: 3
  )
    #POSTING 13
    Posting.create(
    title: "Rough Brainstorm",
    comments: "We've been working the past couple days to come up with logos for the t-shirt idea.  Let us know what you want us to continue forward with.",
    link_url: "http://s000.tinyupload.com/download.php?file_id=03035216709413159523&t=0303521670941315952387117",
    execution_id: 11
    )



#MEMBERSHIP 1
Membership.create(campaign_id: 1, member_id: 1)
#MEMBERSHIP 2
Membership.create(campaign_id: 1, member_id: 2)
#MEMBERSHIP 3
Membership.create(campaign_id: 1, member_id: 3)
#MEMBERSHIP 4
Membership.create(campaign_id: 1, member_id: 4)
#MEMBERSHIP 5
Membership.create(campaign_id: 2, member_id: 1)
#MEMBERSHIP 6
Membership.create(campaign_id: 2, member_id: 2)
#MEMBERSHIP 7
Membership.create(campaign_id: 2, member_id: 3)
#MEMBERSHIP 8
Membership.create(campaign_id: 2, member_id: 4)
#MEMBERSHIP 9
Membership.create(campaign_id: 3, member_id: 1)
#MEMBERSHIP 10
Membership.create(campaign_id: 3, member_id: 2)
#MEMBERSHIP 11
Membership.create(campaign_id: 3, member_id: 3)
#MEMBERSHIP 12
Membership.create(campaign_id: 3, member_id: 4)
