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
    <div class="m-5 text-white border border-solid border-red-400">
        <div class="flex flex-row flex-grow">
            <div id="col1" class="flex flex-col m-5">
                <h1 class="font-bold"> {{ projectTitle }} </h1>
                <p> Info about the project from Project.vue </p>
                <p> {{ projectDescription }} </p>
                <p> Image is {{ projectImage }}</p>
                
            </div>
            <div id="col2" class="flex m-5 max-h-80">
                <img :src="getImageUrl()">
            </div>
        </div>
        

    </div>
</template>

