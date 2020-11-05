<template>
<div>
    <nuxt />
</div>
</template>

<script>
export default {
    mounted() {
        if ($store.getters.isAuthenticated) {
            this.$router.push('/home');
        }
    }
}
</script>>
