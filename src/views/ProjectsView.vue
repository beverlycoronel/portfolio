<template>
<div id="projects" class=" border-solid border-red-400 pt-24 px-5 mx-5 pb-5">
    <h1 class="font-semibold text-4xl tracking-wide underline"> projects. </h1>
  </div>
  <div class=" border-red-400 pt-0 px-5 mx-5 pb-5">
    <ProjectInfo v-bind="websiteProps"></ProjectInfo>
    <ProjectInfo v-bind="appProps"></ProjectInfo>
    <ProjectInfo v-bind="anchorProps"></ProjectInfo>       
  </div>
</template>
<script lang="ts" setup>
import ProjectInfo from '../components/ProjectInfo.vue'
const websiteProps = 
{projectTitle: "Bites", 
projectImage: "bites.jpg", 
projectTechnologies: ["NEXTJS", "TYPESCRIPT"],
projectDescription: "A website to recommend restaurants based on cuisine preferences.",
projectHighlightOne: "Decide what you want to eat with a simple quiz",
projectHighlightTwo: "Get restaurant recommendations near you based on your cuisine preference or quiz results",
projectHighlightThree: "Still unsure? Get recommendations for popular new restaurants in your area"
};

const appProps = 
{projectTitle: "Hearts", 
projectImage: "date.jpg",
projectTechnologies: ["SWIFT", "FIREBASE"],
projectDescription: "An iOS application that facilitates the planning of dates with loved ones and friends.",
projectHighlightOne: "Search and get recommendations for fun activities near you with MapKit API.",
projectHighlightTwo: "Add images from your iOS device with help from PhotoKit framework, which are safely stored and retrieved from Firebase Storage.",
projectHighlightThree: "Add your significant other and friends to your date via invite link"
};

const anchorProps = 
{projectTitle: "Anchor", 
projectImage: "news.jpg",
projectTechnologies: ["REACTJS", "EXPRESS", "PYTHON"],
projectDescription: "\
A 6-person capstone project news website that filters and compares articles from different popular sources based on political bias. My role was frontend developer.",
projectHighlightOne: "Compare articles for political bias across multiple sources such as CNN, Fox News, and New York Post",
projectHighlightTwo: "View each article's objectivity (objective or subjective) and sentiment (negative or positive) rating",
projectHighlightThree: "Identify which sentences in an article are more left-learning or more right-leaning."
};
</script>