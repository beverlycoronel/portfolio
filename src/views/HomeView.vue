
<template>
  <div class="overflow-hidden overflow-x-hidden">
    <!-- header / nav bar -->
    <header class="fixed inset-x-0 top-0 z-50  ">
      <nav class="flex items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-50" aria-label="Global">
        <div class="flex lg:flex-1 ">
        </div>
        <div class="flex gap-x-10 opacity-100">
          <router-link to="/about">
            <p class="text-sm font-semibold leading-6 text-gray-100">About</p>
          </router-link>
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
        </div>       
      </nav>
      <AnnouncementView id="announcement"></AnnouncementView>
    </header>
    

    <!-- content -->
    <div class="overflow-hidden isolate">
      <div class="absolute flex min-w-full max-w-full -z-10 h-screen object-cover bg-black">
        <video class="relative flex object-cover min-w-full" data-autoplay autoplay webkit-autoplay playsinline webkit-playsinline loop muted>
            <source src="/public/videos/colors.mp4" type="video/mp4">
        </video>

      </div>
      <div class=" md:px-12 lg:px-36 overscroll-contain xl:px-36 2xl:px-48">
        <div class="flex flex-col inset-0 mx-auto max-w-full py-32 sm:py-48 lg:py-56 h-screen justify-center content-center ">
          <div class="text-left">
            <h1 class="m-5 text-7xl font-bold tracking-tight text-gray-200 md:text-8xl">hi, i'm bev</h1>
            <div class="m-10 mt-10 flex items-center gap-x-6">
              <router-link to="/about">
                <p class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get to know me</p>
              </router-link>
              <a href="#projects" class="text-sm font-semibold leading-6 text-gray-100"> Skip to projects <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        
        <div id="projects" class=" border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
          <h1 class="font-bold text-5xl "> Projects </h1>
        </div>
        <div class=" border-red-400 pt-0 px-5 mx-5 pb-5">
          <ProjectInfo v-bind="websiteProps"></ProjectInfo>
          <ProjectInfo v-bind="appProps"></ProjectInfo>
          <!-- <ProjectInfo v-bind="terminalProps"></ProjectInfo> -->
          <ProjectInfo v-bind="anchorProps"></ProjectInfo>
          
        </div>
      
      <!-- contact -->
      <div id="contact" class=" border-solid border-red-400 pt-24 px-5 mx-5 h-screen w-auto">
        <h1 class="font-bold text-5xl"> Contact </h1>
        <ContactView></ContactView>
        <!-- <a target="_blank" href="https://icons8.com/icon/UFs0fMK31QCj/b-key">letter b</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
      </div>
      
    </div>
  </div>
  </div>

<!-- done -->

</template>
  
<script lang="ts" setup>

// import ProjectView from '../components/ProjectView.vue'
import ProjectInfo from '../components/ProjectInfo.vue'
// import UnderMaintenance from '../components/UnderMaintenance.vue'
import ContactView from '../components/ContactView.vue'
import AnnouncementView from '../components/AnnouncementView.vue'

import { ref } from 'vue'

const navigation = [
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
]

var button = document.getElementById("button")
  button?.addEventListener("click", () => {
    hide()
  })
  function hide() { 
    var e = document.getElementById("announcement");
    if (e) 
        e.style.display = 'none'
       
  }

const websiteProps = 
{projectTitle: "Bites", 
projectImage: "bites.jpg", 
projectTechnologies: ["NextJS", "Typescript"],
projectDescription: "A website to recommend restaurants based on cuisine preferences.",
projectHighlightOne: "Decide what you want to eat with a simple quiz",
projectHighlightTwo: "Get restaurant recommendations near you based on your cuisine preference or quiz results",
projectHighlightThree: "Still unsure? Get recommendations for popular new restaurants in your area"
};

const appProps = 
{projectTitle: "Hearts", 
projectImage: "date.jpg",
projectTechnologies: ["Swift", "Firebase"],
projectDescription: "An iOS application that facilitates the planning of dates with loved ones and friends.",
projectHighlightOne: "Search and get recommendations for fun activities near you with MapKit API.",
projectHighlightTwo: "Add images from your iOS device with help from PhotoKit framework, which are safely stored and retrieved from Firebase Storage.",
projectHighlightThree: "Add your significant other and friends to your date via invite link"
};

const terminalProps = 
{projectTitle: "Terminal", 
projectImage: "terminal.jpg",
projectTechnologies: ["Tech1"],
projectDescription: "\
A full-stack project for something to do something else. Built with something and something else, \
this does something with something that allows something to do something. If something then something \
but I am not sure how much something to something",
projectHighlightOne: "1",
projectHighlightTwo: "2",
projectHighlightThree: "3"
};

const anchorProps = 
{projectTitle: "Anchor", 
projectImage: "news.jpg",
projectTechnologies: ["ReactJS", "Express", "Python"],
projectDescription: "\
A 6-person capstone project news website that filters and compares articles from different popular sources based on political bias. My role was frontend developer.",
projectHighlightOne: "Compare articles for political bias across multiple sources such as CNN, Fox News, and New York Post",
projectHighlightTwo: "View each article's objectivity (objective or subjective) and sentiment (negative or positive) rating",
projectHighlightThree: "Identify which sentences in an article are more left-learning or more right-leaning."
};

// <!-- Video by Engin Akyurt: https://www.pexels.com/video/smoke-with-colors-2324293/ -->
</script>
