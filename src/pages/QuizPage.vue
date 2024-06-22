<template>
  <q-page class="q-pa-lg ">

    <div class="row q-my-md justify-center items-center">
      <div class="col-10 col-md-7">
        <q-linear-progress size="25px" :value="questionProgress" color="secondary" track-color="info"
          class="q-mt-sm bar" />
      </div>
      <div class="col-2 col-md-1 text-h6 q-pl-sm text-right">
        {{ timerShow }}
      </div>
    </div>

    <div class="row q-my-md justify-center items-center text-h6">
      {{ currentQuestionIndex }}/{{ numberOfQuestions }}
    </div>

    <div class="row text-h6 q-mb-xl justify-center q-mt-xl">
      <div class="col-12 col-md-8">

        {{ currentQuestion.questionPrompt }}
      </div>
    </div>

    <div class="row q-my-md justify-center " v-for="option, index in currentQuestion.options" :key="index">
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
        <q-btn :disable="currentAnswer == null" rounded color="secondary" class="text-subtitle1 q-px-lg " @click="nextQ"
          label="Continue" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuizStore } from 'src/stores/quizStore';
import { computed, onUnmounted, ref } from 'vue';

const quizStore = useQuizStore()

let questionProgress = ref(0)

const numberOfQuestions = quizStore.quiz.questions.length
let currentQuestionIndex = ref(0)
let numberOfQuestionsAttempted = ref(0)
let remainingTime = ref(50)
let currentAnswer = ref(null)


// let options = [
//   {
//     "key": "a",
//     "value": "There are twelve Aurors in the Ministry of Magic."
//   },
//   {
//     "key": "b",
//     "value": "Twelve points are awarded for catching the Snitch in Quidditch."
//   },
//   {
//     "key": "c",
//     "value": "  Both Harry and Voldemort are half-blood wizards."
//   },
//   {
//     "key": "d",
//     "value": "There are twelve crystals needed to power the Death Star (wrong series)"
//   }
// ]

function nextQ() {

  if (currentAnswer.value == null) {
    return
  }

  if (currentQuestionIndex.value + 1 == numberOfQuestions) {
    questionProgress.value = 1
    return
  }

  currentQuestionIndex.value++
  numberOfQuestionsAttempted.value++
  questionProgress.value = (currentQuestionIndex.value) / numberOfQuestions
  currentAnswer.value = null

}

function selectOption(option) {
  currentAnswer.value = option.key
}

let id = setInterval(() => {
  console.log("update timer", remainingTime.value);
  remainingTime.value--
  if (remainingTime.value == 0) {
    clearInterval(id)
  }
}, 1000);

const timerShow = computed(() => {

  const res = toHoursAndMinutes(remainingTime.value)
  return `${minTwoDigits(res.m)} : ${minTwoDigits(res.s)}`

})


const currentQuestion = computed(() => {

  return quizStore.quiz.questions[currentQuestionIndex.value]

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

onUnmounted(() => {
  console.log("unmounted");
  clearInterval(id)
})
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
