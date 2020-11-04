<template>
<!-- Static sidebar for desktop -->
<div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow bg-indigo-800 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg" alt="Workflow" />
            </div>

            <div class="mt-5 flex-1 flex flex-col">
                <nav class="flex-1 px-2 bg-indigo-800 space-y-1">
                    <nuxt-link to="/home" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150">
                        <!-- Heroicon name: home -->
                        <svg class="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </nuxt-link>

                    <nuxt-link to="/search" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                        <!-- Heroicon name: search -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                    </nuxt-link>

                    <nuxt-link to="/products" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Products
                    </nuxt-link>

                    <nuxt-link to="/terms" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Terms & Conds
                    </nuxt-link>
                </nav>
            </div>
        </div>
    </div>
</div>
</template>
