<template>
<div>
    <nuxt />
</div>
</template>

<script>
export default {
    data() {
        const isAuthenticated = this.$store.getters.isAuthenticated;
        if (isAuthenticated) {
            this.$router.push('/home');
        }
        return {}
    },
}
</script>>
