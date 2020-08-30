<template>
  <h1 class="font-size-40-md text-center" :class="`${color}--text`">
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'cYellow'
    }
  }
}
</script>
