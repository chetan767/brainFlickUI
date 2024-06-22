<template>
  <q-page class="row justify-center items-center text-white">


    <div class="col-12 text-h6 text-weight-bold text-center">

      <div class="row justify-center items-center">
        <div class="col-12 text-white">
          CHOOSE A COOL NICKNAME
        </div>
        <div class="col-11 col-sm-8 col-md-5 col-lg-3 q-mt-md myinput">
          <q-input :input-style="{ fontSize: '18px' }" input-class="input-class text-white" outlined v-model="nickname"
            autogrow class="secondary-border">
            <template v-slot:append>
            </template>
          </q-input>
        </div>
        <div class="col-12 text-h6 text-weight-bold text-center q-mt-lg">
          <q-btn size="md" rounded icon="play_circle_outline" label="Start Brain Flick" @click="startBrainFlick"
            class="q-py-sm  q-px-lg btn-color" />
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
</style>
