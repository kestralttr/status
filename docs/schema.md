USERS TABLE
id                integer       not null, primary key
username          string        not null, indexed, unique
password_digest   string        not null
session_token     string        not null, indexed, unique        

CAMPAIGNS TABLE
id                integer       not null, primary key
title             string        not null, unique, indexed
manager_id        integer       not null, foreign key (user), indexed
membership_id     integer       not null, foreign key (memberships), indexed
approvership_id   integer       not null, foreign key (approverships), indexed

MEMBERSHIPS TABLE - join table
campaign_id       integer       not null, foreign key (campaigns), indexed
member_id         integer       not null, foreign key (users), indexed

APPROVERSHIPS TABLE - join table
campaign_id       integer       not null, foreign key (campaigns), indexed
approver_id       integer       not null, foreign key (users), indexed

EXECUTIONS TABLE
id                integer       not null, primary key
title             string        not null
format            string        
info              text          
media_type        string        not null
creator_id        integer       not null, foreign key (users), indexed
campaign_id       integer       not null, foreign key (users), indexed
approved          boolean

POSTINGS TABLE
id                integer       not null, primary key
link_url          string        not null, foreign key (posting links), indexed
execution_id      integer       not null, foreign key (executions), indexed
title             string        not null
comments          text        

FEEDBACK TABLE
id                integer       not null, primary key
posting_id        integer       not null, foreign key (postings), indexed
link_url          integer       
comments          text          
