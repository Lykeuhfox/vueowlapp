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

    public getAllPlayers() {
        var url = 'https://api.overwatchleague.com/players'
        return Axios.get(url)
    }

    getPlayerById (playerId: number) {
        var url = `https://api.overwatchleague.com/players/${playerId}`
        return Axios.get(url)
    }
}