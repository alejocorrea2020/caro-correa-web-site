<template>
  <div>
    <v-row
      v-show="!loadingImages"
      vertical-align="center"
      class="mb-4"
    >
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="6"
        sm="4"
        md="3"
        class="align-self-stretch pa-2"
      >
        <v-img
          :src="image"
          :alt="`Imagen galeria Caro Correa ${index}`"
          style="height: 100%; min-height: 170px; object-fit: cover"
        />
      </v-col>
    </v-row>

    <v-row v-show="loadingImages" style="min-height: 75vh">
      <v-col cols="12" class="justify-center align-center">
        <Loader
          border-width="8px"
          message="Cargando imágenes"
          spin-color="rgb(219, 207, 95)"
          width="120px"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Loader from '@/components/ui/Loader'
export default {
  components: { Loader },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    loadingImages: {
      type: Boolean,
      default: false
    }
  }
}
</script>
