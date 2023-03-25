<script setup lang="ts">
import { isArray } from '@vue/shared';
import { ref, computed } from 'vue';
import JsonEditor from './components/JsonEditor.vue';
import Map from './components/Map.vue';
import ITravelBuilder from './domain/interface/ITravelBuilder';

interface TravelAppConfig {
  TravelBuilder: new () => ITravelBuilder
}

const EMPTY = [
  {
    "lat": 44.8250276,
    "lon": -0.5957407
  },
  {
    "lat": 44.8250065,
    "lon": -0.5957331
  },
  {
    "lat": 44.825001,
    "lon": -0.595729
  },
  {
    "lat": 44.8248073,
    "lon": -0.5957373
  },
  {
    "lat": 44.8246222,
    "lon": -0.5961076
  },
  {
    "lat": 44.8243912,
    "lon": -0.5965749
  },
  {
    "lat": 44.8242135,
    "lon": -0.5969408
  },
  {
    "lat": 44.8240557,
    "lon": -0.5972559
  },
  {
    "lat": 44.8238695,
    "lon": -0.5976332
  },
  {
    "lat": 44.8236719,
    "lon": -0.5980261
  },
  {
    "lat": 44.8234942,
    "lon": -0.5982684
  },
  {
    "lat": 44.8232597,
    "lon": -0.5983956
  },
  {
    "lat": 44.8232012,
    "lon": -0.5984938
  },
  {
    "lat": 44.8233008,
    "lon": -0.5988083
  },
  {
    "lat": 44.8234118,
    "lon": -0.5992757
  },
  {
    "lat": 44.8235234,
    "lon": -0.5996826
  },
  {
    "lat": 44.8235551,
    "lon": -0.5997877
  },
  {
    "lat": 44.8235542,
    "lon": -0.599784
  },
  {
    "lat": 44.8235542,
    "lon": -0.599784
  },
  {
    "lat": 44.8235542,
    "lon": -0.599784
  },
  {
    "lat": 44.8235542,
    "lon": -0.599784
  },
  {
    "lat": 44.8235723,
    "lon": -0.5998244
  },
  {
    "lat": 44.8235632,
    "lon": -0.6001948
  },
  {
    "lat": 44.8232766,
    "lon": -0.6006466
  },
  {
    "lat": 44.8231841,
    "lon": -0.6008048
  },
  {
    "lat": 44.823079,
    "lon": -0.6011658
  },
  {
    "lat": 44.8229706,
    "lon": -0.6016692
  },
  {
    "lat": 44.8227934,
    "lon": -0.6023215
  },
  {
    "lat": 44.8227242,
    "lon": -0.6030111
  },
  {
    "lat": 44.8227157,
    "lon": -0.6035318
  },
  {
    "lat": 44.8227512,
    "lon": -0.6041062
  },
  {
    "lat": 44.8227115,
    "lon": -0.6048136
  },
  {
    "lat": 44.8225871,
    "lon": -0.6055213
  },
  {
    "lat": 44.8222989,
    "lon": -0.6060199
  },
  {
    "lat": 44.8222309,
    "lon": -0.6061355
  },
  {
    "lat": 44.8221408,
    "lon": -0.6062814
  },
  {
    "lat": 44.8219199,
    "lon": -0.6066671
  },
  {
    "lat": 44.8217926,
    "lon": -0.607179
  },
  {
    "lat": 44.8216871,
    "lon": -0.6076498
  },
  {
    "lat": 44.8216451,
    "lon": -0.6078272
  },
  {
    "lat": 44.8215494,
    "lon": -0.6082127
  },
  {
    "lat": 44.8216004,
    "lon": -0.6086684
  },
  {
    "lat": 44.8219448,
    "lon": -0.6090042
  },
  {
    "lat": 44.8222916,
    "lon": -0.6093462
  },
  {
    "lat": 44.8224833,
    "lon": -0.6098556
  },
  {
    "lat": 44.8225652,
    "lon": -0.6103747
  },
  {
    "lat": 44.822886,
    "lon": -0.6107253
  },
  {
    "lat": 44.8232814,
    "lon": -0.6108463
  },
  {
    "lat": 44.8236879,
    "lon": -0.6107459
  },
  {
    "lat": 44.8241749,
    "lon": -0.6105832
  },
  {
    "lat": 44.8245298,
    "lon": -0.610506
  },
  {
    "lat": 44.8246336,
    "lon": -0.610879
  },
  {
    "lat": 44.8246781,
    "lon": -0.611239
  },
  {
    "lat": 44.8247232,
    "lon": -0.6114293
  },
  {
    "lat": 44.8247583,
    "lon": -0.6115851
  },
  {
    "lat": 44.8249149,
    "lon": -0.6119905
  },
  {
    "lat": 44.8250753,
    "lon": -0.6124901
  },
  {
    "lat": 44.8252207,
    "lon": -0.6131561
  },
  {
    "lat": 44.8253356,
    "lon": -0.6136904
  },
  {
    "lat": 44.8255944,
    "lon": -0.6138974
  },
  {
    "lat": 44.8259333,
    "lon": -0.6137497
  },
  {
    "lat": 44.8261121,
    "lon": -0.6136824
  },
  {
    "lat": 44.8261347,
    "lon": -0.613579
  },
  {
    "lat": 44.8260612,
    "lon": -0.6135253
  },
  {
    "lat": 44.8260845,
    "lon": -0.6135091
  },
  {
    "lat": 44.8261096,
    "lon": -0.6134975
  },
  {
    "lat": 44.8261339,
    "lon": -0.6136091
  },
  {
    "lat": 44.8261356,
    "lon": -0.6136194
  },
  {
    "lat": 44.8260644,
    "lon": -0.6137773
  },
  {
    "lat": 44.8257128,
    "lon": -0.6138854
  },
  {
    "lat": 44.8254097,
    "lon": -0.6139846
  },
  {
    "lat": 44.8252882,
    "lon": -0.6142661
  },
  {
    "lat": 44.8252743,
    "lon": -0.6145521
  },
  {
    "lat": 44.825276,
    "lon": -0.6145652
  },
  {
    "lat": 44.8252729,
    "lon": -0.6145111
  },
  {
    "lat": 44.8252629,
    "lon": -0.6144989
  },
  {
    "lat": 44.8252608,
    "lon": -0.6145203
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  },
  {
    "lat": 44.8252615,
    "lon": -0.6145198
  }];
const props = defineProps<TravelAppConfig>();

const rawInput = ref(EMPTY);





const code = computed({
  get() { return rawInput.value },
  set(value: any) {
    rawInput.value = value
    processUserInput();
  }
})


const processUserInput = () => {
  const builder = new props.TravelBuilder();
  const travelraw = JSON.parse(code.value);
  if (!isArray(travelraw)) throw new Error("Pls enter an array");

  for (let i = 1; i < travelraw.length; i++) {
    builder.addPoints(travelraw[i - 1], travelraw[i]);
  }
  console.log(builder.getResult());

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
