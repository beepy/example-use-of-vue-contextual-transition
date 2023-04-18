<script setup lang="ts">
type menuItem = {
  text: string;
  to: string;
  id: string;
};

const menuItems: menuItem[] = [
  { text: 'About', to: '/about', id: 'about' },
  { text: 'Blog', to: '/blog', id: 'blog' }
];
</script>

<template>
  <main class="home">
    <p>Examples</p>
    <ul>
      <li v-for="item in menuItems" :key="item.to">
        <RouterLink
          v-shared-element="{
            role: 'title',
            id: item.id,
            type: 'page'
          }"
          :to="item.to"
          >{{ item.text }}</RouterLink
        >
      </li>
    </ul>
    <!-- 
    <RouterLink
      style=""
      to="/about"
      v-shared-element="{
        role: 'title', id: 'about', scale: 'free'
      }">About<div style="" /></RouterLink>
      <img src="/sample-01-carrots-pexels-pixabay-54082-thumbnail.jpg" />
 -->
  </main>
</template>

<style>
/*  .contextual-transition-enter-active > *,
.contextual-transition-leave-active > * {
  opacity: 0.0;
}
*/
/*
main.home a {
  display: inline-block; background-color: yellow; position: relative;
}

main.home a div {
  display: none;
}

main.home.contextual-transition-leave-active a div, main.home.contextual-transition-enter-active a div {
  display: block;
  position: absolute; left: 0; top: 0; width: 100%; height: 100%;
  background-color: yellow;
  
}

main.home.contextual-transition-leave-active a div {
  transition: opacity 50ms;
}

main.home.contextual-transition-enter-active a div {
  transition: opacity 50ms 200ms;
}

main.home.contextual-transition-leave-from a div, main.home.contextual-transition-enter-to a div {
  opacity: 0;
}

main.home.contextual-transition-leave-to a div, main.home.contextual-transition-enter-from a div {
  opacity: 1;
}
*/
</style>
