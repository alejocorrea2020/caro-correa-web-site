<template>
  <div class="cBlue">
    <v-row class="container mx-auto">
      <v-col cols="12">
        <SectionTitle color="cYellow">
          Proyectos
        </SectionTitle>
      </v-col>
      <v-col cols="12">
        <ItemsList :items="projects" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList'
export default {
  components: { ItemsList },
  data () {
    return {
      projects: [
        { image: '/Projects/proyecto-1.png', name: 'Apila2' },
        { image: '/Projects/proyecto-2.png', name: 'Zoociedad urbana' },
        { image: '/Projects/proyecto-3.png', name: 'Batidor Manual para Milo' },
        { image: '/Projects/proyecto-4.png', name: 'Arco vegetal' },
        { image: '/Projects/proyecto-5.png', name: 'Sujeto' },
        { image: '/Projects/proyecto-6.jpg', name: 'El gran salto entre mundos Cortazarianos' }
      ]
    }
  }
}
</script>
