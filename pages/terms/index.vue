<template>
<main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
    <div class="pt-2 pb-6 md:py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Products</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <TermsAndConds />
            <!-- /End replace -->
        </div>
    </div>
</main>
</template>

<script>
import TermsAndConds from "~/components/TermsAndConds.vue";

export default {
    layout: 'main',
    components: {
        TermsAndConds,
    }
};
</script>