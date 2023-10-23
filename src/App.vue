
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AnnouncementView from './components/AnnouncementView.vue'
const navigation = [
  { name: 'Contact', href: '/#contact' },
]
</script>

<template>
  <div class="overflow-hidden overflow-x-hidden">
  <header  class="fixed inset-x-0 top-0 z-50"> 
    <nav class="flex items-center justify-between p-6 lg:px-8 bg-black bg-opacity-50" aria-label="Global">
      <div class="flex lg:flex-1 ">
      </div>
     
      <div class="flex gap-x-10 opacity-100">
        <RouterLink to="/about">
          <p class="text-sm font-semibold leading-6 text-white">About</p>
        </RouterLink>
        <RouterLink to="/projects">
          <p class="text-sm font-semibold leading-6 text-white">Projects</p>
        </RouterLink>
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
      </div>       
    </nav>
    <AnnouncementView id="announcement"></AnnouncementView>
  </header>
  </div>
  <RouterView />
</template>

