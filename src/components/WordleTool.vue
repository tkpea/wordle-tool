<script setup lang="ts">
import {Conditions, getAllCandidates} from "./../wordleService"
import { ref, watch} from "vue";
const form = ref<Conditions>({
  goodLetter: "",
  badLetter: "",
  placementWords: [,,,,]
})
const words = ref<Array<string>>(getAllCandidates())
const wordsCount = ref<number>(words.value.length)
watch(form, () => {
  words.value = getAllCandidates(form.value)
  wordsCount.value = words.value.length
}, {deep: true})

const onChancel = () => {
  form.value = {goodLetter: "", badLetter: "", placementWords:[,,,,]}
}
</script>
<template>
  <form class="w-full  py-4 px-4" @cancel="onChancel">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          含まれている文字
        </label>
      </div>
      <div class="md:w-2/4">
        <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            v-model="form.goodLetter"
            placeholder=""
            pattern="^[A-Za-z]+$"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          含まれていない文字
        </label>
      </div>
      <div class="md:w-2/4">
        <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            v-model="form.badLetter"
            placeholder=""
            pattern="^[A-Za-z]+$"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          位置が合っている文字
        </label>
      </div>
      <div class="md:w-2/4 flex">
        <input
            class="bg-gray-200 appearance-none border-2 w-1/5 mr-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline"
            type="text"
            v-model="form.placementWords[0]"
            placeholder=""
            maxlength="1"
            pattern="^[A-Za-z]+$"
        />
        <input
            class="bg-gray-200 appearance-none border-2 w-1/5 mr-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline"
            type="text"
            v-model="form.placementWords[1]"
            placeholder=""
            maxlength="1"
            pattern="^[A-Za-z]+$"
        />
        <input
            class="bg-gray-200 appearance-none border-2 w-1/5 mr-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline"
            type="text"
            v-model="form.placementWords[2]"
            placeholder=""
            maxlength="1"
            pattern="^[A-Za-z]+$"
        />
        <input
            class="bg-gray-200 appearance-none border-2 w-1/5 mr-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline"
            type="text"
            v-model="form.placementWords[3]"
            placeholder=""
            maxlength="1"
            pattern="^[A-Za-z]+$"
        />
        <input
            class="bg-gray-200 appearance-none border-2 w-1/5 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline"
            type="text"
            v-model="form.placementWords[4]"
            placeholder=""
            maxlength="1"
            pattern="^[A-Za-z]+$"
        />

      </div>
    </div>
    <hr/>
    <div>結果: {{wordsCount}}件</div>
    <ul>
      <li v-for="word in words" key="word">
        <code translate="no">
          {{ word.toUpperCase() }}
        </code>
      </li>
    </ul>
  </form>
</template>