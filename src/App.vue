<script setup lang="ts">
import {Conditions, getAllCandidates} from "./wordleService"
import {reactive, ref, watch} from "vue";
const form = ref<Conditions>({
  goodLetter: "",
  badLetter: "",
  placementWords: []
})
const words = ref<Array<string>>(getAllCandidates())

watch(form, () => {
  words.value = getAllCandidates(form.value)
}, {deep: true})
</script>

<template>
  <div>
    <div>
      <label>含まれている文字</label>
      <input type="text" v-model="form.goodLetter" placeholder="例) abc"/>
    </div>
    <div>
      <label>含まれていない文字</label>
      <input type="text" v-model="form.badLetter" placeholder="例) xyz"/>
    </div>
    <div>
      <label>位置が合っている文字</label>
      <input type="text" v-model="form.placementWords[0]" placeholder="例) a" maxlength="1" />
      <input type="text" v-model="form.placementWords[1]" placeholder="例) b" maxlength="1"/>
      <input type="text" v-model="form.placementWords[2]" placeholder="例) c" maxlength="1"/>
      <input type="text" v-model="form.placementWords[3]" placeholder="例) d" maxlength="1"/>
      <input type="text" v-model="form.placementWords[4]" placeholder="例) d" maxlength="1"/>
    </div>
    <ul>
      <li v-for="word in words" key="word">
        {{word}}
      </li>
    </ul>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
