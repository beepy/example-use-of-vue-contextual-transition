<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { SharedElementTransition } from 'vue-shared-element-transition';

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
     <RouterLink class="text-blue-500 hover:text-blue-800" to="/">Home</RouterLink>
   </li>
   <li class="mr-6">
     <RouterLink class="text-blue-500 hover:text-blue-800" to="/blog">Blog</RouterLink>
   </li>
 </ul>
  </header>
  
  <RouterView v-slot="{ Component, route }">
    <SharedElementTransition :speed="250">
      <component :is="Component" :key="route.path" />
    </SharedElementTransition>
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
a { display: block; }
</style>
