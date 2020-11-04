<template>
<div class="h-screen flex overflow-hidden bg-gray-100">
    <MobileSidebar />
    <DesktopSidebar />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <!-- Sidebar close button -->
            <button class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden" aria-label="Open sidebar">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            <HomeHeader />
        </div>

        <main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
            <div class="pt-2 pb-6 md:py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-gray-900">Search</h1>
                </div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <!-- Replace with your content -->
                    <div class="py-4">
                        <div class="flex-1 flex py-3">
                            <!-- <form class="w-full flex md:ml-0" action="#" method="GET"> -->
                            <label for="search_field" class="sr-only">Search</label>
                            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                    </svg>
                                </div>
                                <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm" placeholder="Search by ..." type="search" />
                            </div>
                            <!-- </form> -->
                        </div>
                        <SearchResults />
                    </div>
                    <!-- /End replace -->
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
import MobileSidebar from "~/components/MobileSidebar.vue";
import DesktopSidebar from "~/components/DesktopSidebar.vue";
import HomeHeader from "~/components/HomeHeader.vue";
import SearchResults from "~/components/SearchResults.vue";

export default {
    components: {
        MobileSidebar,
        DesktopSidebar,
        HomeHeader,
        SearchResults,
    },
};
</script>
