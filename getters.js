export default {
  dictionary(state) {
    if (state.current == '')
      return state.dictionary[state.default];
    else
      return state.dictionary[state.current];
  },
  current(state) {
    return state.current;
  },
  default(state) {
    return state.default;
  }
};