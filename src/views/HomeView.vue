<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
 
    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">primaryu</button>
    <button class="btn btn-secondary">secondary</button>
  </div>
</template>

<script>

export default {

  methods: {

    goToDaybook() {

      this.$router.push({ name: 'daybook'})
    }

  }

}

</script>