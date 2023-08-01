
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex flex-row">
      <nav class="m-0 flex flex-row flex-1 border-solid border-2 border-black">
        <div class="flex-row flex-1 left-0 top-0 border-4">
          <img class="m-1 h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        
        <div class="flex flex-row flex-1 inset-y-0 right-0 h-10 m-1 border-4">
          <RouterLink class="m-1 h-10" to="/">Home</RouterLink>  
          <a href="#about" class="m-1 h-10"> About </a>  
          <a href="#resume" class="m-1 h-10"> Resume </a>  
          <a href="#projects" class="m-1 h-10"> Projects </a>  
          <a href="#contact" class="m-1 h-10"> Contact </a>  
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

