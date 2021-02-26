<template>
  <div>
    <v-card v-for="thread in threads" :key="thread.id" class="col-large push-top">
      <v-card-title>
        {{ thread.title }}
      </v-card-title>
            <v-row v-for="postId in thread.posts" :key="postId.id" style="border: 1px solid black;">
        <v-col cols="2">
          <v-row justify="center">
            <v-avatar size="96">
              <img alt="" class="avatar-large" :src="users[posts[postId].userId].avatar">
            </v-avatar>
          </v-row>
          <v-row justify="center">
            <a href="#" class="user-name">
              {{ users[posts[postId].userId].name }}
            </a>
          </v-row>
        </v-col>
        <v-col>
          {{ posts[postId].text }}
        </v-col>
        <v-card-subtitle>
          {{ posts[postId].publishedAt }}
        </v-card-subtitle>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'HelloWorld',

  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>


<!--<div v-for="thread in threads" :key="thread.id" class="col-large push-top">-->
<!--<h1>{{ thread.title }}</h1>-->
<!--<div class="post-list">-->
<!--  <div v-for="postId in thread.posts" :key="postId.id" class="post">-->
<!--    <div class="user-info">-->
<!--      <a href="#" class="user-name">-->
<!--        {{ users[posts[postId].userId].name }}-->
<!--      </a>-->
<!--      <a href="#">-->
<!--        <img alt="" class="avatar-large" :src="users[posts[postId].userId].avatar">-->
<!--      </a>-->
<!--      <div class="post-content">-->
<!--        <div>-->
<!--          {{ posts[postId].text }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="post-date text-faded"></div>-->
<!--    {{ posts[postId].publishedAt }}-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->