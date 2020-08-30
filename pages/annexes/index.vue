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
        },
        {
          img: '/Annexes/anexo-3.jpg',
          title: 'Monopatin',
          description: 'Modelado y renderizado en SolidWorks'
        },
        {
          img: '/Annexes/anexo-4.jpg',
          title: 'Diseño de stands',
          description: 'Modelado y renderizado en RhinoCeros'
        },
        {
          img: '/Annexes/anexo-5.jpg',
          title: 'Mouse',
          description: 'Modelado y renderizado en SolidWorks'
        },
        {
          img: '/Annexes/anexo-8.jpg',
          title: 'Diseño de espacios',
          description: 'Modelado y renderizado en RhinoCeros'
        },
        {
          img: '/Annexes/anexo-6.jpg',
          title: 'Flores',
          description: 'Técnica: Acrílico'
        }
      ]
    }
  }
}
</script>
