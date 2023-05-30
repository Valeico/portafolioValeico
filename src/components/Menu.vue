<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="main-menu">
        <div>
            <RouterLink :to="{ name: 'home' }">Valeico</RouterLink>
        </div>
        <nav class="menu-items">
            <ul>
                <li class="active"><RouterLink :to="{ name: 'about' }">Acerca</RouterLink></li>
                <li><RouterLink :to="{ name: 'skills' }">Habilidades</RouterLink></li>
                <li><a href="#/">Servicios</a></li>
                <li><a href="#/">Proyectos</a></li>
                <li><a href="#/">Contactame</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.main-menu {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-between;
    /* border: 1px solid red; */
}

.main-menu {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-between;
    /* border: 1px solid red; */
}

.menu-items > ul{
    display: flex;
    gap: 50px;
    /* border: 1px solid black; */
}

.menu-items > ul > li { 

    border: 1px solid transparent;
    transition: .3s linear;
}

.menu-items > ul > li:hover { 
    border-bottom: 1px solid white;
}

</style>