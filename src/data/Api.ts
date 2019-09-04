import Axios from 'axios'

export class Api{
    public getAllTeams() {
        var url = 'https://api.overwatchleague.com/v2/teams'
        return Axios.get(url)
    }

    getTeamById (teamId: number) {
        var url = `https://api.overwatchleague.com/v2/teams/${teamId}`
        return Axios.get(url)
    }
}