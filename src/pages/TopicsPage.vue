<template>
  <q-page class="q-pa-md ">
    <div class="row q-my-md  q-mx-md items-center justify-between">
      <div class="col-7 text-h5  text-bold ">
        Test your skills by attempting these quiz
      </div>
      <div class="col-3  myinput text-right">
        <q-input label-color="white" label="Topics" :input-style="{ fontSize: '18px' }"
          input-class="input-class text-white" outlined class="secondary-border text-white" hide-bottom-space>

          <template v-slot:append>
            <q-icon name="search" color="white" />
          </template>
        </q-input>


      </div>

    </div>


    <q-separator color="primary" class="q-mx-md" />


    <div class="row q-my-md  q-mx-lg">

      <!-- <div class="col-12 col-sm-8 col-md-5 q-mt-md myinput">
        <q-input label-color="white" label="Topics" :input-style="{ fontSize: '18px' }"
          input-class="input-class text-white" outlined class="secondary-border text-white" hide-bottom-space>

          <template v-slot:append>
            <q-icon name="search" color="white" />
          </template>
        </q-input>
      </div> -->
    </div>
    <div class="row q-mt-lg q-mx-md">
      <div class="col-12" v-for="category, index in topicsStore.categories" :key="index">
        <q-card class=" category-card " flat>
          <q-card-section>
            <div class="text-h6  text-capitalize   text-white text-bold ">{{ category.name }}</div>

            <div class="row align-center">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="topic, index in category.topics" :key="index"
                @click="startQuiz(topic)">
                <q-card class="my-card  q-ma-md  ">
                  <q-card-section>
                    <div class="row items-center">
                      <div class="col-auto q-mr-sm">
                        <q-icon size="sm" name="quiz" />
                      </div>
                      <div class="text-h6  text-capitalize col">{{ topic.name }}</div>
                      <div class="col-auto">
                        <q-icon size="lg" name="chevron_right" />

                      </div>

                    </div>


                  </q-card-section>

                  <q-separator color="blue-grey-13" class="q-mx-md" />

                  <q-card-section>
                    {{ topic.description }}
                  </q-card-section>
                  <q-card-actions>
                    <q-chip color="info" text-color="white" icon="event">
                      Popular
                    </q-chip>
                    <q-chip color="info" text-color="white" icon="bookmark">
                      Cool
                    </q-chip>
                  </q-card-actions>
                </q-card>
              </div>

            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { useTopicsStore } from 'src/stores/topicsStore';
import { useRouter } from 'vue-router';
const router = useRouter()

const topicsStore = useTopicsStore()
// topicsStore.getTopicsFromServer()




function startQuiz(topic) {
  console.log("start quiz called");
  router.push(router.currentRoute.value.fullPath + '/' + topic.topicId)
}


defineOptions({
  name: 'IndexPage'
});

</script>

<style lang="scss" scoped>
.category-card {
  background-color: transparent;
  border-radius: 20px;

}

.my-card {
  border-radius: 20px;
  background-color: $info;
  cursor: pointer;
  color: white;
}

.secondary-border {
  border-bottom: 3px solid $secondary !important;
  border: 20px;

  /* Adjust the border thickness and color as needed */
}

.input-class {
  color: white;
  background-clip: text !important;
  -webkit-background-clip: text !important;
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
