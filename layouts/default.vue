<template>
  <v-app id="gana-la-materia">
    <AppToolBar />
    <v-main style="padding-top: 100px!important;">
      <nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppToolBar from '@/components/AppToolBar'
export default {
  components: { AppFooter, AppToolBar },
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>
