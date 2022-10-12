<template>
  <div class="divv d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <fab />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style>
.divv {
  height: 100%;
}
</style>
