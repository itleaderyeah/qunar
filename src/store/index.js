import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	// actions: {
	// 	changeCity (ctx,city) {
	// 		console.log(ctx,city)
	// 		ctx.commit("changeCity",city)
	// 	}	
	// },
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}
})