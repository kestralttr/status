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
approvalship_id   integer       not null, foreign key (approvalships), indexed

MEMBERSHIPS TABLE - join table
campaign_id       integer       not null, foreign key (campaigns), indexed
member_id         integer       not null, foreign key (users), indexed

APPROVALSHIPS TABLE - join table
campaign_id       integer       not null, foreign key (campaigns), indexed
approver_id       integer       not null, foreign key (users), indexed

MEDIA TYPES TABLE
id                integer       not null, primary key
title             string        not null
campaign_id       integer       not null, foreign key (campaigns), indexed
creator_id        integer       not null, foreign key (users), indexed

EXECUTIONS TABLE
id                integer       not null, primary key
title             string        not null
format            string        
info              text          
media_type_id     integer       not null, foreign key (media_types), indexed
creator_id        integer       not null, foreign key (users), indexed
approved          boolean

POSTINGS TABLE
id                integer       not null, primary key
link_id           integer       not null, foreign key (posting links), indexed
execution_id      integer       not null, foreign key (executions), indexed
title             string        not null
comments          text        

POSTING LINKS TABLE
id                integer       not null, primary key
url               string        not null

FEEDBACK TABLE
id                integer       not null, primary key
posting_id        integer       not null, foreign key (postings), indexed
link_id           integer       
comments          text          

FEEDBACK LINKS TABLE
id                integer       not null, primary key
url               string        not null
