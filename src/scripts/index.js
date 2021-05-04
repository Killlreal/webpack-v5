// if (module && module.hot) module.hot.accept()
import "./parts/main";
import "../styles/index.scss";
import '../assets/img/icons/sprite.svg'

import Vue from "vue";
import App from "../vue/app.vue";

new Vue({
    el: "#app",
    render: (h) => h(App),
});
