import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import config from './config.json';
import dictionary from './dictionary.json';

export default {
  namespaced: true,
  state() { 
    return {
      current: '',
      languages: config.languages,
      default: config.default,
      dictionary: dictionary
    };
  },
  mutations,
  actions,
  getters
};