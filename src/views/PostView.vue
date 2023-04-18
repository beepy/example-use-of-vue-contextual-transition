<script setup lang="ts">
import { useRoute } from 'vue-router';
import { posts, authors } from '../data/blog';

const route = useRoute();
const slug = route.params.slug;
const postIndex = posts.findIndex((p) => p.slug === slug);
const post = posts[postIndex];
const previousPost = postIndex > 0 ? posts[postIndex - 1] : undefined;
const nextPost =
  postIndex < posts.length - 1 ? posts[postIndex + 1] : undefined;

if (post) {
  post.author = authors.find((a) => a.slug === post.authorSlug);
}
</script>
<template>
  <div
    v-relative-slide="{
      type: 'posts',
      value: postIndex
    }"
  >
    <div class="max-w-xl mx-auto mt-6">
      <template v-if="post">
        <img
          v-shared-element="{
            role: 'img',
            id: post.slug,
            type: 'post'
          }"
          :src="post.headerUrl"
          style="aspect-ratio: 1280 / 720"
        />
        <div class="px-6 md:px-0">
          <h2
            v-shared-element="{
              role: 'title',
              id: post.slug,
              type: 'post'
            }"
            class="text-lg md:text-xl font-bold mt-6"
          >
            {{ post.title }}
          </h2>
          <div class="text-content" v-html="post.content" />
          <div class="text-content" v-html="post.content" />
          <div class="text-content" v-html="post.content" />
          <RouterLink
            v-if="post.author"
            :to="`/authors/${post.author.slug}`"
            class="flex flex-col basis-40 items-center my-6"
          >
            <img
              v-shared-element="{
                role: 'img',
                id: post.author.slug,
                type: 'author'
              }"
              :src="post.author.img"
              class="w-12 rounded-full"
              style="aspect-ratio: 1 / 1"
            />
            <span
              v-shared-element="{
                role: 'title',
                id: post.author.slug,
                type: 'author'
              }"
              class="text-sm"
              >{{ post.author.title }}</span
            >
          </RouterLink>
          <div class="flex my-6">
            <RouterLink
              v-if="previousPost"
              :to="`/blog/${previousPost.slug}`"
              class="flex-grow"
            >
              &#60; {{ previousPost.title }}
            </RouterLink>
            <RouterLink
              v-if="nextPost"
              :to="`/blog/${nextPost.slug}`"
              class="text-right flex-grow"
            >
              {{ nextPost.title }} &#62;
            </RouterLink>
          </div>
        </div>
      </template>
      <template v-else>
        <p>Not found {{ slug }}</p>
      </template>
    </div>
  </div>
</template>
