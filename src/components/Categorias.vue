<template>
  <div class="container-2">
    <h1>Categorías</h1>
    <div class="main grid-2">
      <div class="card-2">
        <p>Juegos de accion</p>
      </div>
      <div class="card-2">
        <p>Juegos de deporte</p>
      </div>
      <div class="card-2">
        <p>Juegos de aventura</p>
      </div>
      <div class="card-2">
        <p>Juegos de shooter</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categoria",
  components: {},
  setup() {
    return {};
  },
};
</script>
<style>
.grid-2 {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 10px;
  height: 200px;
}

.container-2 {
  margin: 10px 10px;
  width: 50%;
  max-height: 50%;
}

.card-2 {
  padding: 10px;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: -7px -7px 20px rgba(0, 0, 0, 0.2),
    7px 7px 20px var(--border-color);
  width: 100%;
  height: 100%;
}
</style>