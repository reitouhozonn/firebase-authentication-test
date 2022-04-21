<template>
    <div class="user" v-if="state.isLoggedIn">
        <img class="photoURL" :src="state.photoURL" alt="" />
        <h3 class="displayName">{{ state.displayName }}</h3>
        <button type="button" class="button is-small is-info is-outlined" @click="signOutState()">
            Sign out
        </button>
    </div>
    <div class="user" v-else>
        <LoginButton />
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import LoginButton from "./LoginButton.vue";

const { signOutState, state } = useAuthStore();


</script>

<style scoped>
.user {
    margin-left: auto;
    height: 50px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
}

.displayName button {
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
    width: 40px;
    height: 40px;
}
</style>
