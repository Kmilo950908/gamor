import { createStore } from 'vuex'
import Usuarios from "../utils/usuarios.json";
import Juegos from "../utils/juegos.json";
import Categorias from "../utils/categorias.json";

export default createStore({
  state: {
    isOpen: false,
    isIncorrect: false,
    usuarios: Usuarios,
    juegos: Juegos,
    categorias: Categorias,
    carrito: []
  },
  getters: {

  },
  mutations: {
    ADD_CARRITO(state, user) {
      for (let index = 0; index < state.carrito.length; index++) {
        if (state.carrito[index].id === user.id) {
          return state.carrito
        }
      }
      return state.carrito.push(user)
    },
    DEL_ALL_CARRITO(state) {

      return state.carrito.splice(0, state.carrito.length)
    },
    FALSE_ISOPEN(state, val) {
      return state.isOpen = val
    },
    async LOGIN(state, obj) {
      for (let index = 0; index < state.usuarios.length; index++) {
        if (await state.usuarios[index].usuario === obj.u && state.usuarios[index].password === obj.p) {
          state.isIncorrect = false
          return
        }
        else state.isIncorrect = true
      }
    }
  },
  actions: {
    addCarrito({ commit }, prod) {
      const obj = {
        id: prod.id,
        usuario: prod.usuario,
        img: prod.img,
        password: prod.password
      }
      commit('ADD_CARRITO', obj)
    },
    delallCarrito({ commit }) {

      commit('DEL_ALL_CARRITO')
    },
    falseIsOpen({ commit }, val) {
      commit('FALSE_ISOPEN', val)
    },
    Login({ commit }, obj) {
      commit('LOGIN', obj)
    },
  },
  modules: {
  }
})
