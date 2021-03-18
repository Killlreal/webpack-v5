<template lang="pug">
#hello
    .vue
    .vue__img
        img(src="../img/1.png", alt="First") 
        h1 img in vue
    .vue__button
        .button(@click="clickAdd") {{ message }}
        h1 button in vue
    .vue__background
        .background
        h1 backgroun in vue
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

<style scoped>
.button {
    border: 1px solid #000;
    cursor: pounter;
}
</style>
