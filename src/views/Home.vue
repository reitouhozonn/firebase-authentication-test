<template>
    <div class="hello">
        <h1>Hello, {{ state.isLoggedIn ? state.displayName : guest }}</h1>
        <p>
            This is a example of an article.
        </p>
        <p>
            Vue3 + Composition API + store pattern + Firebase Auth
        </p>
        <h3>Related links</h3>
        <!-- <ul>
            <li><a href="https://github.com/ErgoFriend/vue-firebase-authl" target="_blank" rel="noopener">GitHub
                    Repo</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                    target="_blank" rel="noopener">Zenn Article</a></li>
        </ul> -->
        <br>
        <p>© 2022 reitouhozonn</p>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const guest = 'Gest';

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
</style>
