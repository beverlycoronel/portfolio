
<template>
  <div class="bg-gray-900 text-white overflow-hidden overflow-x-hidden">
    <!-- header / nav bar -->
    <header class="fixed inset-x-0 top-0 z-50  ">
      <nav class="flex items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-50" aria-label="Global">
        <div class="flex lg:flex-1 ">
          <!-- <a href="#" class="-m-1 p-1">
            <img class="h-8 w-auto rounded-2xl" src="/public/nala.jpg" alt="" />
          </a> -->
        </div>
        <div class="flex gap-x-10 opacity-100">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
        </div>
      </nav>
    </header>
    

    <!-- content -->
    <div class="overflow-hidden isolate">

      <!-- first background color upper -->
      <div class="blur-3xl border-4 border-pink-500 absolute inset-x-0 m-0 p-0 -top-40 -z-10 transform-gpu overflow-hidden " aria-hidden="true">
        <div class="animate-pulse-normal relative m-0 p-0 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6f2e49] to-[#a06cf4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>     
      <!-- second background color left --> 
      <div class="blur-3xl border-4 border-pink-500 hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu " aria-hidden="true">
        <div class="animate-pulse-slow relative aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#f01772] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <!-- third background color right -->
      <!-- <div class="border-4 border-pink-500 absolute -top-50 left-1/2 -z-10 -translate-x-1/2 transform-gpu sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div class="animate-pulse-slower relative aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#f21a74] to-[#776fff] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
        <!-- fourth background color down -->
        <div class="blur-3xl absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-39rem)]" aria-hidden="true">
          <div class="animate-pulse-slower relative left-[calc(100%-3rem)] aspect-[1155/678] w-[30.125rem] -translate-x-3/4 bg-gradient-to-tr from-[#e62c79] to-[#4d42e3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 94.1% 44.1%)"></div>
        </div>


      <div class="border-2 md:px-12 lg:px-36 overscroll-contain xl:px-36 2xl:px-48 sm:border-teal-500 md:border-yellow-500 lg:border-emerald-500 xl:border-pink-500 2xl:border-green-500">

        <!-- home screen with name and short description -->
        <div class="flex flex-col inset-0 mx-auto max-w-full py-32 sm:py-48 lg:py-56 h-screen justify-center content-center ">
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
      <div id="about" class=" border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
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
      </div>
      
      
      <!-- projects -->
      <div id="projects" class=" border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
        <h1 class="text-white font-bold text-3xl "> Projects </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
        
        <div class="h-max-96 grid grid-cols-1 gap-8 mr-0 ml-0 mt-5 max-w-none auto-rows-fr ">
          <ProjectView v-bind="websiteProps"></ProjectView>      
        </div>
        
        <div class="h-max-96 grid grid-cols-1 gap-8 mr-0 ml-0 my-5 max-w-none auto-rows-fr sm:grid-cols-2 lg:grid-cols-4 ">   
          <ProjectView v-bind="websiteProps"></ProjectView>
          <ProjectView v-bind="appProps"></ProjectView>
          <ProjectView v-bind="terminalProps"></ProjectView>
          <ProjectView v-bind="anchorProps"></ProjectView>
        </div>
        
      </div>
      
      <div class=" border-red-400 pt-24 px-5 mx-5 pb-5">
        <ProjectInfo v-bind="websiteProps"></ProjectInfo>
        <ProjectInfo v-bind="appProps"></ProjectInfo>
        <ProjectInfo v-bind="terminalProps"></ProjectInfo>
        <ProjectInfo v-bind="anchorProps"></ProjectInfo>
        
      </div>
      
      <!-- contact -->
      <div id="contact" class=" border-solid border-red-400 pt-24 px-5 mx-5 pb-5 h-screen">
        <h1 class="text-white font-bold text-3xl"> Contact </h1>
        <p class="text-white">
          I'm a Computer Science masters student at Georgia Tech. 
        </p>
      </div>
      
    </div>
  </div>
  </div>

<!-- done -->

</template>
  
<script lang="ts" setup>

import ProjectView from '../components/ProjectView.vue'
import ProjectInfo from '../components/ProjectInfo.vue'
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
projectImage: "bites.jpg", 
projectTechnologies: ["NextJS", "Typescript", "Other"],
projectDescription: "This is a test project description about the website project. This is a test project description about the website project. "};

const appProps = 
{projectTitle: "Hearts", 
projectImage: "date.jpg",
projectTechnologies: ["Swift", "Firebase"],
projectDescription: "This is a test project description for the iOS project. There will be much more text so I have to be prepared to handle as much as possible. \
It should be short but not as short so I am not sure how it's going to go"};

const terminalProps = 
{projectTitle: "Terminal", 
projectImage: "terminal.jpg",
projectTechnologies: ["Tech1"],
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something"};

const anchorProps = 
{projectTitle: "Anchor", 
projectImage: "news.jpg",
projectTechnologies: ["ReactJS"],
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something"};


</script>
