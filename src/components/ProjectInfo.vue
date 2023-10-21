<template>
    <div class="border-gray-300 border-solid  overflow-hidden py-4 mb-8 sm:py-8">
      <div class=" mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg tracking-wide">
              <div class="pb-2">
                <span v-for="technology in props.projectTechnologies" :key="technology" class="relative pr-3 mt-4 ">
                  <span class="p-2 border-pink-300 rounded text-pink-500 bg-pink-100 text-sm font-semibold">
                    {{ technology }}
                  </span>
                </span>
              </div>
              <p class="mt-2 text-5xl font-semibold text-gray-800"> {{ projectTitle }} </p>
              <p class="pt-2 text-xl leading-8 text-gray-800 font-light tracking-wider"> {{ projectDescription }} </p>
              <dl class="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-700 lg:max-w-none">
                <div v-for="description in descriptions" :key="description.description" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-800">
                    <component :is="description.icon" class="absolute left-1 top-1 h-5 w-5 text-pink-600" aria-hidden="true" />
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ description.description }}</dd>
                </div>         
              </dl>

            </div>
          </div>
          <img :src="projectImage" alt="Project picture" class="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 aspect-square object-cover sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
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

  // const technologies = props.projectTechnologies.map((technology) => {
  //   return {
  //     name: technology
  //   }
  // });
  </script>