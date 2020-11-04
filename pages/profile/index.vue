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
                    <h1 class="text-2xl font-semibold text-gray-900">Profile</h1>
                </div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <!-- Replace with your content -->
                    <div class="py-4">
                        <Profile />
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
import Profile from "~/components/Profile.vue";
import HomeHeader from "~/components/HomeHeader.vue";

export default {
    components: {
        MobileSidebar,
        DesktopSidebar,
        Profile,
        HomeHeader,
    },
};
</script>
