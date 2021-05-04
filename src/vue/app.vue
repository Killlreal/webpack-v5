<template lang="pug">
#hello
    .vue
        .wrapper
            h1.vue__title Vue  
            .vue-wrapper
                img.vue-img(src="../assets/img/welcome/bg.png", alt="First") 
                h3.vue-text img in vue 
            .vue-wrapper
                .vue-background
                h3.vue-text background in vue 
            .vue-wrapper
                svg.vue-svg(width=180 height=180)
                    use(xlink:href="../assets/img/sprite.svg#i-cart")
                h3.vue-text svg use  in vue 
            .vue-wrapper
                img.vue-img(src='../assets/img/icons/loyalty.svg')
                h3.vue-text svg in vue 

</template>

<script>
export default {
    name: "app",
    data() {
        return {
            message: "button",
        };
    },
    methods: {
        async clickAdd() {
            let response = await fetch("https://reqres.in/api/products/3");
            if (response.ok) {
                let json = await response.json();
                console.log(json);
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        },
    },
};
</script>

<style></style>
