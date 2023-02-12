<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">Gamor</h1>
      <button class="btn-1" @click="toggleTheme()" aria-label="Toggle themes">
        <span v-if="theme == 'lightMode'">
          <div class="circle-2">
            <img src="../assets/night.png" /></div
        ></span>
        <span v-else>
          <div class="circle-2"><img src="../assets/sun.png" /></div
        ></span>
      </button>
      <nav>
        <!--   <li class="nav">
            <a class="outline" @click="openModal()">Entrar</a>
          </li> -->
        <router-link to="" @click="openModal()">Entrar</router-link>
        <router-link to="/registro">Registro</router-link>
      </nav>
    </div>
  </div>
  <Main @openModal="openModal()" />
  <Categorias />
  <Login />
</template>

<script>
import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";
import { useStore } from "vuex";
import Categorias from "@/components/Categorias.vue";
import { ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Main, Login, Categorias },
  setup() {
    const store = useStore();
    const theme = ref("");

    const openModal = () => {
      store.dispatch("falseIsOpen", true);
    };
    const toggleTheme = () => {
      theme.value = theme.value == "lightMode" ? "" : "lightMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", theme.value); // updates the data-theme attribute
      localStorage.setItem("theme", theme.value); // stores theme value in local storage
    };
    return { openModal, toggleTheme, theme };
  },
};
</script>
<style>
/* Sobrescribe el estilo por defecto y establece el padding y el margen a cero */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* Texto color blanco en todas partes */

body {
  background: var(--background-color);
}

/* Hacer todo el texto de los links negro y sin decoración*/
a {
  color: var(--text-color);
  text-decoration: none;
}

h1 {
  color: var(--text-color);
  font-size: 30px;
  font-weight: 600;
  margin: 10px 0;
  line-height: 1.2;
}

h2 {
  font-size: 25px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.2;
}

p {
  font-size: 30px;
}

/* Todas las imágenes deben ser del mismo tamañño que su contenedor*/
img {
  width: 100%;
}

/* Remover el estilo a los elementos de una lista */
li {
  list-style-type: none;
}

p {
  color: var(--text-color);
  font-size: 20px;
  margin: 10px 0;
}

/* Centra el elemento y establece un ancho máximo y se asegura que los elementos puedan fluir através*/

.container {
  margin: 0 auto;
  max-width: 1200px;
  overflow: visible;
}

/* Aplica el color de fondo, altura y "padding"*/

.navbar {
  background-color: var(--nav-color);
  height: 50px;
  padding: 0 30px;
}

/* Establece el tamaño de la fuente (font size), reduce el peso de loa fuente (font-weight), agrega margen y alto de línea (line height) */

.navbar h1 {
  font-size: 30px;
  color: var(--text-color);
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.2;
}

/* Poner ambos hijos dentro del navbar */
.navbar .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

/* Situar los ul uno al lado del otro */
.navbar ul {
  display: flex;
}

/* Cambia el color de ambos enlaces a blanco, agrega padding entre si y margen también */

.navbar a {
  color: var(--text-color);
  padding: 9px;
  margin: 0 10px;
}

/* Sombrear los enlaces */

.navbar a:hover {
  color: #0000be;
  border-bottom: 3px solid #0000be;
}

.scroll-container {
  display: block;
  width: 400px;
  height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.scroll-container-1 {
  display: block;
  width: 400px;
  height: 240px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
/* Aplica el color de fondo, altura y "padding"*/

.navbar-1 {
  background-color: transparent;
  height: 50px;
  padding: 0 10px;
}

/* Establece el tamaño de la fuente (font size), reduce el peso de loa fuente (font-weight), agrega margen y alto de línea (line height) */

.navbar-1 h3 {
  font-size: 20px;
  color: var(--text-color);
  font-weight: 50;
  margin: 5px 0;
  line-height: 1.2;
}

/* Poner ambos hijos dentro del navbar */
.navbar-1 .flex {
  display: flex;
  align-items: center;
  height: 100%;
}

/* Situar los ul uno al lado del otro */
.navbar-1 ul {
  display: flex;
}

/* Cambia el color de ambos enlaces a blanco, agrega padding entre si y margen también */

.navbar-1 a {
  color: var(--text-color);
  padding: 10px;
  margin: 0 10px;
}

/* Sombrear los enlaces */

.navbar-1 a:hover {
  color: #070707;
}

.container-1 {
  width: 100%;
  max-height: 100%;
}

td {
  font-size: 15px;
  font-weight: 300;
  margin: 0 20px;
  line-height: 1.5;
  text-align: center;
}
select {
  font-size: 15px;
  font-weight: 300;
  margin: 0 20px;
  line-height: 1.5;
  overflow: hidden;
  width: 90%;
  border-radius: 150px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
}
.btn {
  padding: 2px 2px;
  border: none;
  color: #070707;
  background: transparent;
  margin-left: 10px;
  font-size: 30px;
  cursor: pointer;
}
.btn-1 {
  border: none;
  background: transparent;
  margin-left: 10px;
  font-size: 10px;
  cursor: pointer;
}
.main {
  color: var(--text-color);
  padding: 40px;
  text-align: center;
}

/* Envuelve la imagen dentro de una figura circular y define su altura para que tome todo el alto de su elemento padre */

.main img {
  height: 100%;
  clip-path: circle();
}

/* Alinea el texto al centro */

.main h3 {
  text-align: center;
}

/* Crear un grid de tres columnas equidistantes. Definir un espaciado de 10px entre ellas */

.grid-1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}

/* Crear una tarjeta en blanco con sombreado alrededor */
.card {
  padding: 10px;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: -7px -7px 20px rgba(0, 0, 0, 0.2),
    7px 7px 20px var(--border-color);
  width: 100%;
}

.circle {
  background-color: transparent;
  border: 3px solid var(--border-color);
  height: 90px;
  position: relative;
  top: -30px;
  left: 150px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 90px;
}

.circle-1 {
  background-color: transparent;
  height: 30px;
  width: 30px;
}
.circle-2 {
  background-color: transparent;
  height: 50px;
  width: 50px;
}

/*dark mode*/
:root {
  /* Variables for dark mode */
  --nav-color: gray;
  --border-color: rgb(255, 174, 0);
  --h-color: rgb(255, 174, 0);
  --background-color: rgb(46, 45, 45);
  --card-color: gray;
  --text-color: white;
  --back-image: url("../assets/naruto.png");
}

[data-theme="lightMode"] {
  /* Variables for default theme (light-mode) */
  --nav-color: rgb(0, 204, 255);
  --border-color: rgb(0, 204, 255);
  --h-color: rgb(132, 0, 255);
  --background-color: white;
  --card-color: white;
  --text-color: black;
  --back-image: url("../assets/sophitia-removebg-preview.png");
}
</style>