<template>
  <div ref="container" />
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import katex from 'katex'

const props = defineProps<{
  expression: string
  displayMode?: boolean
}>()

const container = ref<HTMLElement | null>(null)

const renderKatex = () => {
  if (!container.value) return
  try {
    katex.render(props.expression, container.value, {
      throwOnError: false,
      displayMode: props.displayMode ?? false,
    })
  } catch (error) {
    console.error('KaTeX render error:', error)
    container.value.innerText = '数式のレンダリングに失敗しました'
  }
}

onMounted(renderKatex)

// props.expression が変化したとき再描画
watch(() => props.expression, renderKatex)
</script>