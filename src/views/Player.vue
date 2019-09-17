<template>
    <div>
        <ul>
            <li>Player: {{ player.name }}</li>
            <li><v-img :src="player.headshot" width="200" /></li>
            <li>First Name: {{ player.givenName }}</li>
            <li>Last Name: {{ player.familyName }}</li>
            <li>Hometown: {{ player.homeLocation }}</li>
            <li>Nationality: {{ player.nationality }}</li>
            <li>Number: {{ player.attributes.player_number }}</li>
            <li>Role: {{ player.attributes.role }}</li>
        </ul>

        <span>Signature Heroes</span>
        <ul>
            <li v-for="hero in player.attributes.heroes">{{ hero }}</li>
        </ul>
        

        <!-- <div>
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
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Api } from '@/data/Api'
import { Player } from '@/data/Player'

@Component({components: {  } })
export default class PlayerComponent extends Vue {
    private player: Player = new Player();
    //Lifecycle hooks
    mounted () {

        let api = new Api()
        api.getPlayerById(<number><unknown>this.$route.params.id).then(
            response => {
                var json = response.data.data.player
                this.player = <Player>json
            }
        )
    }
}
</script>