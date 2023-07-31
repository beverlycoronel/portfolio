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
    <div class="m-3 text-white border border-solid border-pink-300">
        <div class="flex flex-row ">
            <div id="col1" class="flex flex-col m-5 flex-1">
                <h1 class="font-bold"> {{ projectTitle }} </h1>
                <p> Info about the project from Project.vue </p>
                <p> {{ projectDescription }} </p>
                <p> Image is {{ projectImage }}</p>
                
            </div>
            <div id="col2" class="flex flex-1 m-5 max-h-80 max-w-fit border-4 border-pink-500">
                <img class="object-cover object-center m-0" :src="getImageUrl()">
            </div>
        </div>
        

    </div>
</template>

