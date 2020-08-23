<template>
  <v-row>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      class="align-self-stretch"
      cols="12"
      sm="6"
      md="3"
    >
      <ItemPreviewCard
        :image="item.image"
        :title="item.name"
        @goTo="goTo(`/events/${index}`)"
      />
    </v-col>
  </v-row>
</template>

<script>
import ItemPreviewCard from '@/components/ui/ItemPreviewCard'
export default {
  components: { ItemPreviewCard },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goTo (url) {
      this.$router.push(url)
    }
  }
}
</script>
