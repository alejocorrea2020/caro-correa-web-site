<template>
  <v-row class="container mx-auto" justify="center">
    <v-col cols="12">
      <SectionTitle>
        Anexos
      </SectionTitle>
    </v-col>
    <v-col cols="12" md="6">
      <v-img height="100%" src="/Annexes/anexo-1.jpg" />
    </v-col>
    <v-col cols="12" md="6">
      <v-img height="100%" src="/Annexes/anexo-2.jpg" position="relative" />
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
