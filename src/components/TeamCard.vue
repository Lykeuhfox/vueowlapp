<template>
    <v-card>
        <v-list-item :color="team.colors.primary.color">
            <v-list-item-content>
                <v-list-item-title class="headline">{{ team.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ team.location }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-2"></v-divider>
        <v-img :src="team.logo.main.png" contain height="175" />
        <v-divider class="mt-2"></v-divider>

        <v-card-actions>
            <v-btn
                :to="{name: 'team', params: {id: team.id}}"
                text :color="team.colors.primary.color">
                More Info
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="hasTwitter" :href="twitterUrl" target="_blank" icon>
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn v-if="hasYoutube" :href="youtubeUrl" target="_blank" icon>
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Team, TeamSocialMediaAccount } from '@/data/Team'

@Component
export default class TeamCard extends Vue{

    @Prop({default: new Team()}) team: Team;

    mounted () {
        
    }

    get hasTwitter () : boolean {
        return this.getTwitterAccount() != null
    }

    get twitterUrl () : string {
        return this.getTwitterAccount().url
    }

    get hasYoutube () : boolean {
        return this.getYoutubAccount() != null
    }

    get youtubeUrl () : string {
        return this.getYoutubAccount().url
    }

    getAccounts () : TeamSocialMediaAccount[] {
        return this.team.accounts;
    }

    getAccount (accountType: string) : TeamSocialMediaAccount {
        return <TeamSocialMediaAccount>this.getAccounts().find(a => a.type.toLowerCase() == accountType)
    }

    getTwitterAccount () {
        return this.getAccount('twitter')
    }

    getYoutubAccount () {
        return this.getAccount('youtube_channel')
    }
}

</script>