<template>
  <v-footer
    class="pt-6 pb-4 px-6"
    color="cLight"
    inset
    style="width: auto"
  >
    <div class="container">
      <v-row justify="center">
        <v-col cols="12" md="9" class="pa-0">
          <v-row>
            <v-col
              v-for="(section, index) in footerSections"
              :key="index"
              cols="6"
              lg="3"
            >
              <span class="text-capitalize" :class="`${section.color}--text`">
                {{ section.name }}
              </span>
              <ul class="mt-6">
                <li
                  v-for="(item, i) in section.items"
                  :key="i"
                  class="pb-1"
                >
                  <nuxt-link
                    v-if="!item.href"
                    :to="item.path"
                    class="list-item cDark--text"
                  >
                    {{ item.name }}
                  </nuxt-link>
                  <a
                    v-if="item.href"
                    :href="item.href"
                    target="_blank"
                    class="list-item cDark--text"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="px-0 mt-5">
          <v-divider class="gGray" />
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-space-between align-center px-0"
        >
          <v-row>
            <v-col cols="12" class="d-flex d-md-none justify-center">
              <nav>
                <ul class="d-flex align-center">
                  <li v-for="(socialNetWork, index) in socialNetworks" :key="index">
                    <v-btn
                      height="45px"
                      :href="socialNetWork.href"
                      icon
                      tag="a"
                      target="_blank"
                      width="45px"
                    >
                      <v-icon color="cPurple" size="30px">
                        {{ socialNetWork.icon }}
                      </v-icon>
                    </v-btn>
                  </li>
                </ul>
              </nav>
            </v-col>
            <v-col
              cols="12"
              md="8"
              class="d-flex align-center"
            >
              <div style="cursor: pointer" @click="gotToHome()">
                <img
                  alt="Logo Carolina Correa Martínez"
                  style="max-width: 80px"
                  src="/Logos/logo-ccm.png"
                >
              </div>
              <span class="cPurple--text ml-6 pt-3">Carolina Correa Martínez, Todos los derechos reservados {{ new Date().getFullYear() }} &copy;</span>
            </v-col>
          </v-row>
          <nav class="d-none d-md-flex align-center">
            <ul class="d-flex align-center ml-6">
              <li v-for="(socialNetWork, index) in socialNetworks" :key="index">
                <v-btn
                  color="cPurple"
                  height="45px"
                  :href="socialNetWork.href"
                  icon
                  tag="a"
                  target="_blank"
                  width="45px"
                >
                  <v-icon size="30px" color="cPurple">
                    {{ socialNetWork.icon }}
                  </v-icon>
                </v-btn>
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      footerSections: [
        {
          name: 'Más información',
          color: 'cBlue',
          items: [
            { name: 'Sobre mi', path: { name: 'aboutMe' } },
            { name: 'Proyectos', path: { name: 'projects' } },
            { name: 'Anexos', path: { name: 'annexes' } }
          ]
        },
        {
          name: 'Portafolio',
          color: 'cOrange',
          items: [
            { name: 'Descargar portafolio en PDF', href: '/portafolio.pdf' }
          ]
        },
        {
          name: 'Contacto',
          color: 'cRed',
          items: [
            { name: 'Contacto', path: { name: 'contact' } }
          ]
        }
      ],
      socialNetworks: [
        { icon: 'mdi-instagram', href: 'https://www.instagram.com/caro1correa/?hl=en' },
        { icon: 'mdi-facebook', href: 'https://www.facebook.com/caro.correa.31' },
        { icon: 'mdi-gmail', href: 'mailto: carohockey1@gmail.com' }
      ]
    }
  },
  methods: {
    gotToHome () {
      if (this.$route.name === 'index') {
        this.$vuetify.goTo(0)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
  ul li a.list-item {
    transition: all ease-in-out 0.2s;
  }
  ul li a.list-item:hover {
    color: #E9D13D!important;
  }
</style>
