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
    <ul class="max-w-xl mx-auto mt-6 px-4 md:px-0">
      <li
        v-for="post in posts"
        :key="post.id"
        class="flex items-stretch mb-4 shadow-xl rounded border"
      >
        <RouterLink :to="`/blog/${post.slug}`" class="flex-shrink">
          <img
            v-shared-element="{
              role: 'img',
              id: post.slug
            }"
            :src="post.thumbnailUrl"
            class="w-24"
            style="aspect-ratio: 1 / 1"
          />
        </RouterLink>
        <RouterLink
          :to="`/blog/${post.slug}`"
          class="text-lg md:text-xl font-bold flex-grow px-6 text-gray-600 leading-5 flex items-center"
        >
          <h3
            v-shared-element="{
              role: 'title',
              id: post.slug
            }"
          >
            {{ post.title }}
          </h3>
        </RouterLink>

        <RouterLink
          v-if="post.author"
          :to="`/authors/${post.author.slug}`"
          class="flex-col basis-40 items-center hidden md:flex justify-center"
        >
          <img
            v-shared-element="{
              role: 'img',
              id: post.author.slug + '-author',
              only: 'leave'
            }"
            :src="post.author.img"
            class="w-12 rounded-full"
            style="aspect-ratio: 1 / 1"
          />
          <span
            v-shared-element="{
              role: 'title',
              id: post.author.slug + '-author',
              only: 'leave'
            }"
            class="text-sm"
            >{{ post.author.title }}</span
          >
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
