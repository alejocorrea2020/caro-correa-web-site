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

      <div class="mt-8">
        <v-btn
          color="cOrange"
          outlined
          @click="$router.push({ name: 'aboutMe' })"
        >
          Más sobre mi
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
