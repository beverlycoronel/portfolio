<template>
    <div class="min-h-full min-w-full">
    <main class="grid h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center relative">
        <p class="text-base font-semibold text-pink-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl"> Under Maintenance </h1>
        <p class="mt-6 text-base leading-7 text-gray-200">Sorry, I'm currently updating this. Be sure to check back shortly!</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <router-link to="/">
            <p class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Go back to home</p>
          </router-link>
        </div>
      </div>
    </main>
    </div>
  </template>