<template>
  <div class="grid">
    <div class="card-3" v-if="filt">
      <h1>Auntenticación</h1>
      <form action="">
        <input
          type="text"
          v-model="user"
          placeholder="Ingresa el nombre de usuario"
        />
        <br />
        <br />
        <input
          type="password"
          v-model="pass"
          placeholder="Ingresa la contraseña"
        />
      </form>
      <br />
      <div v-if="incorrect">
        <h6>Usuario y/o contraseña incorrectos</h6>
        <br />
      </div>

      <button class="aceptar" @click="login(user, pass)">Aceptar</button>
      <button class="cancelar" @click="closeModal()">Cancelar</button>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",
  components: {},
  setup() {
    const store = useStore();
    const incorrect = computed(() => store.state.isIncorrect);
    const filt = computed(() => store.state.isOpen);
    const user = ref("");
    const pass = ref("");

    const inicializar = () => {
      user.value = "";
      pass.value = "";
    };
    const closeModal = () => {
      store.dispatch("falseIsOpen", false);
    };
    const login = async (u, p) => {
      let obj = { u, p };
      await store.dispatch("Login", obj);
      if (incorrect.value) return;
      else {
        closeModal();
        inicializar();
      }
    };
    return { filt, closeModal, user, pass, login, incorrect };
  },
};
</script>
<style>
input {
  font-size: 15px;
  font-weight: 300;
  width: 90%;
  margin: 0 20px;
  line-height: 1.5;
  text-align: center;
}

.aceptar {
  padding: 8px 8px;
  background: greenyellow;
  border: none;
  margin-left: 10px;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
.cancelar {
  padding: 8px 8px;
  background: red;
  border: none;
  margin-left: 10px;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  margin: 0px auto;
  position: absolute;
  top: 20%;
  left: 80%;
  width: 20%;
  height: 20%;
  transform: translate(-50%, -50%);
}

/* Crear una tarjeta en blanco con sombreado alrededor */
.card-3 {
  padding: 10px;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: -7px -7px 20px rgba(0, 0, 0, 0.2),
    7px 7px 20px var(--border-color);
}
</style>