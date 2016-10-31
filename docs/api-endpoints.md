HTML API

Root
  - GET /
    - Loads React web app

JSON API

Users
  - POST /api/users
  - PATCH /api/users

Session
  - POST /api/session
  - DELETE /api/session
  - GET /api/session

Campaigns
  - GET /api/campaigns

  Ken: Does every note belong to a campaign? If so, this should be a nested resource, i.e. POST /api/campaigns/:campaign_id/notes

  - POST /api/notes
  - POST /api/notes
  - GET /api/notes/:id
  - PATCH /api/notes/:id
  - DELETE /api/notes/:id

Memberships
  - GET /api/campaign/:campaignId/memberships
  - POST /api/campaign/:campaignId/memberships
  - DELETE /api/campaign/:campaignId/memberships/:memberId

Approvalships
  - GET /api/campaign/:campaignId/approvalships
  - POST /api/campaign/:campaignId/approvalships
  - DELETE /api/campaign/:campaignId/approvalships/:approverId

# Are media types distinct to each campaign? If not, consider just making them an attribute of executions and giving campaigns a has_many :accepted_media_types association 

Media Types
  - GET /api/campaign/:campaignId/mediatypes
  - POST /api/campaign/:campaignId/mediatypes
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId

Executions
  - GET /api/campaign/:campaignId/mediatypes/:mediatypeId/executions
  - POST /api/campaign/:campaignId/mediatypes/:mediatypeId/executions
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId

Postings
  - GET /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings
  - POST /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId

Posting Links
  - GET /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/postinglinks
  - POST /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/postinglinks
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/postinglinks/:postinglinkId

Feedback
  - GET /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/feedback
  - POST /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/feedback
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/feedback/:feedbackId

Feedback Links
  - GET /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/feedbacklinks
  - POST /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/feedbacklinks
  - DELETE /api/campaign/:campaignId/mediatypes/:mediatypeId/executions/:executionId/postings/:postingId/feedbacklinks/:feedbacklinkId
