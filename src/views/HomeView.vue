
<template>
  <div class="bg-gray-900 text-white overflow-hidden overflow-x-hidden">
    <!-- header / nav bar -->
    <header class="fixed inset-x-0 top-0 z-50  ">
      <nav class="flex items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-50" aria-label="Global">
        <div class="flex lg:flex-1 ">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex gap-x-10 opacity-100">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
        </div>
      </nav>
    </header>

    <!-- content -->
    <div class="overflow-hidden isolate px-6 lg:px-8">

      <!-- first background color upper -->
      <div class="absolute inset-x-0 m-0 p-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
        <div class="animate-pulse-normal relative m-0 p-0 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>     
      <!-- second background color left --> 
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="animate-pulse-slow aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#f01772] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <!-- third background color right -->
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div class="animate-pulse-slower aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#f21a74] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <!-- fourth background color down -->
        <div class="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-39rem)]" aria-hidden="true">
          <div class="animate-pulse-slower relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>


      
      <!-- home screen with name and short description -->
      <div class="flex flex-col inset-0 mx-auto max-w-full py-32 sm:py-48 lg:py-56 h-screen justify-center content-center">
        <!-- hi i'm -->
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Hi! I'm 
          </div>
        </div>

        <div class="text-center">
          <h1 class="m-5 text-7xl font-bold tracking-tight text-gray-200 md:text-9xl">Beverly Coronel</h1>
          <p class="m-10 mt-6 text-md sm:text-lg leading-8 text-gray-200">I'm a MS Computer Science student actively looking for entry-level/internship software engineering opportunities.</p>
          <div class="m-10 mt-10 flex items-center justify-center gap-x-6">
            <a href="#about" class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get to know me</a>
            <a href="#projects" class="text-sm font-semibold leading-6 text-gray-100">Skip to projects <span aria-hidden="true">→</span></a>
          </div>
        </div>
        
      </div>
      
      <!-- about -->
      <div id="about" class="border border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
        <h1 class="text-white font-bold text-3xl"> About </h1>
        <p class="text-white">
          Hi there! I'm a Computer Science masters student currently attending Georgia Tech. I am currently on my second semester.
          Classes taken/in progress: 
          - Computer Networks
          - Graduate Operating Systems
        </p>
        <p>Computer Networks </p>
        <p>Graduate Operating Systems</p>
        <p>Whatever else I am taking</p>
        <p>-</p>
        <p> I did my undergrad at Louisiana Tech University. Classes from undergrad:
        </p>
        <p>Advanced Data Structures and Algorithms</p>
        <p>Software Engineering</p>
        <p>Computer Graphics</p>
        <div class="flex flex-row border-2 flex-1">
          <div class="border-2 flex-grow">One</div>
          <div class="border-2 flex-grow">Skills
            <h1>Skills</h1>
            <span> Java </span>
            <span> Python </span>
            <span> Javascript</span>
            <span> Typescript</span>
            <span> HTML </span> <span> CSS </span>
            <span>C</span>
          </div>

        </div>
      </div>
      
      <!-- resume -->
      <div id="resume" class="border border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
        <h1 class="text-white font-bold text-3xl"> Resume </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>
      
      <!-- projects -->
      <div id="projects" class="border border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
        <h1 class="text-white font-bold text-3xl "> Projects </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
        <div class="grid grid-cols-2 gap-8 mr-0 ml-0 mt-20 max-w-none auto-rows-fr ">
          <Project v-bind="websiteProps"></Project>       
          <Project v-bind="appProps"></Project>
          <Project v-bind="terminalProps">
            Info about it
          </Project>
          <Project v-bind="anchorProps"></Project>
        </div>
        
      </div>
      
      <!-- contact -->
      <div id="contact" class="border border-solid border-red-400 pt-24 px-5 mx-5 pb-5 h-screen">
        <h1 class="text-white font-bold text-3xl"> Contact </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>
      
    </div>
  </div>

<!-- done -->

  </template>
  
<script setup>

import Project from '../components/Project.vue'
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const mobileMenuOpen = ref(false)

const websiteProps = 
{projectTitle: "Bites", 
projectImage: "millie.jpg", 
projectDescription: "This is a test project description about the website project. This is a test project description about the website project. "};

const appProps = 
{projectTitle: "Hearts", 
projectImage: "millie.jpg",
projectDescription: "This is a test project description for the iOS project. There will be much more text so I have to be prepared to handle as much as possible. \
It should be short but not as short so I am not sure how it's going to go"};

const terminalProps = 
{projectTitle: "Terminal", 
projectImage: "millie.jpg",
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something"};

const anchorProps = 
{projectTitle: "Anchor", 
projectImage: "millie.jpg",
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something"};


</script>
