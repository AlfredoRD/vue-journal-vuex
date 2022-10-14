
// export const myAction = (state) => {

// }

//cargar las entradas desde las base de daros
export const setEntries =  (state, entries) => {
 state.entries = [...state.entries, ...entries]
 state.isLoading = false
}

//actualizar entradas
export const updateEntries = (state, entry) => {

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry

}

//anadir entradas
export const addEntries =  (state, entry) => {

state.entries = [ entry, ...state.entries]

}

//borrar entrada
export const deleteEntry = (state, id) => {
state.entries = state.entries.filter(entry => entry.id !== id)

}

