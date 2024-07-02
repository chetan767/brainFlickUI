<template>
  <q-layout view="lHh Lpr lFf" class="mybg">
    <!-- <drawer></drawer> -->
    <q-page-container class="mybg1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Drawer from 'components/Drawer.vue'
import { onUpdated, ref } from 'vue'

console.log("hi");

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("xxx")
})

defineOptions({
  name: 'MainLayout'
})


</script>

<style lang="scss">
.mybg {
  background-image: url(./assets/textura.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

}

.mybg1 {}

.navbar {
  background: #2d2d2d;
  border: none;

}

body {
  color: white;
  background: -webkit-linear-gradient(250deg, rgb(0 118 237 / 95%) 0%, rgb(49 97 125) 100%);

}

.logo {
  width: 180px;
}

.active {
  background-color: $info;
  color: black !important;

}
</style>
