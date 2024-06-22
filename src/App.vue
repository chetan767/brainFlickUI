<template>
  <q-layout view="lHh Lpr lFf" class="mybg">
    <drawer></drawer>
    <q-page-container>
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
  background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
}

.navbar {
  background: #2d2d2d;
  border: none;

}

body {
  color: white;
}

.logo {
  width: 180px;
}

.active {
  background-color: $info;
  color: white !important;

}
</style>
