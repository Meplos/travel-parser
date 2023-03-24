<script setup lang="ts">

import JsonEditorVue from "json-editor-vue"


import { computed, ref } from "vue";

interface EditorProps {
    modelValue: string
}

interface EditorEvent {
    (e: 'update:modelValue', data: string): void
}

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEvent>()
const code = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    }
})


</script>

<template>
    <JsonEditorVue v-model="code" v-bind="{/* local props & attrs */ }" />
</template>