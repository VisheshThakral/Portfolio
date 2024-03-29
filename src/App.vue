<template>
  <div class="page">
    <Home />
    <Expertise />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Expertise from "./views/Expertise.vue";
export default {
  components: {
    Home,
    Expertise,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
.page {
  /* background: linear-gradient(#172331, #151D28); */
  height: 100vh;
}
</style>
