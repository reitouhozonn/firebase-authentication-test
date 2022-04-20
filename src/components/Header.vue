<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <p>/</p>
        <router-link to="/setting">Setting</router-link>
        <User />
    </div>
</template>

<script setup lang="ts">
import User from './User.vue';


</script>

<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px 0;
}

p {
    margin: 0 5px;
}
</style>
