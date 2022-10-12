<template>
  <div class="entry-list-container bg">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar Entrada" />
    </div>
  </div>

  <div class="entry-scrollarea">
    <entry v-for="item in 100" :key="item"/>
  </div>

 
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {

components:{

  Entry: defineAsyncComponent(() => import('./Entry.vue'))

}

};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc( 100vh - 900px);
}

.entry-scrollarea {
  height: calc( 100vh - 110px);
  overflow: scroll;
}
</style>
