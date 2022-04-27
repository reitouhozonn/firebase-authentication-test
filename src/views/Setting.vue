<template>
    <div class="view">
        <h1>Setting</h1>
        <div class="updater">
            <label>displayName</label>
            <input type="text" v-model="displayName" />
        </div>
        <button @click="update()">Update</button>
        <div class="text-input">
            <label>texts</label>
            <input type="text" v-model="texts" />
        </div>
        <button v-bind:disabled="isDisabled()" @click="set()">Push</button>
        <button @click="get()">Get</button>
        <h2 style="margin-top: 50px;">Texts</h2>
        <div class="tweets" v-for="t in tweets" v-bind:key="t.author">
            <p>{{ t.name }} -> {{ t.tweet }}</p>
            <button>Delete</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useTextStore } from '../stores/firestore';

const { state, updateUser } = useAuthStore();
const { fireSet, fireGet, textState } = useTextStore();

const displayName = ref("")
const texts = ref("")
const tweets: any = ref("")


const isDisabled = () => {
    if (texts.value == "") {
        return true
    } else {
        return false
    }
}

const update = () => {
    updateUser({
        displayName: displayName.value
    })
}
const set = () => {
    fireSet({
        name: displayName.value,
        tweet: texts.value
    })
    texts.value = "";
}
const get = () => {
    fireGet()
}

watchEffect(() => {
    displayName.value = state.displayName;
    tweets.value = textState.tweets;
    isDisabled();
})

</script>

<style scoped>
.updater {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.tweets {
    /* display: flex;
    flex-wrap: wrap; */
    align-items: center;
    margin-top: 60px;
}


.text-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10vh;
}

.view {
    margin-top: 1vh;
}

label {
    flex: 1;
}

input {
    flex: 3;
}

button {
    float: right;
}
</style>
