<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <template v-for="(user, index) in allUsers">
            <v-divider v-if="index > 0" :key="index"></v-divider>

            <v-list-tile :key="user.id" avatar>
              <v-list-tile-avatar>
                <img :src="user.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-text="user.firstName + ' ' + user.lastName"></v-list-tile-title>
                <v-list-tile-sub-title v-text="user.email"></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="primary">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-class-decorator';

import { ALL_USERS_QUERY } from '../graphql';

@Component({
  apollo: {
    // fetch all users
    allUsers: {
      query: ALL_USERS_QUERY
    }
  }
})
export default class UserList extends Vue {
  allUsers = [];
}
</script>
