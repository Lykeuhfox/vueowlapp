<template>
    <v-container fluid>
        <v-row dense align="start" justify="start" height="200">
            <v-col cols="2" v-for="team in teams" :key="team.id">
                <team-card v-bind:team="team" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Api } from '@/data/Api'
import { Team } from '@/data/Team'
import TeamCard from '@/components/TeamCard.vue'

@Component({components: { TeamCard } })
export default class TeamsComponent extends Vue {
    private teams: Team[] = [];

    //Lifecycle hooks
    mounted () {

        let api = new Api()
        api.getAllTeams().then(
            response => {
                var json = response.data.data
                this.teams = <Team[]>json
            }
        )
    }
}
</script>