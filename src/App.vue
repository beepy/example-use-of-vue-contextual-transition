<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
// import { ContextualTransition } from 'vue-contextual-transition';

const duration = ref(250);
</script>

<template>
  <header class="max-w-screen-sm" style="margin: 0 auto">
    <!-- 
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
 -->
    <ul class="flex px-6">
      <li class="mr-6">
        <RouterLink class="text-blue-500 hover:text-blue-800" to="/"
          >Home</RouterLink
        >
      </li>
      <li class="mr-6">
        <RouterLink class="text-blue-500 hover:text-blue-800" to="/blog"
          >Blog</RouterLink
        >
      </li>
      <li>
        <button @click="duration = duration + 250">
          Test {{ duration }}
        </button>
      </li>
    </ul>
  </header>

  <RouterView v-slot="{ Component, route }">
    <ContextualTransition :duration="duration">
      <component :is="Component" :key="route.path" />
    </ContextualTransition>
  </RouterView>

  <!-- 
  <RouterView v-slot="{ Component, route }">
    <transition v-bind="route.meta.transition">
      <component :is="Component" />
    </transition>
  </RouterView>
 -->
</template>

<style>
a {
  display: block;
}
</style>
