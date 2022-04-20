<template>
    <div class="hello">
        <h1>Hello, {{ state.isLoggedIn ? state.displayName : guest }}</h1>
        <p>
            This is a example of an article.
        </p>
        <p>
            Vue3 + Composition API + store pattern + Firebase Auth
        </p>
        <div v-if="state.isLoggedIn">
            <h2>Login Success!!</h2>
        </div>
        <div v-else>
            <h3>Please Login</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const guest = 'Guest!';

const { state } = useAuthStore();

</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.hello {
    margin-top: 20vh;
}
</style>
