<script setup>
import Menu from '../components/Menu.vue';

</script>

<template>

    <!-- About Section -->
    <div class="main-container-about">
        <Menu></Menu>

        <div class="about-section">
            <div class="about-header">
                <h1>Acerca de mi</h1>
            </div>
            <div class="about-content">
                <div class="about-img">
                    <img src="../assets/svg/about.svg" alt="About-me">
                </div>
                <div class="about-description">
                    <p>Desarrollador web, con amplios conocimientos,  más de tres años de experiencia trabajando en tecnologías web y diseño UI / UX, entregando trabajo de calidad.</p>
                    <div class="about-experience">
                        <p>3+ años de experiencia</p>
                        <p>8+ proyectos completados</p>
                        <p>3+ de empresas en las que trabaje</p>
                    </div>
                    <button>Descargar CV </button>
                </div>
            </div>
        </div>
    </div>
    <!-- About Section -->

</template>

<style scoped>

.main-container-about {
        min-width: 100%;
        min-height: 100vh;
        padding: 20px 40px;
        background: linear-gradient(3600deg, #523A7F, #000000);
        color: var(--color-a);
        /* border: 5px solid BLUE; */
}

.about-header {
    display: grid;
    justify-content: center;
    margin: 30px 0;
    font-size: 40px;
    /* border: 5px solid BLUE;  */
}

.about-content {
    width: 100%;
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* border: 5px solid BLUE;  */
}

.about-img > img {
    width: 500px;

}

.about-description {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* border: 5px solid BLUE; */
}

.about-experience {
    display: flex;
}

.about-description > p {
    font-size: 25px;
    line-height: 40px;
}

.about-description > button {
    width: 250px;
    height: 80px;
    border-radius: 50px;
    background: linear-gradient( #523A7F, #000000);
    cursor: pointer;
    font-size: 25px;
}

</style>
