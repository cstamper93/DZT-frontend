<template>
  <div class="home">
    <HelloWorld />
  </div>
  <div class="services">
    <ServicesOffered />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ServicesOffered from "../components/ServicesOffered.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ServicesOffered,
  },
};
</script>

<style>
.services {
  margin-top: 3rem;
}
</style>
