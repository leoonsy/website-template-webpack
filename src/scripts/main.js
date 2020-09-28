import Test from './Test';
import Vue from 'vue';
// import TestComponent from './TestComponent.vue';
import '../styles/main.scss';
Test();

new Vue({
  el: '.wrapper',
  components: {
    TestComponent: () => import('./TestComponent'),
  },
  data: () => ({
    vueContent: 'Vue Content :)',
  }),
});
