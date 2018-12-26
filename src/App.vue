<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <img alt="Vue logo" src="./assets/logo.png" class="app-logo">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Users</v-btn>
      <v-btn flat to="/posts">Posts</v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
.app-logo {
  height: 56px;
  padding: 8px 0 0 0;
}
</style>
