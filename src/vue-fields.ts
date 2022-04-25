import type { App, Component } from 'vue';
import * as components from './components';
import VField from './VField.vue';
import isVisible from './use/isVisible';

import './scss/_index.scss'

const VueFieldPlugin = {
  install(Vue: App, options: any) {
    for (const component in components) {
      const componentElement = components[component] as Component;
      Vue.component(component, componentElement);
    }

    Vue.component('VField', VField);

    Vue.provide('vueFieldConfigs', options);
  },
};

// Export single component
export * from './components';

// Export VField
export {
  VField,
  isVisible,
};

// Export all
export default VueFieldPlugin;
