<template>
  <div class="overflow-hidden isolate">
    <header class="fixed inset-x-0 top-0 z-50  ">
      <nav class="flex items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-50" aria-label="Global">
        <div class="flex lg:flex-1 ">
        </div>
        <div class="flex gap-x-10 opacity-100">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
        </div>       
      </nav>
      <AnnouncementView id="announcement"></AnnouncementView>
    </header>
    <div class="absolute flex min-w-full max-w-full h-screen object-cover">
      <UnderMaintenance></UnderMaintenance>
    </div>
    
    <!-- <div id="about" class=" border-solid border-red-400 pt-40 px-5 mx-5 pb-5">
      <h1 class=" font-bold text-5xl pb-5"> About Me </h1>
      <div>
          <p> - </p>
      </div>
      <h1 class=" font-bold text-5xl pb-5"> Involvement in Tech </h1>
      <div class="border flex flex-row flex-1 justify-center justify-items-center p-5 ">
          <div class="border flex flex-col justify-center align-middle text-center w-full">
          <img class="object-cover h-48 w-auto rounded-full z-10 " src="/public/ghc.jpeg" alt="" /> 
        </div>
        <div class="flex flex-col align-middle justify-center w-full p-5">
          <p> - </p>
        </div>
      </div>
      <div>
        Second Div 
      </div>
      <h1 class=" font-bold text-5xl pb-5"> When I'm not coding </h1>
      <div class="border flex flex-row flex-1 justify-center justify-items-center p-5 ">
        
          <div class="flex flex-col align-middle justify-center w-full p-5">
              <p> - </p>
          </div>
          <div class="border flex flex-col justify-center align-middle text-center w-full">
              <img class="object-cover aspect-square h-48 w-auto rounded-full h" src="/public/nala.jpg" alt="" />
          </div>
      </div>
      <div>
        Second Div 
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '#contact' },
]
import UnderMaintenance from '../components/UnderMaintenance.vue'
import AnnouncementView from '../components/AnnouncementView.vue'

import { ref } from 'vue'

</script>
