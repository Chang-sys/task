import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import user from 'src/store/modules/user'

// Create the store
export default store(function () {
  const Store = createStore({
    modules: {
      user, // Register the user module
    },
    strict: process.env.DEBUGGING, // Enable strict mode in development
  })

  return Store
})
