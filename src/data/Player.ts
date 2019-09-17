export class Player {
    id:                     number                  = 0;
    availableLanguages:     string[]                = [];
    handle:                 string                  = "";
    name:                   string                  = "";
    homeLocation:           string                  = "";
    accounts:               PlayerSocialMediaAccount[] = [];
    game:                   string                  = "";
    attributes:             PlayerAttributes        = new PlayerAttributes();
    attributesVersion:      string                  = "";
    familyName:             string                  = "";
    givenName:              string                  = "";
    nationality:            string                  = "";
    headshot:               string                  = "";
    teams:                  PlayerTeam[]            = [];
    user:                   PlayerUser              = new PlayerUser();
    type:                   string                  = "";
}

export class PlayerSocialMediaAccount {
    id:                     number                  = 0;
    competitorId:           number                  = 0;
    value:                  string                  = "";
    accountType:            string                  = "";
    isPublic:               boolean                 = false;
}

export class PlayerAttributes {
    hero_image:              string                  = "";
    heroes:                  string[]                = [];
    hometown:                string                  = "";
    player_number:           number                  = 0;
    preferred_slot:          number                  = 2;
    role:                    string                  = "";
}

export class PlayerTeam {
    team:                   PlayerTeamDetails       = new PlayerTeamDetails();
    //player
    //flags
}

export class PlayerTeamDetails {
    id:                     number                  = 0;
    availableLanguages:     string[]                = [];
    handle:                 string                  = "";
    name:                   string                  = "";
    homeLocation:           string                  = "";
    primaryColor:           string                  = "";
    secondaryColor:         string                  = "";
    accounts:               PlayerSocialMediaAccount[] = [];
    game:                   string                  = "";
    attributes:             PlayerTeamAttributes    = new PlayerTeamAttributes();
    attributesVersion:      string                  = "";
    //divisions
    abbreviatedName:        string                  = "";
    addressCountry:         string                  = "";
    logo:                   string                  = "";
    icon:                   string                  = "";
    secondaryPhoto:         string                  = "";
    type:                   string                  = "";
}

export class PlayerTeamAttributes {
    city:                   string                  = "";
    hero_image:             string                  = "";
    manager:                string                  = "";
    team_guid:              string                  = "";
}

export class PlayerUser {
    id:                     number                  = 0;
}