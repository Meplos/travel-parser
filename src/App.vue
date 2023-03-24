<script setup lang="ts">
import { isArray } from '@vue/shared';
import { ref, computed } from 'vue';
import JsonEditor from './components/JsonEditor.vue';
import Map from './components/Map.vue';
import ITravelBuilder from './domain/interface/ITravelBuilder';

interface TravelAppConfig {
  builder: ITravelBuilder
}


const props = defineProps<TravelAppConfig>();

const rawInput = ref();



const code = computed({
  get() { return rawInput.value },
  set(value: string) {
    rawInput.value = value
  }
})


const processUserInput = () => {
  const travelraw = JSON.parse(code.value);
  if (!isArray(travelraw)) throw new Error("Pls enter an array");

  for (let i = 1; i < travelraw.length; i++) {

    props.builder.addPoints(travelraw[i - 1], travelraw[i]);


  }

}

</script>

<template>
  <div class="app">
    <Map class="app__map"></Map>
    <JsonEditor class="app__editor" v-model="code"></JsonEditor>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  &__map {
    width: 70%;
  }

  &__editor {
    overflow: hidden;
    width: 30%;
  }
}
</style>
