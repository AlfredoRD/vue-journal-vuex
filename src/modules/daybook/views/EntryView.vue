<template>
  <template v-if="entry">
  <div  class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold"> {{day}}</span>

      <span class="mx-1 fs-3"> {{month}}</span>
      <span class="mx-2 fs-4 fw-light"> {{yearDay}}</span>
    </div>

    <div>
      <button v-if="entry.id" class="btn btn-danger mx-2"
       @click="onDeleteEntry">

        Borrar <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Subir foto <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div  class="d-flex flex-column px-3 h-75">
    <textarea v-model="entry.text" placeholder="Que sucedio hoy?"></textarea>
  </div>

  
  <img
    src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

  <Fab 
   icon="fa-save"
   @on:click="saveEntry"></Fab>
  
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from 'vuex';

import getDayMonthYear from '../helpers/getDayMonthYear';


export default {

props: {
  id: {
    type: String,
    required: true
  }
},

  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  data() {
    return {entry: null}
  },

  
  computed: {
   ...mapGetters('journal', ['getEntriesById']),
   day() {
    const { day} = getDayMonthYear(this.entry.date)
    return day
   },

   month() {
    const { month } = getDayMonthYear(this.entry.date)
    return month
   },
   yearDay() {
    const { yearDay } = getDayMonthYear(this.entry.date)
    return yearDay
   }
  },

  methods: {

    ...mapActions('journal', ['updateEntries', 'createEntries', 'deleteEntry']),
   loadEntry() {
   //crear nueva entrada
  let entry;
   if (this.id === 'new'){
    entry = {
      text: '',
      date: new Date().getTime()
    }
   }else {
     entry = this.getEntriesById( this.id)
    if ( !entry ) return this.$router.push({ name: 'no-entry'})

    
   }

   this.entry = entry
    //cargas las entradas
    
   },

   async saveEntry() {

    if (this.entry.id){
    //actualizar
    await this.updateEntries(this.entry)
  }else {
    //crear una nueva entrada
     const id = await this.createEntries(this.entry)
     this.$router.push({name: 'entry', params: {id} })
  }

   
  },

  // borrar entrada
async onDeleteEntry() {
  console.log('delete', this.entry)

  await this.deleteEntry(this.entry.id)
//  // mandar al usuario fuera de aqui
  this.$router.push({name: 'no-entry' })
}

  },

created() {
//cuando es creado
  this.loadEntry()
},

watch: {

  //cuando el id cambia
  id() {
  this.loadEntry()
  }
}

};
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>
