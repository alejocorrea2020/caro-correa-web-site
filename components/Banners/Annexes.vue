<template>
  <v-row class="container mx-auto" justify="center">
    <v-col cols="12">
      <SectionTitle>
        Anexos
      </SectionTitle>
    </v-col>
    <v-col
      v-for="(annexe, index) in annexes"
      :key="index"
      cols="12"
      md="6"
    >
      <v-img height="100%" :src="annexe.img" style="position: relative">
        <div style="position: absolute; bottom: 20px; left: 20px">
          <h3 class="cOrange--text text-capitalize font-size-24">
            {{ annexe.title }}
          </h3>
          <span class="cOrange--text font-size-18">
            {{ annexe.description }}
          </span>
        </div>
      </v-img>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <v-btn outlined color="cOrange" @click="$router.push('/annexes')">
          Ver todos los anexos
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      annexes: [
        {
          img: '/Annexes/anexo-1.jpg',
          title: 'Carreta',
          description: 'Modelado y renderizado en SolidWorks'
        },
        {
          img: '/Annexes/anexo-2.jpg',
          title: 'Olla arocera',
          description: 'Modelado y renderizado en SolidWorks'
        }
      ]
    }
  }
}
</script>
