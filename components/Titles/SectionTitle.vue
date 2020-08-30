<template>
  <h2 class="gDarkBlue--text font-size-40-md" :class="[`${color}--text`, `text-${justify}`]">
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'cYellow'
    },
    justify: {
      type: String,
      default: 'center'
    }
  }
}
</script>
