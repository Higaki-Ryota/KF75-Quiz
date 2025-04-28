<template>
    <div v-html="rendered"></div>
  </template>
  
  <script setup lang="ts">
  import katex from 'katex'
  import { computed } from 'vue'
  
  const props = defineProps<{
    expression: string
    displayMode?: boolean
  }>()
  
  const rendered = computed(() => {
    try {
      return katex.renderToString(props.expression, {
        throwOnError: false,
        displayMode: props.displayMode ?? false
      })
    } catch (error) {
      console.error(error)
      return '数式のレンダリングに失敗しました'
    }
  })
  //KaTeX使用例
  //<KaTeXRenderer expression="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" :displayMode="true" />
  </script>