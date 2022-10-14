
// export const myAction = async ({commit}) => {
//  }
import journalApi from "@/api/journalApi"


// }

// cargar las entradas desde la base de datos
 export const loadEntries = async ({commit}) => {

  const { data } = await journalApi.get('/entries.json')
// cuando da eror de datos null
// console.log({data})

  if (!data) {
    commit('setEntries', [])
    return
  }
  const entries = []
  for(let id of Object.keys(data)) {
    entries.push({
        id,
        ...data[id]
    })
  }
//  console.log(entries)
  commit('setEntries', entries)
 
}

//actualizar una entrada
export const updateEntries = async ({commit}, entry) => {

   const {date, picture, text} = entry
   const dataTosave = { date, picture, text}

   const resp = await journalApi.put(`/entries/${entry.id}.json`, dataTosave)
   console.log(resp)

//commit de una mutation
   commit('updateEntries', {...entry})
}

// anadir nueva entrada
export const createEntries = async ({commit}, entry) => {

    const {date, picture, text} = entry
    const dataTosave = {date, picture, text}

    const { data} = await journalApi.post(`entries.json`, dataTosave)
    dataTosave.id = data.name

    commit('addEntries', dataTosave)

    return data.name

}

//borrar entrada

export const deleteEntry = async ({commit}, id) => {

   await journalApi.delete(`/entries/${id}.json`)

   commit('deleteEntry', id)

   return id

 }