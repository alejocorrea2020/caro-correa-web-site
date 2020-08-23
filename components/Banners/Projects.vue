<template>
  <div class="cBlue">
    <v-row class="container mx-auto">
      <v-col cols="12">
        <h2 class="text-center cPurple--text font-size-40 font-weight-medium">
          Proyectos
        </h2>
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
        { image: '/Projects/proyecto-4.png', name: 'Arco vegetal' }
      ]
    }
  }
}
</script>
