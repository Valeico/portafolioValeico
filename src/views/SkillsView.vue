<script setup>
import Menu from '../components/Menu.vue';
</script>

<template>
   <div class="main-container-skills">
    <Menu></Menu>
    <div class="main-skills">
        <h1>Skills</h1>
        <div class="fron-skills">

        </div>
        <div class="back-skills">

        </div>
    </div>
   </div>
</template>

<style scoped>
.main-container-skills {
        min-width: 100%;
        min-height: 100vh;
        padding: 20px 40px;
        background: linear-gradient(3600deg, #523A7F, #000000);
        color: var(--color-a);
        /* border: 5px solid BLUE; */
}
</style>
