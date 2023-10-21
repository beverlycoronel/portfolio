<template>
    <div class="overflow-hidden py-8 sm:py-12">
      <div class=" mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-bold leading-7 text-pink-600"> {{ projectTechnologies.join(" / ") }}</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"> {{ projectTitle }} </p>
              <p class="mt-6 text-lg leading-8 text-gray-800"> {{ projectDescription }} </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
                <div v-for="description in descriptions" :key="description.description" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-800">
                    <component :is="description.icon" class="absolute left-1 top-1 h-5 w-5 text-pink-600" aria-hidden="true" />
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ description.description }}</dd>
                </div>         
              </dl>
              <p class="mt-6 text-md leading-8 text-gray-800"> Demo link coming soon! </p>
            </div>
          </div>
          <img :src="projectImage" alt="Project picture" class="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
  
const props = defineProps<{
projectTitle: string,
projectImage: string,
projectTechnologies: Array<string>,
projectDescription: string,
projectHighlightOne: string,
projectHighlightTwo: string,
projectHighlightThree: string,
  }>();

  
  const descriptions = [
    {
      name: '',
      description: props.projectHighlightOne,
      icon: CloudArrowUpIcon,
    },
    {
      name: '',
      description: props.projectHighlightTwo,
      icon: LockClosedIcon,
    },
    {
      name: '',
      description: props.projectHighlightThree,
      icon: ServerIcon,
    },
  ];
  

  </script>