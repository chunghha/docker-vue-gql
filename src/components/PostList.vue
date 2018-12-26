<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile v-for="post in allPosts" :key="post.id" avatar>
            <v-list-tile-avatar>
              <img :src="post.author.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-text="post.title"></v-list-tile-title>
              <v-list-tile-sub-title v-text="post.body"></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="accent">favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { ALL_POSTS_QUERY } from '../graphql';

export default {
  data() {
    return {
      allPosts: []
    };
  },
  apollo: {
    // fetch all users
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  }
};
</script>
