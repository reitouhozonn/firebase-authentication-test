<template>
    <div class="view">
        <h1>Setting</h1>
        <div class="updater">
            <label>displayName</label>
            <input type="text" v-model="displayName" />
        </div>
        <div class="updater">
            <label>photoURL</label>
            <input type="text" v-model="photoURL" />
        </div>
        <button>Update</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const displayName = ref("");
const photoURL = ref("");

</script>

<style scoped>
.updater {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
