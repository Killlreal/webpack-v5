// if (module && module.hot) module.hot.accept()
console.log('26');
import './main';
import '../scss/index.scss';
import '../img/1.png';
import '../img/2.png';
import '../img/3.png';
import '../img/4.png';
import '../img/logo.png'

import Vue from 'vue'
import App from '../vue/app.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})