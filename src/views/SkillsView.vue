<script setup>
import Menu from '../components/Menu.vue';
</script>

<template>
   <div class="main-container-skills">
    <Menu></Menu>
    <div class="main-skills">
        <h1>Habilidades</h1>
        <div class="skills">

            <div class="skills-flex">
                <!-- Skills front -->
                <div class="flex-dos">
                     <div class="flex-skills-dos">
                        <i class='bx bx-code-curly'></i>
                        <h2>Frontend</h2>
                    </div>
                    <i class='bx bx-chevron-down'></i>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
                
                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <p>95%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-css"></p>
                    </div>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <p>93%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-js"></p>
                    </div>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-vuejs"></i>
                            <p>VUE</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class='bx bx-planet' ></i>
                            <p>Astro</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
            </div>
            <!-- Skills front -->

            <!-- Skills back -->
            <div class="skills-flex">
                <!-- Skills front -->
                <div class="flex-dos">
                     <div class="flex-skills-dos">
                        <i class='bx bx-code-alt' ></i>
                        <h2>Bakcend</h2>
                    </div>
                    <i class='bx bx-chevron-down'></i>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-php"></i>
                            <p>PHP</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
                
                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class="fa-brands fa-node-js"></i>
                            <p>Node Js</p>
                        </div>
                        <p>95%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-css"></p>
                    </div>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class='bx bxs-right-arrow'></i>
                            <p>Dart</p>
                        </div>
                        <p>93%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-js"></p>
                    </div>
                </div>

                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class='bx bxs-file-json' ></i>
                            <p>Json</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
                <div>
                    <div class="flex-dos">
                        <div class="div-lenguages">
                            <i class='bx bx-data' ></i>
                            <p>SQL</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div class="barra">
                        <p class="porcentaje-html"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="education-work">
        <h1>Carrera</h1>
        <div class="header-flex">
            <p><i class="fa-solid fa-school"></i> Educacion</p>
            <p><i class="fa-solid fa-briefcase"></i> Work</p>
        </div>
        <div class="data-education">
            <div class="flex-dos-ing">
                <div class="ing">
                    <p>Ing. Tecnologias de la informacion y la comunicacion, Universidad tecnologicca de Tijuana</p>
                </div>
                <div class="ing">
                    <p>Tec. programacion, Cecyte B.C.</p>
                </div>
            </div>
            <div class='columna'>
                <i class="fa fa-circle"></i>
                <i class="fa fa-circle"></i>
                <i class="fa fa-circle"></i>
            </div>
            <div class="unico">
                <div class="ing">
                    <p>Tsu. Mercadotecnia y Comercio electronico, Universidad tecnologicca de Tijuana</p>
                </div>
            </div>
        </div>
    </div>

   </div>
</template>

<style scoped>
.main-container-skills {
    min-width: 100%;
    min-height: 100vh;
    padding: 20px 40px;
    background: linear-gradient( #523A7F, #000000);
    color: var(--color-a);
    /* border: 5px solid BLUE; */
}

.main-skills {
    width: 100%;
    height: 50vh;
    margin-top: 30px;
    /* border: 5px solid BLUE; */
}

.main-skills > h1 {
    display: grid;
    justify-content: center;
    font-size: 40px;
}

.skills{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    justify-items: center;
    margin-top: 30px;
    /* border: 5px solid BLUE; */
}


.skills-flex {
    width: 500px;
    /* border: 5px solid black; */
}

.flex-skills-dos {
    display: flex;
    align-items: center;
    gap: 10px;
}

.flex-dos{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 20px;
    /* border: 5px solid black; */
}

.div-lenguages { 
    display:  flex;
    gap: 10px;
    margin-bottom: 10px;
    /* width: 100px;
    padding: 10px;
    background-color: orangered; */
}

.barra{
    width: 500px;
    height: 10px;
    background-color: white;
    /* border: 1px solid BLUE; */
}

.porcentaje-html{
    width: 460px;
    height: 10px;
    border: 1px solid white;
    background-color: #523A7F;
}

.porcentaje-css{
    width: 480px;
    height: 10px;
    border: 1px solid white;
    background-color: #523A7F;
}

.porcentaje-js{
    width: 470px;
    height: 10px;
    border: 1px solid white;
    background-color: #523A7F;
}

.education-work {
    width: 100%;
    height: calc(100% - 100px);
    /* border: 5px solid pink; */
}

.education-work > h1 {
    display: grid;
    justify-content: center;
    font-size: 40px;
}

.header-flex {
    display: flex;
    margin-top: 20px;
    gap: 100px;
    justify-content: center;
    font-size: 25px;
}

.data-education {
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.flex-dos-ing {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    /* border: 1px solid green; */
}

.ing {
    width: 340px;
    margin: 0 20px;
    line-height: 25px;
}

.columna {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1px;
    height: 200px;
    background-color: white;
}

.columna > i {
    position: relative;
    right: 15px;
    font-size: 30px;
}

</style>
