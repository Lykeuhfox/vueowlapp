<template>
  <HelloWorld />
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeComponent extends Vue {}

// import Vue from 'vue';
// import HelloWorld from '../components/HelloWorld.vue';

// export default Vue.extend({
//   components: {
//     HelloWorld,
//   },
// });
</script>
