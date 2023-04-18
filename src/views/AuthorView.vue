<script setup lang="ts">
import { useRoute } from "vue-router";
import { authors } from "../data/blog";

const route = useRoute(); 
const slug = route.params.slug;
const authorIndex = authors.findIndex((p) => p.slug === slug)
const author = authors[authorIndex]
const previousAuthor = authorIndex > 0 ? authors[authorIndex - 1] : undefined
const nextAuthor = authorIndex < (authors.length - 1) ? authors[authorIndex + 1] : undefined

</script>
<template>
<div v-relative-slide="{
    type: 'authors',
    value: authorIndex
  }">
  <div class="max-w-2xl mx-auto mt-12">
    <div v-if="author" class="md:flex gap-4 px-6 md:px-0">
      <div class="flex-grow text-center">
        <img :src="author.img" v-shared-element="{
          role: 'img', id: author.slug + '-author' }" class="inline-block rounded-full w-96" style="aspect-ratio: 1 / 1" />
      </div>
      <div class="flex-grow">
        <h2 class="text-lg md:text-xl font-bold" v-shared-element="{
          role: 'title', id: author.slug + '-author' }">{{ author.title }}</h2>
        <div v-html="author.content" class="text-content" />
        <div class="flex">
          <RouterLink v-if="previousAuthor" :to="`/authors/${previousAuthor.slug}`" class="flex-grow">
            &#60; {{ previousAuthor.title }}
          </RouterLink>
          <RouterLink v-if="nextAuthor" :to="`/authors/${nextAuthor.slug}`" class="text-right flex-grow">
            {{ nextAuthor.title }} &#62;
          </RouterLink>
        </div>
      </div>
    </div>
    <template v-else>
      <p>Not found {{ slug }}</p>
    </template>
  </div>
</div>  
</template>