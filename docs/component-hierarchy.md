Component Hierarchy

AuthFormContainer
  - AuthForm

MyCampaignsContainer
  - MyCampaigns
    - CampaignIndexContainer
      - CampaignIndexItem


Ken: Would a user ever want to look at executions of different media types on the same index? if so, consider using search params rather than the restful routes you're describing here. i.e. CampaignDetail will have an ExecutionsIndexContainer that takes params such as media_type: 1, or created_after: 1/1/1959

CampaignDetailContainer
  - CampaignDetail
    - MediaTypesIndexContainer
      - MediaTypesIndex
        - MediaTypesIndexItem
          - ExecutionsIndexContainer
            - ExecutionsIndex
              - ExecutionsIndexItem
                - PostingsIndexContainer
                  - PostingsIndex
                    - PostingsIndexItem
                      - FeedbackIndexContainer
                        - FeedbackIndex
                          - FeedbackIndexItem

CampaignDetailContainer
  - CampaignDetail
    - ManageTeamContainer
      - ManageTeam

CampaignDetailContainer
  - CampaignDetail
    - ManageMediaTypesContainer
      - ManageMediaTypes

NewMediaTypeContainer
  - NewMediaType

NewExecutionContainer
  - NewExecution

NewPostingContainer
  - NewPosting

NewFeedbackContainer
  - NewFeedback

ROUTES
"/sign-up" --> "AuthFormContainer"
"/sign-in" --> "AuthFormContainer"
"/mycampaigns" --> "MyCampaignsContainer"
"/mycampaigns/campaign/:campaignId" --> "CampaignDetailContainer"
"/mycampaigns/campaign/:campaignId/manage-team" --> "ManageTeamContainer"
"/mycampaigns/campaign/:campaignId/manage-media-types" --> "ManageMediaTypesContainer"
"/new-campaign" --> "NewCampaignContainer"
"/new-media-type" --> "NewMediaTypeContainer"
"/new-execution" --> "NewExecutionContainer"
"/new-posting" --> "NewPostingContainer"
"/new-feedback" --> "NewFeedbackContainer"
