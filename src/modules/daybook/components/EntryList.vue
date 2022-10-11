<template>
  <div class="entry-list-container bg">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar Entrada" />
    </div>
  </div>

  <div class="entry-scrollarea">
    <h2 v-for="item in 100" :key="item">Entry</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc( 100vh - 500px);
}

.entry-scrollarea {
  height: calc( 100vh - 110px);
  overflow: scroll;
}
</style>
