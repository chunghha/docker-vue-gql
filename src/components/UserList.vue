<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile v-for="user in allUsers" :key="user.id" avatar>
            <v-list-tile-avatar>
              <img :src="user.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-text="user.firstName + ' ' + user.lastName"></v-list-tile-title>
              <v-list-tile-sub-title v-text="user.email"></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="accent">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { ALL_USERS_QUERY } from '../graphql';

export default {
  data() {
    return {
      allUsers: []
    };
  },
  apollo: {
    // fetch all users
    allUsers: {
      query: ALL_USERS_QUERY
    }
  }
};
</script>
