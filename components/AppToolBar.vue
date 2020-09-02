<template>
  <v-app-bar
    app
    elevate-on-scroll
    color="cPurple"
    class="py-0"
    height="100px"
    tag="header"
  >
    <nuxt-link to="/" class="px-3 white d-flex align-center justify-center" style="position: absolute; left: 0; top: 0; height: 100%">
      <img
        src="/Logos/logo-ccm.png"
        class="toolbar-logo"
        alt="Logo Carolina Correa Martínez"
      >
    </nuxt-link>
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-end align-center">
        <div class="hidden-sm-and-down">
          <nuxt-link
            v-for="(item, index) in toolbarItems"
            :key="index"
            :to="{ name: item.pathName }"
            class="mr-4 white--text font-weight-medium font-size-18 nav-item"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <v-menu
          min-width="100vw"
          transition="slide-y-transition"
          bottom
          nudge-bottom="60px"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="hidden-md-and-up"
              dark
              icon
              v-on="on"
            >
              <v-icon size="35px">
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list class="py-3">
            <v-list-item
              v-for="(item, index) in toolbarItems"
              :key="index"
              @click="$router.push({ name: item.pathName })"
            >
              <v-list-item-content class="py-1">
                <v-list-item-title>
                  <v-btn
                    block
                    color="cBlue"
                    :dark="!item.outlined"
                    :outlined="item.outlined"
                  >
                    {{ item.name }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      toolbarItems: [
        {
          name: 'Home',
          pathName: 'index'
        },
        {
          name: 'Sobre mi',
          pathName: 'aboutMe'
        },
        {
          name: 'Proyectos',
          pathName: 'projects'
        },
        {
          name: 'Anexos',
          pathName: 'annexes'
        },
        {
          name: 'Contacto',
          pathName: 'contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-item.nuxt-link-exact-active {
    color: #E9D13D!important;
    transition: none;
    border-bottom: 2px solid #E9D13D;
    padding-bottom: 8px;
  }
  .toolbar-logo {
    max-width: 50px!important;
  }
  @media only screen and (min-width: 960px) {
    .toolbar-logo {
      max-width: 70px!important;
    }
  }
</style>
