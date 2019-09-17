<template>
  <v-app>
    <v-app-bar app dark elevate-on-scroll hide-on-scroll>
      <router-link to="/">
        <v-img src="@/assets/owl-logo.jpg" contain max-height="50px" max-width="100" />
      </router-link>
      
      <v-toolbar-title class="headline text-uppercase">
        <span>Overwatch</span>
        <span class="font-weight-light">League</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :to="{name: 'teams'}" color="orange" dark>
          Teams
      </v-btn>      
    </v-app-bar>


    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
