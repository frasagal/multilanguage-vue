export default {
  setCurrent(state, payload) {
    console.log('mutation payload:', payload)
    state.current = payload.lang;
  },
};