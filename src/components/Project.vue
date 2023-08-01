<script>
// function getImageUrl() {
//         return new URL(`./assets/${props.projectImage}`)
// };

export default {
    name: "ProjectCont", 
    props: {
        projectTitle: String,
        projectImage: String,
        projectDescription: String,
    },
    methods: {
        getImageUrl: function() {
            return "../public/millie.jpg"
        }
    }
      
};


</script>
<template>
    <div class="relative isolate flex flex-col w-full m-3 text-white border border-solid border-pink-300">
        <div class="relative isolate flex flex-col oveflow-hidden rounded-2xl bg-gray-200/[1.0] px-8 p-8 w-full m-3 text-white border border-solid border-pink-300">
            <img class="block object-cover w-full h-full aspect-square" :src="getImageUrl()">
        </div>
        <div class="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 "></div>
        <div class="absolute inset-0 z-0 border-2 ring-1 ring-offset-2"></div>
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

