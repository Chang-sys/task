// store/modules/user.js

const state = {
  users: [], // This can still be used if you want to manage users in Vuex later
  loading: false,
  error: null,
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users // Sets the users fetched from an API
  },
  SET_LOADING(state, loading) {
    state.loading = loading // Sets loading state for fetch operations
  },
  SET_ERROR(state, error) {
    state.error = error // Sets error state if fetching fails
  },
  ADD_USER(state, user) {
    state.users.push(user) // Adds a new user to the state
  },
  UPDATE_USER(state, updatedUser) {
    const index = state.users.findIndex((user) => user.id === updatedUser.id)
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser) // Updates existing user in the state
    }
  },
  DELETE_USER(state, userId) {
    state.users = state.users.filter((user) => user.id !== userId) // Deletes a user from the state
  },
}

const actions = {
  addUser({ commit }, user) {
    commit('ADD_USER', user) // Dispatch the mutation to add a user
  },
  updateUser({ commit }, user) {
    commit('UPDATE_USER', user) // Dispatch the mutation to update a user
  },
  deleteUser({ commit }, userId) {
    commit('DELETE_USER', userId) // Dispatch the mutation to delete a user
  },
}

const getters = {
  allUsers: (state) => state.users, // Getter to access all users
  isLoading: (state) => state.loading, // Getter to check loading state
  getError: (state) => state.error, // Getter to access error state
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
