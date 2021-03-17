
const state={
    name:''
}

const actions={

}

const mutations={
    USER_NAME(state,payload){
        state.name=payload.name
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}