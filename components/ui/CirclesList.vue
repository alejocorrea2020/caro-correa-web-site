<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      class="d-flex align-center mb-1"
    >
      <div
        class="cPurple d-flex align-center justify-center mr-3 pa-1"
        style="border-radius: 20px"
      >
        <v-icon
          v-for="n in 5"
          :key="n"
          style="margin: 0 2px"
          :color="item.rating >= n ? 'cYellow' : 'white'"
          size="15px"
        >
          mdi-circle
        </v-icon>
      </div>
      <span class="font-size-22 font-weight-medium">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
