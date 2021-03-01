<template lang="pug">
#hello
    section.main
        .wrapper
            h1.main__title {{ message }}
            .products
                .product
</template>
 
<script>
export default {
  name: "app",
  data() {
    return {
      message: "Картины эпохи Возрождения",
    };
  },
};
</script>
 
<style>
</style>