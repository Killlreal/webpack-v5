<template lang="pug">
#hello
    section.main
        .wrapper
            h1.main__title
            .products
                .product
                    .picture
                        img(src='../img/1.png' alt="First")
                    .button(@click="clickAdd") {{ message }}
</template>
 
<script>
export default {
    name: "app",
    data() {
        return {
            message: "Картины эпохи Возрождения"
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
        }
    }
};
</script>
 
<style scoped>
.button {
    cursor: pounter;
    border: 1px solid #000;
}
</style>