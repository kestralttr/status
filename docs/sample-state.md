{
  currentUser: {
    id: 12,
    username: "alexbennett44"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    flashError: {errors: ["password too short"]}
  },
  campaigns: {
    1: {
      title: "Summer Sale",
      manager_id: 12,
      members: [12,5,6,4,18],
      approvers: [12,5,4]
    },
    2: {
      title: "Back To School",
      manager_id: 18,
      members: [12,5,6,4,18],
      approvers: [18,5,4]
    }
  },
  mediaTypes: {
    1: {
      title: "TV"
      creator_id: 6
    },
    2: {
      title: "Print"
      creator_id: 6
    }
  },
  executions: {
    1: {
      title: "Summer Commercial",
      format: "1920x1080 29.97fps Apple ProRes",
      info: "Will provide SD & HD versions"
    }
  },
  postings: {
    1: {
      title: "Script v1",
      link_id: 13,
      execution_id: 1,
      comments: "please let us know about legal lines"
    }
  },
  postingLinks: {
    1: {
      url: "www.myfreehosting.com/4D276F85GH9"
    }
  },
  feedback: {
    1: {
      postingId: 1,
      link_id: undefined,
      comments: "We need a complete rewrite."
    }
  },
  feedbackLinks: {}
}
