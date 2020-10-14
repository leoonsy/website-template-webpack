import Test from './Test';
import Vue from 'vue';
// import TestComponent from './TestComponent.vue';
import '@/styles/main.scss';

if (process.env.NODE_ENV === 'development') {
  //можно бы было watchContentBase в dev-server сделать другой вместо этого
  import('@/index.html');
}

Test();

new Vue({
  el: '.wrapper',
  components: {
    TestComponent: () => import('./TestComponent.vue'),
  },
  data: () => ({
    vueContent: 'Vue Content :)',
  }),
});

console.log(process.env.NODE_ENV);
