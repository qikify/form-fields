import type { App, Component } from 'vue';
import * as components from './components';
import VField from './VField.vue';

import './scss/_index.scss'

const VueFieldPlugin = {
  install(Vue: App) {
    for (const component in components) {
      const componentElement = components[component] as Component;
      Vue.component(component, componentElement);
    }

    Vue.component('VField', VField);
  },
};

// Export single component
export * from './components';

// Export VField
export { VField };

// Export all
export default VueFieldPlugin;
