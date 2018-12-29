<template>
  <v-app style="background: #f4f4f4;">
    <v-toolbar color="#fff" class="elevation-2" app>
      <v-toolbar-title class="headline text-uppercase">
        <img alt="Vue logo" src="./assets/logo.png" class="app-logo">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" to="/">Users</v-btn>
      <v-btn flat color="primary" to="/posts">Posts</v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-class-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang='scss'>
.app-logo {
  height: 56px;
  padding: 8px 0 0 0;
}
</style>
