<template>
  <div class="divv d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <!-- para llamar el metodo en el boton -->
  <fab 
  
  @on:click="createNewEntry"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  methods: {
    //para crear nueva entrada
    createNewEntry(){
    this.$router.push({name: 'entry', params: {id: 'new'}})
    },
  }
};
</script>

<style>
.divv {
  height: 100%;
}
</style>
