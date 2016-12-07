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
#USER5
User.create(username: "greg", password: "password")
#USER6
User.create(username: "andy", password: "password")



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
      creator_id: 2,
      creator_name: "jeff"
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
      creator_id: 2,
      creator_name: "jeff"
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
      creator_id: 3,
      creator_name: "alex"
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
      creator_id: 4,
      creator_name: "ben"
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
      creator_id: 3,
      creator_name: "alex"
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
      creator_id: 3,
      creator_name: "alex"
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
      creator_id: 2,
      creator_name: "jeff"
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
      creator_id: 2,
      creator_name: "jeff"
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
      creator_id: 4,
      creator_name: "ben"
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
      creator_id: 4,
      creator_name: "ben"
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
      creator_id: 4,
      creator_name: "ben"
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
#CAMPAIGN 4
Campaign.create(
  title: "Stinky Candle Company - Holiday",
  manager_id: 1
)
  #EXECUTION 12
  Execution.create(
  title: "Stocking Stuffers :30",
  format: "",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 4
  )
    #POSTING 14
    Posting.create(
    title: "Initial Script",
    comments: "We've been able to incorporate all asks into this script.  We're keeping a fun, festive feel while also making sure to show off the product as much as possible.  Let us know what you think.",
    link_url: "",
    execution_id: 12
    )
      #FEEDBACK 11
      Feedback.create(
      comments: "Thanks for the quick posting.  We like the approach, but want to add product shots at the beginning as well.  Let us know when we might be able to see a revision. Thanks.",
      posting_id: 14,
      creator_id: 4,
      creator_name: "ben"
      )
    #POSTING 15
    Posting.create(
    title: "Revised Script",
    comments: "We now have product shots at both the beginning and the end of the spot.",
    link_url: "",
    execution_id: 12
    )
      #FEEDBACK 12
      Feedback.create(
      comments: "Yup, looks good.  Let's move into production.",
      posting_id: 15,
      creator_id: 4,
      creator_name: "ben"
      )
    #POSTING 16
    Posting.create(
    title: "Rough Cut 1",
    comments: "Here is our initial version of the spot.  Very rough visually, but let us know if we can lock timing.",
    link_url: "",
    execution_id: 12
    )
      #FEEDBACK 13
      Feedback.create(
      comments: "Timing looks good to us, but let's swap out the intro shot with one that is closer up.",
      posting_id: 16,
      creator_id: 4,
      creator_name: "ben"
      )
    #POSTING 17
    Posting.create(
    title: "Rough Cut 2",
    comments: "Timing is now locked and we've updated the intro shot.  Anything else before we move into color and VO record?",
    link_url: "",
    execution_id: 12
    )
      #FEEDBACK 14
      Feedback.create(
      comments: "Nope, good on our end.  Let's do it!",
      posting_id: 17,
      creator_id: 4,
      creator_name: "ben"
      )
  #EXECUTION 13
  Execution.create(
  title: "Stocking Stuffers :15",
  format: "",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 4
  )
    #POSTING 18
    Posting.create(
    title: "Rough Cut 1",
    comments: "We simply cut out the intro and kept the same length on the end frame.  Let us know if you're onboard.",
    link_url: "",
    execution_id: 13
    )
      #FEEDBACK 15
      Feedback.create(
      comments: "Totally.  Look out for some incoming end frame details next week, but for now we're aligned.",
      posting_id: 18,
      creator_id: 4,
      creator_name: "ben"
      )
  #EXECUTION 14
  Execution.create(
  title: "Christmas Scents :30",
  format: "",
  media_type: "Radio",
  creator_id: 1,
  campaign_id: 4
  )
    #POSTING 19
    Posting.create(
    title: "Script",
    comments: "We're following the same theme as the TV spots here.  Let us know what you think.",
    link_url: "",
    execution_id: 14
    )
      #FEEDBACK 16
      Feedback.create(
      comments: "Love the atmosphere you feel while you're listening to it.  Let's keep that, but add at least one addtional reference to product.  It currently seems like a last minute consideration.",
      posting_id: 19,
      creator_id: 4,
      creator_name: "ben"
      )
    #POSTING 20
    Posting.create(
    title: "Rough Record",
    comments: "We fired off a rough real quick to get your opinion on intonation and tone.  Let us know how this is for you.",
    link_url: "",
    execution_id: 14
    )
      #FEEDBACK 17
      Feedback.create(
      comments: "We're onboard.  Sounds like Christmas at my house.  :)",
      posting_id: 20,
      creator_id: 4,
      creator_name: "ben"
      )
  #EXECUTION 15
  Execution.create(
  title: "Better Homes Spread",
  format: "2 page spread",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 4
  )
    #POSTING 21
    Posting.create(
    title: "Rough Comp",
    comments: "We'll be matching the visual tone from the TV commercials, so let us know if anything seems off to you.",
    link_url: "",
    execution_id: 15
    )
      #FEEDBACK 18
      Feedback.create(
      comments: "Looks good, guys.  The colors connect the campaign together really well.  Awaiting next posting.",
      posting_id: 21,
      creator_id: 3,
      creator_name: "alex"
      )
    #POSTING 22
    Posting.create(
    title: "Revised Comp",
    comments: "We've added the product shots and information.  What say you?",
    link_url: "",
    execution_id: 15
    )
      #FEEDBACK 19
      Feedback.create(
      comments: "Thanks for adding those in.  However, we need the candles to look a lot bigger.  Currently it's too small to read the font.",
      posting_id: 22,
      creator_id: 3,
      creator_name: "alex"
      )
  #EXECUTION 16
  Execution.create(
  title: "Holiday Banners",
  format: "300x250 & 728x90",
  media_type: "Digital",
  creator_id: 1,
  campaign_id: 4
  )
    #POSTING 23
    Posting.create(
    title: "Initial Comps",
    comments: "Creative comps have been issued and match the themes from TV.",
    link_url: "",
    execution_id: 16
    )
      #FEEDBACK 20
      Feedback.create(
      comments: "Very nice.  Let's proceed to production.",
      posting_id: 23,
      creator_id: 3,
      creator_name: "alex"
      )
    #POSTING 24
    Posting.create(
    title: "1st Review",
    comments: "Studio has finished with the first iteration of the banners.  Please let us know what you think.",
    link_url: "",
    execution_id: 16
    )
      #FEEDBACK 21
      Feedback.create(
      comments: "They've done a good job on recreating the design, but the color seems excessively muted.  Can we fix that?",
      posting_id: 24,
      creator_id: 3,
      creator_name: "alex"
      )
#CAMPAIGN 5
Campaign.create(
  title: "BennVogel Guitars - Launch",
  manager_id: 1
)
  #EXECUTION 17
  Execution.create(
  title: "Launch Spot :30",
  format: "Network specs",
  media_type: "TV",
  creator_id: 1,
  campaign_id: 5
  )
    #POSTING 25
    Posting.create(
    title: "Script",
    comments: "Initial script is ready to go.  Let us know what you think!",
    link_url: "",
    execution_id: 17
    )
      #FEEDBACK 22
      Feedback.create(
      comments: "Oh my.  We like it a lot.  We're still waiting for some internal comments, but we can address those in the production phase.  Let's get started.",
      posting_id: 25,
      creator_id: 5,
      creator_name: "greg"
      )
    #POSTING 26
    Posting.create(
    title: "Rough Cut 1",
    comments: "Here is our first rough cut.  Please review for timing only, as color and other finishing touches will be added later.",
    link_url: "",
    execution_id: 17
    )
      #FEEDBACK 23
      Feedback.create(
      comments: "Let's start with the guitar shot instead.  Other than that, we're good to lock timing.",
      posting_id: 26,
      creator_id: 5,
      creator_name: "greg"
      )
  #EXECUTION 18
  Execution.create(
  title: "Two Page Spread",
  format: "",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 5
  )
    #POSTING 27
    Posting.create(
    title: "Rough Comp",
    comments: "Let us know what you like about this approach.  We have time to revise if needed.",
    link_url: "",
    execution_id: 18
    )
      #FEEDBACK 24
      Feedback.create(
      comments: "The right page looks good, but the left page needs some work.  Let's bring the focus more on the product.",
      posting_id: 27,
      creator_id: 6,
      creator_name: "andy"
      )
  #EXECUTION 19
  Execution.create(
  title: "One Page Spread",
  format: "",
  media_type: "Print",
  creator_id: 1,
  campaign_id: 5
  )
    #POSTING 28
    Posting.create(
    title: "Rough Comp",
    comments: "We're pulling a lot of elements and layout from the right page of the two page execution.  Let us know how you feel.",
    link_url: "",
    execution_id: 19
    )
#CAMPAIGN 6
Campaign.create(
  title: "BennVogel Guitars - PostLaunch",
  manager_id: 1
)
  #EXECUTION 20
  Execution.create(
  title: "Sweet Savings :30",
  format: "",
  media_type: "Radio",
  creator_id: 1,
  campaign_id: 6
  )
    #POSTING 29
    Posting.create(
    title: "Script",
    comments: "This follows where we left off in our last meeting.  Please confirm if this direction is on track.",
    link_url: "",
    execution_id: 20
    )
      #FEEDBACK 25
      Feedback.create(
      comments: "Yup, this is exactly what we had in mind.  Let's move with it.",
      posting_id: 29,
      creator_id: 6,
      creator_name: "andy"
      )
    #POSTING 30
    Posting.create(
    title: "Rough Record",
    comments: "We have an initial recording.  Let us know your thoughts.",
    link_url: "",
    execution_id: 20
    )
      #FEEDBACK 26
      Feedback.create(
      comments: "Love it.  Let's get some reads from VO actors.",
      posting_id: 30,
      creator_id: 6,
      creator_name: "andy"
      )
  #EXECUTION 21
  Execution.create(
  title: "IN-STORE Promo Stand",
  format: "",
  media_type: "Other",
  creator_id: 1,
  campaign_id: 6
  )
    #POSTING 31
    Posting.create(
    title: "Initial Comp",
    comments: "What do you guys think of the display?  ;)",
    link_url: "",
    execution_id: 21
    )
      #FEEDBACK 27
      Feedback.create(
      comments: "We are cracking up over here.  Can't believe they made it.  :)",
      posting_id: 31,
      creator_id: 5,
      creator_name: "greg"
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
#MEMBERSHIP 13
Membership.create(campaign_id: 4, member_id: 1)
#MEMBERSHIP 14
Membership.create(campaign_id: 4, member_id: 2)
#MEMBERSHIP 15
Membership.create(campaign_id: 4, member_id: 3)
#MEMBERSHIP 16
Membership.create(campaign_id: 4, member_id: 4)
#MEMBERSHIP 17
Membership.create(campaign_id: 5, member_id: 1)
#MEMBERSHIP 18
Membership.create(campaign_id: 5, member_id: 5)
#MEMBERSHIP 19
Membership.create(campaign_id: 5, member_id: 6)
#MEMBERSHIP 20
Membership.create(campaign_id: 6, member_id: 1)
#MEMBERSHIP 21
Membership.create(campaign_id: 6, member_id: 5)
#MEMBERSHIP 22
Membership.create(campaign_id: 6, member_id: 6)
