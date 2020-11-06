// ~/store/index.js

import Vuex from 'vuex'
import { auth, googleAuth } from '~/plugins/firebase.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: '',
        },

        getters: {
            user(state) {
                return state.user
            },

            isAuthenticated(state) {
                return !!state.user
            }
        },

        mutations: {
            setUser(state, payload) {
                state.user = payload
            }
        },

        actions: {
            signUp({ commit }, { email, password }) {
                return auth.createUserWithEmailAndPassword(email, password)
            },

            signInWithEmail({ commit }, { email, password }) {
                return auth.signInWithEmailAndPassword(email, password)
            },

            signInWithGoogle({ commit }) {
                return auth.signInWithPopup(googleAuth)
            },

            signOut() {
                return auth.signOut()
            }
        }
    })
}

export default createStore