<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LPolyline } from "@vue-leaflet/vue-leaflet"
import { computed, ref } from "vue";


interface MapProps {
    path: number[][]
}

const props = defineProps<MapProps>()


const map = ref()

const zoom = ref(2);

const defaultCenter = [47.41322, -1.219482]

const center = computed(() => {
    return defaultCenter
});
</script>
<template>
    <LMap ref="map" v-model:zoom="zoom" v-model:center="center" :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
        </LTileLayer>
        <LPolyline :lat-lngs="props.path" color="#FF51ac"></LPolyline>
    </LMap>
</template>