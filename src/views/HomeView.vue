
<template>
  <div class="relative isolate overflow-hidden bg-gray-900 min-h-screen border-2 border-solid border-blue-400">  
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    
    <div class="flex flex-col justify-center">
      
      <div class="p-10 mr-5 ml-5 border border-red-500 h-screen">
        <div class="border border-white">
          <h2 class="whitespace-nowrap font-mono text-xl font-bold text-white animate-typing text-left">Hi! I'm</h2>
          <h1 class="text-6xl text-center justify-center text-white font-abril"> Beverly Coronel</h1>
          <p class=" text-gray-300">Get to know me </p>
        </div>
      </div>

      
      <div class="m-5 p-10 mr-5 ml-5 border border-solid border-red-400">
        <h1 id="about" class="text-white font-bold text-3xl"> About </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>
      
      <div class="m-5 p-10 mr-15 ml-15 border border-solid border-red-400">
        <h1 id="resume" class="text-white font-bold text-3xl"> Resume </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>
      
      <div class="m-5 p-10 mr-15 ml-15 border border-solid border-red-400">
        <h1 id="projects" class="text-white font-bold text-3xl "> Projects </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
        <div class="m-0">
          <Project v-bind="websiteProps"></Project>       
          <Project v-bind="appProps"></Project>
          <Project v-bind="testProps">
            Info about it
          </Project>
        </div>
        
      </div>
      
      <div class="m-5 p-10 mr-15 ml-15 border border-solid border-red-400">
        <h1 id="contact" class="text-white font-bold text-3xl"> Contact </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>

    </div>
      
    </div>
  </template>
  
<script setup>

import Project from '../components/Project.vue'

const websiteProps = 
{projectTitle: "Website Project", 
projectImage: "millie.jpg", 
projectDescription: "This is a test project description about the website project. This is a test project description about the website project. "};

const appProps = 
{projectTitle: "App Project", 
projectImage: "millie.jpg",
projectDescription: "This is a test project description for the iOS project. There will be much more text so I have to be prepared to handle as much as possible. \
It should be short but not as short so I am not sure how it's going to go"};

const testProps = 
{projectTitle: "Test Project", 
projectImage: "millie.jpg",
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something"};

</script>
