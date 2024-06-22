<template>
  <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" class="navbar">
    <q-scroll-area class="fit">
      <q-list class="q-mt-md">
        <q-item clickable v-ripple class="full-width q-mb-md">

          <q-item-section class="full-width">
            <div class="row justify-center">
              <q-img class="logo" src="~assets/logo.png">
              </q-img>
            </div>

          </q-item-section>


        </q-item>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="route.fullPath.startsWith('/' + menuItem.link)" v-ripple :to="menuItem.link"
            :class="{
              'active text-bold': route.fullPath.startsWith('/' + menuItem.link)
            }">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>

      </q-list>
    </q-scroll-area>

  </q-drawer>

</template>

<script setup>
import { onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router';

let drawer = ref(true);

const route = useRoute()


const menuList = [

  {
    icon: 'category',
    label: 'Topics',
    link: '/topics'
  },
  {
    icon: 'person',
    label: 'Profile',
    separator: false,
    link: '/profile'
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
    link: 'feedback'
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    link: 'help'
  }
]

console.log("hi");

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("xxx")
})

defineOptions({
  name: 'MainLayout'
})


</script>

<style lang="scss" scoped>
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
