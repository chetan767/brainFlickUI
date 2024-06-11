<template>
  <q-page class="q-pa-lg ">

    <div class="row q-my-md justify-center items-center">
      <div class="col-10 col-md-7">
        <q-linear-progress size="25px" :value="questionProgress" color="secondary" track-color="info"
          class="q-mt-sm bar" />
      </div>
      <div class="col-2 col-md-1 text-h6 q-pl-sm text-right">
        {{ timerC }}
      </div>
    </div>
    <div class="row text-h6 q-mb-xl justify-center q-mt-xl">
      <div class="col-12 col-md-8">

        In the Harry Potter series, what is the significance of the number twelve,
        and why is it relevant to both Harry Potter and Lord Voldemort?
      </div>
    </div>

    <div class="row q-my-md justify-center " v-for="option, index in options" :key="index">
      <div class="col-12 col-md-8">
        <q-card class=" category-card  full-width" @click="selectOption(option)" :class="{
          'selected-card': currentAnswer == option.key
        }">
          <q-card-section>
            <div class="text-subtitle1 text-capitalize  text-white">
              {{ option.value }}
            </div>
          </q-card-section>
        </q-card>
      </div>


    </div>

    <div class="row text-h6 q-mb-xl justify-center q-mt-xl ">
      <div class=" col-12 col-md-8 text-right">
        <q-btn rounded color="secondary" class="text-subtitle1 q-px-lg " @click="nextQ" label="Continue" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue';

let questionProgress = ref(0)

let numberOfQuestions = 5
let currentQuestionNo = ref(0)
let time = ref(60)
let currentAnswer = ref(null)


let options = [
  {
    "key": "a",
    "value": "There are twelve Aurors in the Ministry of Magic."
  },
  {
    "key": "b",
    "value": "Twelve points are awarded for catching the Snitch in Quidditch."
  },
  {
    "key": "c",
    "value": "  Both Harry and Voldemort are half-blood wizards."
  },
  {
    "key": "d",
    "value": "There are twelve crystals needed to power the Death Star (wrong series)"
  }
]

function nextQ() {
  currentQuestionNo.value++

  questionProgress.value = currentQuestionNo.value / numberOfQuestions
}

function selectOption(option) {
  currentAnswer.value = option.key
}

setInterval(() => {
  console.log("update timer", time.value);
  time.value--
}, 1000);

const timerC = computed(() => {

  const res = toHoursAndMinutes(time.value)
  return `${minTwoDigits(res.m)} : ${minTwoDigits(res.s)}`

})

function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { h: parseInt(hours), m: parseInt(minutes), s: parseInt(seconds) };
}
function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

defineOptions({
  name: 'QuizPage'
});
</script>

<style lang="scss" scoped>
.category-card {
  background-color: $info;
  border-radius: 20px;
  cursor: pointer;

}

.selected-card {
  background-color: $secondary;

}

.question {
  width: 70%;
}

.bar {
  border-radius: 15px;
}
</style>
