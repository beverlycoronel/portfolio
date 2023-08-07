<script setup lang="ts">
  defineProps<{
  projectTitle: String,
  projectImage: string,
  projectTechnologies: Array<String>,
  projectDescription: String,
    }>();


</script>
<template>
    <div class="relative isolate flex flex-col w-full  text-white">
        <div class="relative isolate flex flex-col oveflow-hidden rounded-2xl bg-gray-200/[1.0] text-white">
            <img class="object-cover h-64" :src="projectImage">
        </div>
        <div class="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 "></div>
        <div class="absolute inset-0 z-0 "></div>
        <div class="flex flex-wrap content-center gap-1 overflow-hidden leading-6 decoration-white[1.0]">
            <time datetime="2020-03-16" class="m-2 text-white">Mar 16, 2020</time>
        </div>
        <h3 >
            <a href="#">
                <span> "Boost your conversion rate"</span>
            </a>
        </h3>


        <!-- <div class="flex flex-row ">
            <div id="col1" class="flex flex-col m-5 flex-1">
                <h1 class="font-bold"> {{ projectTitle }} </h1>
                <p> Info about the project from Project.vue </p>
                <p> {{ projectDescription }} </p>
                <p> Image is {{ projectImage }}</p>
                
            </div>
            <div id="col2" class="flex flex-1 m-5 max-h-80 max-w-fit border-0 border-solid border-pink-500">
                <img class="block object-cover object-center m-0 rounded-2xl rounded-l-xl rounded-b-xl aspect-[3/2] bg-white w-full h-auto align-middle" :src="getImageUrl()">
            </div>
        </div>
         -->

    </div>
</template>

