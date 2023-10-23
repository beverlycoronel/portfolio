
<template>
  <div class="overflow-hidden overflow-x-hidden">
    <!-- content -->
    <div class="overflow-hidden isolate">
      <div class="absolute flex min-w-full max-w-full -z-10 h-screen object-cover bg-black">
        <video id="vid" class="relative flex object-cover min-w-full" data-autoplay autoplay webkit-autoplay playsinline webkit-playsinline loop muted>
            <source id="vid" src="https://bev-portfolio-bucket.s3.amazonaws.com/colors-engin.mp4" type="video/mp4">
        </video>
      </div>
      <div class=" z-10 md:px-12 lg:px-36 overscroll-contain xl:px-36 2xl:px-48">
        <div class="flex flex-col inset-0 mx-auto max-w-full py-32 sm:py-48 lg:py-56 h-screen justify-center content-center z-50 ">
          <div class="text-left">
            <h1 class="slide-up-fade-in m-5 text-7xl font-bold tracking-tight text-gray-200 md:text-8xl">hi, i'm bev</h1>
            <div class="m-10 mt-10 flex items-center gap-x-6">
              <router-link to="/about">
                <p class="slide-up-fade-in rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get to know me</p>
              </router-link>
              <RouterLink to="/projects">
                <p class="slide-up-fade-in text-sm font-semibold leading-6 text-gray-100"> Skip to projects <span aria-hidden="true">→</span></p>
              </RouterLink>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      
      <div id="contact" class=" border-solid border-red-400 pt-24 px-5 mx-5 h-screen w-auto">
        <h1 class="font-semibold text-4xl tracking-wide underline"> get in touch. </h1>
        <ContactView></ContactView>
      </div>
    </div>
  </div>
  </div>

<!-- done -->

</template>

<script lang="ts" setup>


import ContactView from '../components/ContactView.vue'

import '../styles/animations.css'
// import { ref } from 'vue'

</script>
