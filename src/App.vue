<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const duration = ref(250);
</script>

<template>
  <header class="max-w-screen-sm" style="margin: 0 auto">
    <ul class="flex gap-6 justify-center">
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
a {
  display: block;
}
</style>
