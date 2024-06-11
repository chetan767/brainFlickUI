<template>
  <q-layout view="lHh Lpr lFf" class="mybg">
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
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { getNickname } from './services/authService';
import { useNicknameStore } from './stores/nicknameStore';
import { useMeta } from 'quasar'

const nicknameStore = useNicknameStore()

// nicknameStore.setNicknameAndUserId()

const title = ref('Fuck ')
let drawer = ref(true);

setTimeout(() => {
  title.value = 'Fuck You'
}, 2000);
setTimeout(() => {
  title.value = 'Fuck me'
}, 3000)
setTimeout(() => {
  title.value = 'Fuck Viper'
}, 4000)
useMeta(() => {
  return {
    // whenever "title" from above changes, your meta will automatically update
    title: title.value
  }
})
const menuList = [

  {
    icon: 'category',
    label: 'Topics',
    separator: true
  },
  {
    icon: 'person',
    label: 'Profile',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
defineOptions({
  name: 'MainLayout'
})


</script>

<style>
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
</style>
