<script setup lang="ts">
import {Conditions, getAllCandidates} from "./wordleService"
import { ref, watch} from "vue";
const form = ref<Conditions>({
  goodLetter: "",
  badLetter: "",
  placementWords: []
})
const words = ref<Array<string>>(getAllCandidates())
const wordsCount = ref<number>(words.value.length)
watch(form, () => {
  words.value = getAllCandidates(form.value)
  wordsCount.value = words.value.length
}, {deep: true})

const onChancel = () => {
  form.value = {goodLetter: "", badLetter: "", placementWords:[]}
}
</script>

<template>
  <div>
    <h1>Wordle Tool</h1>
    <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener noreferrer">Wordle - The New York Times</a>
    <hr/>
    <form @cancel="onChancel">
      <p>
        <label>含まれている文字</label>
        <input type="text" v-model="form.goodLetter" placeholder="例) abc"/>
      </p>
      <p>
        <label>含まれていない文字</label>
        <input type="text" v-model="form.badLetter" placeholder="例) xyz"/>
      </p>
      <p>
        <label>位置が合っている文字</label>
        <input type="text" v-model="form.placementWords[0]" placeholder="例) a" maxlength="1"  />
        <input type="text" v-model="form.placementWords[1]" placeholder="例) b" maxlength="1"/>
        <input type="text" v-model="form.placementWords[2]" placeholder="例) c" maxlength="1"/>
        <input type="text" v-model="form.placementWords[3]" placeholder="例) d" maxlength="1"/>
        <input type="text" v-model="form.placementWords[4]" placeholder="例) d" maxlength="1"/>
      </p>
      <div>count: {{wordsCount}}</div>
      <ul>
        <li v-for="word in words" key="word">
          {{word}}
        </li>
      </ul>
    </form>
  </div>

</template>

<style></style>
