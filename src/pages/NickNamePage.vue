<template>
  <q-page class="flex flex-center row">
    <div class="col-12 text-h6 text-weight-bold text-center  ">

      <div class="row justify-center">
        <div class="col-9    main-div q-ma-lg q-py-lg">
          <div class="row">
            <div class="col">
              <q-img class="logo" src="~assets/logo.png">
              </q-img>
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-6 text-white column  q-mt-lg q-px-lg ">
              <div class="nick-box q-pa-md q-pb-xl">
                <div class="row justify-center q-mt-xl">
                  CHOOSE A COOL NICKNAME
                </div>
                <div class="row justify-center q-pr-lg ">
                  <div class="col-12 q-mt-md myinput">
                    <q-input :input-style="{ fontSize: '18px' }" input-class="input-class text-white" outlined
                      v-model="nickname" autogrow class="secondary-border">
                      <template v-slot:append>
                      </template>
                    </q-input>
                  </div>
                </div>
                <div class="row justify-center  q-mt-xl q-pr-lg">
                  <q-btn size="lg" icon="play_circle_outline" label="Start Brain Flick" @click="startBrainFlick"
                    class="q-py-sm  q-px-lg btn-color text-black" />
                </div>
              </div>
            </div>
            <div class="col-5  column items-end">
              <div class="row">
                <Vue3Lottie ref="customControl"
                  animationLink="https://lottie.host/19cf3eb7-214f-40e7-a1d4-eecb64417a1b/PAkLvinYJ9.json" :height="300"
                  :width="300" :loop="true" :speed="2" :autoPlay="true" :direction="forward" :pauseAnimation="true"
                  :pauseOnHover="true" />
              </div>
            </div>
          </div>
          <div class="row q-mt-xl">
            <div class="col">
              brainflick
            </div>
            <div class="col-auto">
              <div class="row items-center">
                <q-btn color="primary" class="text-overline text-weight-bold text-white" flat>Privacy</q-btn>
                <q-btn color="primary" class="text-overline text-weight-bold text-white" flat>Assets</q-btn>
                <q-btn color="primary" class="text-overline text-weight-bold text-white" flat>Blog</q-btn>
                <q-btn color="primary" class="text-overline text-weight-bold text-white" flat>Contact</q-btn>
                <q-btn color="primary" class="text-overline text-weight-bold text-white" flat>terms of service</q-btn>


              </div>
            </div>
            <div class="col">
              brainflick
            </div>
          </div>
        </div>


      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { clearGuestInfo, setNickname } from 'src/services/authService';
import { useNicknameStore } from 'src/stores/nicknameStore';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { Vue3Lottie } from "vue3-lottie";

const nicknameStore = useNicknameStore()
const nickname = ref('')
const router = useRouter()

const $q = useQuasar()
// console.log("xxx", nicknameStore.nickname);
// if (nicknameStore.nickname != null) {
//   nickname.value = nicknameStore.nickname
// }
// else {
// }

nickname.value = 'CoolNickname' + generateRandom4Digit()

onMounted(() => {

})

function generateRandom4Digit() {
  // Generate a random number between 1000 and 9999 (inclusive)
  const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  return randomNum;
}

async function startBrainFlick() {
  clearGuestInfo()
  await nicknameStore.sendNicknameToServer(nickname.value)
  router.push('topics')
}

defineOptions({
  name: 'NickNamePage'
});
</script>


<style lang="scss" scoped>
.secondary-border {
  border: 3px solid $secondary !important;
  /* Adjust the border thickness and color as needed */
  border-radius: 20px;
}

.purple-border .q-field__control {
  border: none;
  /* Remove default inner border if necessary */
}

.input-class {
  color: white;
  background-clip: text !important;
  -webkit-background-clip: text !important;
}

.btn-color {
  background-color: $secondary;
  border-radius: 10px;
}
</style>

<style>
.myinput .q-field--outlined .q-field__control:before {
  border: none !important;
}

.myinput .q-field--outlined .q-field__control:after {
  border: none !important;
}

.main-div {
  box-shadow: inset 0px 2px 0px 0px rgba(255, 255, 255, .15), 0px 3px 0px 0px rgba(255, 255, 255, .15);
  border: 4px rgba(29, 29, 27, .15) solid;
}

.nick-box {
  /* background-color: rgba(11, 11, 11, 0.2); */
}
</style>
