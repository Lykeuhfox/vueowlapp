<template>
    <div>
        <header>
            <v-card :color="team.colors.primary.color" tile>
                <v-container fluid>
                    <v-img :src="team.logo.altDark.png" width="200" />
                </v-container>
                
            </v-card>
            <v-sheet :color="team.colors.secondary.color" tile height="10"></v-sheet>
        </header>
        <span>Team: {{ team.name }}</span>
        <span>Location: {{ team.location }}</span>

        

        <div>
            <div v-for="player in team.players" :key="player.id">
                <ul>
                    <li><v-img :src="player.headshot" width="150" /></li>
                    <li>id: {{ player.id }}</li>
                    <li>name: {{ player.name }}</li>
                    <li>full name: {{ player.fullName }}</li>
                    <li>role: {{ player.role }}</li>
                    <li>number: {{ player.number }}</li>
                    <li>hometown: {{ player.homeLocation }}</li>
                </ul>
                <v-btn
                    :to="{name: 'player', params: {id: player.id}}"
                    text :color="team.colors.primary.color">
                    More Info
                </v-btn>               
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Api } from '@/data/Api'
import { Team } from '@/data/Team'

@Component({components: {  } })
export default class TeamComponent extends Vue {
    private team: Team = new Team();

    //Lifecycle hooks
    mounted () {

        let api = new Api()
        api.getTeamById(<number><unknown>this.$route.params.id).then(
            response => {
                var json = response.data.data
                this.team = <Team>json
            }
        )
    }
}
</script>