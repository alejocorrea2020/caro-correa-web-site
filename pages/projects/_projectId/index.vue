<template>
  <div>
    <template>
      <section class="cBlue pt-15 pb-7">
        <v-row justify="center">
          <v-col cols="12" md="7" class="d-flex justify-center align-center">
            <h1
              class="white--text
                     text-uppercase
                     text-center
                     mb-10
                     font-size-48-md
                     font-weight-extra-medium-md"
            >
              {{ selectedProject.name }}
            </h1>
          </v-col>
        </v-row>
      </section>

      <section class="container py-10-md py-6">
        <v-row justify="space-between">
          <v-col cols="12" md="7" class="align-self-stretch">
            <div class="d-flex-md justify-space-between align-center">
              <h2 class="cPurple--text mb-2 text-center text-left-md font-size-36">
                Descripción:
              </h2>
            </div>
            <p class="text-justify font-size-22 line-height-15">
              {{ selectedProject.description }}
            </p>
          </v-col>
          <v-col cols="12" md="4" class="align-self-stretch d-flex align-center justify-center">
            <img
              class="elevation-6"
              style="width: 350px; height: 350px; object-fit: cover; border-radius: 50%"
              :src="selectedProject.image"
              :alt="selectedProject.name"
            >
          </v-col>
        </v-row>
      </section>

      <div class="cOrange white--text" style="min-height: 250px">
        <v-row class="container mx-auto">
          <v-col cols="12" md="6">
            <h3 class="white--text font-size-32 font-weight-regular mb-2">
              Materiales y procesos
            </h3>
            <p
              class="white--text font-size-22"
              style="line-height: 1.4"
            >
              {{ selectedProject.materialsAndProcesses }}
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <h3 class="white--text font-size-32 font-weight-regular mb-2">
              Integrantes
            </h3>
            <ul>
              <li
                v-for="(member, index) in selectedProject.members"
                :key="index"
                class="white--text font-size-22"
              >
                {{ member }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>

      <section class="container">
        <SectionTitle class="mb-2">
          Galería
        </SectionTitle>
        <GallerySection :images="selectedProject.images" />
      </section>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GallerySection from '@/components/GallerySection'
export default {
  components: { GallerySection },
  filters: {
    filteredMonth (value) {
      if (!value) { return 'Sin mes exacto de realización' }
      if (value === 'some') { return 'Varios meses del año' }
      return value
    }
  },
  async fetch (context) {
    await context.store.dispatch('projects/getProject', context.route.params.projectId)
    const selectedProject = context.store.state.projects.selectedProject
    if (!selectedProject || typeof selectedProject !== 'object' || Object.keys(selectedProject).length === 0) {
      context.error({ statusCode: 404, message: 'Project not found' })
    }
  },
  computed: {
    ...mapState({
      selectedProject: state => state.projects.selectedProject
    })
  }
}
</script>
