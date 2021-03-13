// if (module && module.hot) module.hot.accept()
console.log('26');
import './main';
import '../scss/index.scss';
import '../index.pug';

import Vue from 'vue'
import App from '../vue/app.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})