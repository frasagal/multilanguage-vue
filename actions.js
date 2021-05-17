export default {
  setCurrent(context, payload) {
    context.commit('setCurrent', { lang: payload.lang });
  }
}