
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex flex-row flex-1 border-solid border-black border-2 place-content-center">
      <nav class="flex border-solid border-2 ">
        <RouterLink class="m-2" to="/">Home</RouterLink>  
        <a href="#about" class="m-2"> About </a>  
        <a href="#resume" class="m-2"> Resume </a>  
        <a href="#projects" class="m-2"> Projects </a>  
        <a href="#contact" class="m-2"> Contact </a>  
      </nav>
    </div>
  </header>

  <RouterView />
</template>

