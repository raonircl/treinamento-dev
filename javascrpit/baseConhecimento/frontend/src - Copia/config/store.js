import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({ 
    state: {
        isMenuVisible: false, 
        user: null  
        
    }, 
    mutations: { 
        toggleMenu(state, isVisible) { 
            if (!state.user) { 
                state.isMenuVisible = false
                return
            }
            if(isVisible === undefined) { 
                state.isMenuVisible = !state.isMenuVisible
            } else { 
                state.isMenuVisible = isVisible
            }
            
        }, setUser(state, user) { 
            state.user = user
            if(user) { 
                axios.defaults.headers.common['Authorization'] = `bear ${user.token}`
                state.isMenuVisible = true
            } else { 
                delete axios.defaults.headers.common['Authorization'] 
                state.isMenuVisible = false
            }
        }
    }
})