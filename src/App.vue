<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const duration = ref(250);
</script>

<template>
  <header class="max-w-screen-sm" style="margin: 0 auto">
    <ul class="reset flex gap-6 justify-center">
      <li class="mr-6">
        <RouterLink class="text-blue-500 hover:text-blue-800" to="/"
          >Home</RouterLink
        >
      </li>
      <li class="mr-6">
        <RouterLink class="text-blue-500 hover:text-blue-800" to="/about"
          >About</RouterLink
        >
      </li>
    </ul>
    <!-- <h1 class="text-2xl text-center font-bold">Demo Blog</h1> -->
  </header>

  <RouterView v-slot="{ Component, route }">
    <template v-if="Component">
      <ContextualTransition :duration="duration">
        <component :is="Component" :key="route.path" />
      </ContextualTransition>
    </template>
  </RouterView>
</template>

<style>
.text-content ul,
.text-content ol,
.text-content p,
.text-content blockquote {
  margin-bottom: 1em;
}

/* tailwind */

.max-w-screen-sm {
  max-width: 640px;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.justify-center {
  justify-content: center;
}

.flex {
  display: flex;
}

.block {
  display: block;
}

menu.reset,
ol.reset,
ul.reset {
  list-style: none;
  margin: 0;
  padding: 0;
}

.items-center {
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.rounded {
  border-radius: 0.25rem;
}

.items-stretch {
  align-items: stretch;
}

.w-24 {
  width: 6rem;
}

.flex-col {
  flex-direction: column;
}

.basis-40 {
  flex-basis: 10rem;
}

.rounded-full {
  border-radius: 9999px;
}

.w-12 {
  width: 3rem;
}

.w-96 {
  width: 24rem;
}

.border {
  border: solid 1px var(--border);
}

.line-height-1 {
  line-height: 1;
}

.mt-6 {
  margin-top: 2rem;
}

.bg-gray-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.w-full {
  width: 100%;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.inline-block {
  display: inline-block;
}
</style>
