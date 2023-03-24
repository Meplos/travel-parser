<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"
import { ref } from "vue";

const map = ref()

map.value
const zoom = ref(2);

const center = ref([47.41322, -1.219482])
</script>
<template>
    <LMap ref="map" v-model:zoom="zoom" v-model:center="center"  :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
        </LTileLayer>
    </LMap>
</template>