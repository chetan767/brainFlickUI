<template>
    <q-page class="row justify-center items-center text-white">


        <div class="col-12 text-h6 text-weight-bold text-center">

            <div class="row justify-center items-center">
                <div class="col-12">
                    CHOOSE A COOL NICKNAME
                </div>
                <div class="col-11 col-sm-8 col-md-5 col-lg-3 q-mt-md ">
                    <q-input class="purple-border" label-color="white"
                        :input-style="{ color: 'white', fontSize: '18px' }" input-class="input-class"
                        color="transparent" outlined v-model="nickname" autogrow>
                        <template v-slot:append>
                        </template>
                    </q-input>
                </div>
                <div class="col-12 text-h6 text-weight-bold text-center q-mt-lg">
                    <q-btn size="md" rounded color="accent" icon="play_circle_outline" label="Start Brain Flick"
                        class="q-py-sm  q-px-lg" />
                </div>
            </div>



        </div>






    </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'

const $q = useQuasar()
let name = 'CoolNickname' + generateRandom4Digit()
const nickname = ref(name)

onMounted(() => {

})

function generateRandom4Digit() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    return randomNum;
}

defineOptions({
    name: 'NickNamePage'
});
</script>


<style  lang="scss" scoped>
.purple-border {
    border: 3px solid $accent  !important;
    /* Adjust the border thickness and color as needed */
    border-radius: 20px;
}

.purple-border .q-field__control {
    border: none;
    /* Remove default inner border if necessary */
}

input {
    background-clip: text !important;
    -webkit-background-clip: text !important;
}
</style>