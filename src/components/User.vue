<template>
    <div class="user" v-if="true">
        <img class="photoURL" src="" alt="" />
        <h3 class="displayName">Guest!</h3>
        <button type="button" class="button is-small is-info is-outlined">
            Sign out
        </button>
    </div>
    <div class="user" v-else>
        <LoginButton />
    </div>
</template>

<script setup lang="ts">
import LoginButton from "./LoginButton.vue";

</script>

<style scoped>
.user {
    margin-left: auto;
    height: 50px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
}

.displayName,
button {
    white-space: nowrap;
}

.displayName {
    margin: 0 20px 0 10px;
}

button {
    font-weight: 600;
}

.photoURL {
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
}
</style>
