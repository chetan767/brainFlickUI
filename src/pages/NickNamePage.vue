<template>
  <q-page>
    <div class="col-12 text-h6 text-weight-bold text-center  ">

      <div class="row justify-center">
        <div class="col-10  rounded-borders  main-div q-ma-lg">
          <div class="row">
            <div class="col">
              <Vue3Lottie ref="customControl"
                  animationLink="https://lottie.host/72a24787-0e2d-4e4b-bdb9-c77f1293ea46/z5dvJ0pd7A.json" :height="100"
                  :width="200" :loop="true" :speed="2" :autoPlay="true" :direction="forward" :pauseAnimation="true"
                  :pauseOnHover="true" />
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-white column items-end  q-mt-lg q-pr-lg rounded-borders">
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
              <div class="row justify-center  q-mt-md q-pr-lg">
                <q-btn size="md" rounded icon="play_circle_outline" label="Start Brain Flick" @click="startBrainFlick"
                  class="q-py-sm  q-px-lg btn-color" />
              </div>
              </div>
            </div>
            <div class="col-6  column items-start">
              <div class="row">
                <Vue3Lottie ref="customControl"
                  animationLink="https://lottie.host/19cf3eb7-214f-40e7-a1d4-eecb64417a1b/PAkLvinYJ9.json" :height="300"
                  :width="300" :loop="true" :speed="2" :autoPlay="true" :direction="forward" :pauseAnimation="true"
                  :pauseOnHover="true" />
              </div>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col">
              brainflick
            </div>
            <div class="col-auto" >
             <div class="row items-center">
              <q-btn color="primary" flat >Privacy</q-btn>
              <q-btn color="primary" flat >Assets</q-btn>
              <q-btn color="primary" flat >Blog</q-btn>
              <q-btn color="primary" flat >Contact</q-btn>
              <q-btn color="primary" flat >terms of service</q-btn>
              <q-icon name="mdi-youtube" color="primary" size="1.5em" />
              <q-icon name="mdi-instagram" color="primary" size="1em" />
           
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
  border: 4px solid rgba(11, 11, 11, 0.3);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.nick-box {
  background-color: rgba(11, 11, 11, 0.2);
  padding-left: 10%;
  border-radius: 15px;
}


</style>
