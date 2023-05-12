<script setup lang="ts">
import { computed } from 'vue';
import { posts as rawPosts, authors } from '../data/blog';

const posts = computed(() => {
  return rawPosts.map((p) => {
    const a = authors.find((a) => a.slug === p.authorSlug);
    return {
      ...p,
      author: a
    };
  });
});
</script>

<template>
  <div>
    <ul class="post-index">
      <li v-for="post in posts" :key="post.slug" class="shadow-xl rounded">
        <RouterLink :to="`/post/${post.slug}`" class="thumbnail">
          <img
            v-shared-element="{
              role: 'img',
              id: post.slug,
              type: 'post'
            }"
            :src="`.${post.thumbnailUrl}`"
          />
        </RouterLink>
        <RouterLink :to="`/post/${post.slug}`" class="title">
          <h3
            v-shared-element="{
              role: 'title',
              id: post.slug,
              type: 'post'
            }"
          >
            {{ post.title }}
          </h3>
        </RouterLink>

        <RouterLink
          v-if="post.author"
          :to="`/author/${post.author.slug}`"
          class="author"
        >
          <!--
            why only: 'leave'? When entering, we don't know which instance of
            the author we should transition to
          -->

          <img
            v-shared-element="{
              role: 'img',
              id: post.author.slug,
              only: 'leave',
              type: 'author'
            }"
            :src="`.${post.author.img}`"
            class="thumbnail rounded-full"
          />
          <span
            v-shared-element="{
              role: 'title',
              id: post.author.slug,
              only: 'leave',
              type: 'author'
            }"
            class="title"
            >{{ post.author.title }}</span
          >
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.post-index {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.post-index > li {
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
}

.post-index > li > .thumbnail img {
  border-radius: 0.25rem 0.25rem 0 0;
}
.post-index > li > .title h3 {
  margin: 0;
  text-align: center;
  padding: 0 1rem;
  line-height: 1.2;
}

.post-index > li > .author {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.post-index > li > .author img {
  max-width: 40px;
}
</style>
