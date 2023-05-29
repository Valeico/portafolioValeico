<script setup>
import Menu from '../components/Menu.vue';
</script>

<template>
    <!-- Home Section -->
    <div class="main-container">
        <Menu></Menu>
        <div class="valeico-hero">
            <div class="main-description">
                <h1>Hola, soy Valeico</h1>
                <h2>Desarrollador Frontend</h2>
                <button><p>Contactame > </p></button>
            </div>
            <div class="img-valeico">
                <img src="../assets/img/valeico.jpeg" alt="Valeico">
            </div>
        </div>
    </div>
    <!-- Home Section -->

</template>

<style scoped>
/* Home section */
.main-container {
        min-width: 100%;
        min-height: 100vh;
        padding: 20px 40px;
        background: linear-gradient( #523A7F, #000000);
        color: var(--color-a);
        /* border: 5px solid BLUE; */
}

.valeico-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100vh;
    /* border: 1px solid white; */
}

.main-description {
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* border: 1px solid white; */
}

.main-description > h1 {
    font-size: 60px;
}

.main-description > h2 {
    font-size: 30px;
}

.main-description > button {
    width: 250px;
    height: 80px;
    border-radius: 50px;
    background: linear-gradient( #523A7F, #000000);
    cursor: pointer;
    font-size: 25px;
    /* border: 1px solid white; */
}


.img-valeico > img {
    border-radius: 230px;
    /* border: 1px solid white; */
}

.about-section {
    width: 100%;
    border: 1px solid white;
}

</style>
