<template>
<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
<div class="md:hidden" v-show="sidebarOpen">
    <div class="fixed inset-0 flex z-40">
        <transition enter-active-class="transition-opacity ease-linear duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity ease-linear duration-300" leave-class="opacity-100" leave-to-class="opacity-0">
            <div @click="sidebarOpen = false" v-show="sidebarOpen" class="fixed inset-0">
                <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
        </transition>
        <transition enter-active-class="transition ease-in-out duration-300 transform" enter-class="-translate-x-full" enter-to-class="translate-x-0" leave-active-class="transition ease-in-out duration-300 transform" leave-class="translate-x-0" leave-to-class="-translate-x-full">
            <div v-show="sidebarOpen" class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-800">
                <div class="absolute top-0 right-0 -mr-14 p-1">
                    <button v-show="sidebarOpen" @click="sidebarOpen = false" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                        <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex-shrink-0 flex items-center px-4">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg" alt="Workflow" />
                </div>

                <div class="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav class="px-2 space-y-1">
                        <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150">
                            <!-- Heroicon name: home -->
                            <svg class="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </a>

                        <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                            <!-- Heroicon name: users -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </a>

                        <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Products
                        </a>

                        <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Terms & Conds
                        </a>
                    </nav>
                </div>
            </div>
        </transition>
        <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        sidebarOpen: false,
    })
}
</script>
