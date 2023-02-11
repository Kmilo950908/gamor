<template>
  <div class="container-1">
    <div class="main grid-1">
      <div class="card">
        <div class="circle">
          <img src="fotos/sopa_china.jpeg" alt="" />
        </div>
        <h1>start</h1>
        <h1 class="h">streaming</h1>
        <h1>games</h1>
        <h1>diferrently</h1>
        <p>gamor now has stream party plataform</p>
        <button class="btn-3" @click="modal()">Entrar</button>
        <button class="btn-4">Registarse</button>
      </div>
      <div class="card">
        <div class="navbar-1">
          <div class="container flex">
            <h3>Sala de Juego: {{ game }}</h3>
          </div>
        </div>
        <div class="scroll-container">
          <table class="container-1">
            <tbody v-for="user in carrito" :key="user.id">
              <tr>
                <td>
                  {{ user.id }}
                </td>
                <td>
                  {{ user.usuario }}
                </td>
                <td>
                  <div class="circle-1">
                    <img :src="user.img" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="container-1">
          <ul>
            <li class="nav">
              <label for="catGame">Categoría</label>
              <select
                v-model="catGame"
                class="form-control"
                id="catGame"
                @change="updateJuegos()"
              >
                <option v-for="cat in categorias" :key="cat">
                  {{ cat }}
                </option>
              </select>
              <label for="game">Juego</label>
              <select
                v-model="game"
                class="form-control"
                id="game"
                @input="delallcarrito()"
              >
                <option v-for="juego in juegosSelection" :key="juego">
                  {{ juego }}
                </option>
              </select>
            </li>
          </ul>
          <div class="scroll-container">
            <table class="container-1">
              <tbody v-for="user in usuarios" :key="user.id">
                <tr>
                  <td>
                    {{ user.id }}
                  </td>
                  <td>
                    {{ user.usuario }}
                  </td>
                  <td>
                    <div class="circle-1">
                      <img :src="user.img" />
                    </div>
                  </td>
                  <td>
                    <button
                      class="btn"
                      @click="addCarrito(user)"
                      :disabled="!game"
                    >
                      <div class="circle-1">
                        <img src="../assets/mas.png" />
                      </div>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Main",
  components: {},
  setup(props, { emit }) {
    const store = useStore();
    const carrito = computed(() => store.state.carrito);
    const usuarios = computed(() => store.state.usuarios);
    const juegos = computed(() => store.state.juegos);
    const categorias = computed(() => store.state.categorias);
    const juegosSelection = ref([]);
    const incorrect = computed(() => store.state.isIncorrect);
    const game = ref("");
    const catGame = ref("");

    const updateJuegos = () => {
      game.value = "";
      delallcarrito();
      for (let indexj = 0; indexj < juegos.value.length; indexj++) {
        if (juegos.value[indexj].categoria === catGame.value)
          juegosSelection.value = juegos.value[indexj].juegos;
      }
    };
    const addCarrito = (user) => {
      store.dispatch("addCarrito", user);
    };
    const delallcarrito = () => {
      store.dispatch("delallCarrito");
    };
    const modal = () => {
      emit("openModal");
    };
    return {
      usuarios,
      game,
      catGame,
      incorrect,
      juegos,
      categorias,
      juegosSelection,
      carrito,
      updateJuegos,
      addCarrito,
      delallcarrito,
      modal,
    };
  },
};
</script>
<style>
.h {
  font-size: 30px;
  color: var(--h-color);
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.2;
}
.btn-3 {
  padding: 8px 8px;
  background: var(--card-color);
  border: none;
  width: 120px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
.btn-4 {
  padding: 8px 8px;
  background: var(--card-color);
  border: none;
  width: 120px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>