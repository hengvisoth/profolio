// store.js
import { reactive } from 'vue';

const state = reactive({
  activeSection: '#home', // Default active section
});

export function useStore() {
  return {
    state,
  };
}
