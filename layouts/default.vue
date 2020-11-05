<template>
<div>
    <nuxt />
</div>
</template>

<script>
export default {
    mounted() {
        if (this.$store.getters.isAuthenticated) {
            this.$router.push('/home');
        }
    }
}
</script>>
