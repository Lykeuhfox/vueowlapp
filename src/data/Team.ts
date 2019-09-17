export class Team {
    id:                     number                  = 0;
    divisionId:             number                  = 0;
    handle:                 string                  = "";
    name:                   string                  = "";
    abbreviatedName:        string                  = "";
    logo:                   TeamLogos               = new TeamLogos();
    hasFallBack:            boolean                 = false;
    location:               string                  = "";
    players:                TeamPlayer[]            = []; 
    colors:                 TeamColors              = new TeamColors();
    accounts:               TeamSocialMediaAccount[]    = [];
    website:                string                  = "";
}


export class TeamLogos{
    main:                   TeamLogo                = new TeamLogo();
    mainName:               TeamLogo                = new TeamLogo();
    altDark:                TeamLogo                = new TeamLogo();
}

export class TeamLogo {
    svg:                    string                  = "";
    png:                    string                  = "";
}

export class TeamPlayer{
    id:                     number                  = 0;
    handle:                 string                  = "";
    name:                   string                  = "";
    fullName:               string                  = "";
    role:                   string                  = "";
    accounts:               TeamSocialMediaAccount[]    = [];
    number:                 number                  = 0;
    headshot:               string                  = "";
    homeLocation:           string                  = "";
}

export class TeamSocialMediaAccount{
    id:                     number                  = 0;
    type:                   string                  = "";
    url:                    string                  = "";
}

export class TeamColors{
    primary:                TeamColor               = new TeamColor();
    secondary:              TeamColor               = new TeamColor();
    tertiary:               TeamColor               = new TeamColor();
}

export class TeamColor{
    color:                  string                  = "";
    opacity:                number                  = 1;
}