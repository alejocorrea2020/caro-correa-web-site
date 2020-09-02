<template>
  <v-row class="container mx-auto" justify="space-between">
    <v-col cols="12">
      <SectionTitle>
        Sobre mi
      </SectionTitle>
    </v-col>

    <v-col cols="12" md="4">
      <v-img
        src="/caro-riendose.jpeg"
        alt="Caro Correa sonriendo"
        class="elevation-5"
        height="100%"
        style="border-radius: 6px"
      />
    </v-col>

    <v-col cols="12" md="7">
      <h3 class="cPurple--text font-size-36 mb-3">
        Carolina Correa Martìnez
      </h3>
      <p class="font-size-22 text-justify" style="line-height: 1.4">
        Soy estudiante de diseño industrial, con interés en el mobiliario urbano, la
        morfología experimental y el desarrollo de nuevos materiales. También me
        intereso por el diseño de experiencias y gestión de los proyectos. Me
        destaco por ser una persona disciplinada, con una gran capacidad de
        liderazgo y facilidad para trabajar en equipo. Me adapto fácilmente a los
        diferentes contextos, soy muy organizada y se me facilita expresar las
        ideas tanto verbal como gráficamente.
      </p>
      <h3 class="cPurple--text font-size-36 mb-3">
        Intereses
      </h3>
      <div>
        <img src="/intereses.png" alt="Intereses" class="interests-image">
      </div>
    </v-col>

    <v-col cols="12" md="4">
      <SectionTitle justify="start" class="mb-3">
        Herramientas
      </SectionTitle>
      <CirclesList :items="tools" />
    </v-col>

    <v-col cols="12" md="8">
      <SectionTitle
        color="cBlue"
        justify="start"
      >
        Formación académica
      </SectionTitle>

      <p class="font-size-22 mt-2 mb-0" style="line-height: 1.4">
        <b>Universidad Pontificia Bolivariana</b>
        Pregrado en diseño industrial
        Medellín, Colombia 2017-2021.
      </p>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <span class="font-size-26 font-weight-medium d-block mb-2">
            Inglés
          </span>
          <CirclesList :items="english" />
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <span class="font-size-26 font-weight-medium d-block mb-2">
            Portugues
          </span>
          <CirclesList :items="portuguese" />
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <span class="font-size-26 font-weight-medium d-block mb-2">
            Español
          </span>
          <span class="font-size-22 d-block">
            Nativo
          </span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CirclesList from '@/components/ui/CirclesList'
export default {
  components: { CirclesList },
  data () {
    return {
      tools: [
        { name: 'Microsoft Office', rating: 4 },
        { name: 'Solid Works', rating: 3 },
        { name: 'AutoCad', rating: 3 },
        { name: 'Rhino', rating: 2 },
        { name: 'Adobe Ilustrator', rating: 3 },
        { name: 'Adobe Photoshop', rating: 2 }
      ],
      english: [
        { name: 'Lectura', rating: 2 },
        { name: 'Escucha', rating: 2 },
        { name: 'Escritura', rating: 2 },
        { name: 'Habla', rating: 2 }
      ],
      portuguese: [
        { name: 'Lectura', rating: 2 },
        { name: 'Escucha', rating: 2 },
        { name: 'Escritura', rating: 2 },
        { name: 'Habla', rating: 2 }
      ]
    }
  }
}
</script>

<style scoped>
  img.interests-image {
    max-width: 90vw;
  }
  @media only screen and (min-width: 960px) {
    img.interests-image {
      max-width: 380px;
    }
  }
</style>
