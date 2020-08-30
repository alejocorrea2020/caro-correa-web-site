<template>
  <v-row class="container mx-auto" justify="center">
    <v-col cols="12" class="mb-4">
      <SectionTitle color="cPurple">
        Contáctame
      </SectionTitle>
    </v-col>
    <v-col class="pr-10" cols="12" md="4">
      <div>
        <v-img class="elevation-3" src="/Caro.png" style="border-radius: 50%" />
      </div>
    </v-col>
    <v-col class="pl-10 pb-10 d-flex flex-column justify-center" cols="12" md="6">
      <div class="mb-6">
        <h3 class="mb-2 font-size-26 cPurple--text">Celular</h3>
        <a href="https://api.whatsapp.com/send?phone=573017853420" class="d-inline-flex align-center">
          <v-icon class="mr-2" color="cPurple" size="35px">mdi-whatsapp</v-icon>
          <span class="font-size-22">+57 3017853420</span>
        </a>
      </div>

      <div class="mb-4">
        <h3 class="mb-2 font-size-26 cPurple--text">Correo</h3>
        <a href="mailto: carohockey1@gmail.com" class="d-inline-flex align-center">
          <v-icon class="mr-2" color="cPurple" size="35px">mdi-gmail</v-icon>
          <span class="font-size-22">carohockey1@gmail.com</span>
        </a>
      </div>

      <div>
        <h3 class="mb-2 font-size-26 cPurple--text">Redes sociales</h3>
        <ul class="d-flex align-center">
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
              <v-icon size="35px" color="cPurple">
                {{ socialNetWork.icon }}
              </v-icon>
            </v-btn>
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      socialNetworks: [
        { icon: 'mdi-instagram', href: 'https://www.instagram.com/caro1correa/?hl=en' },
        { icon: 'mdi-facebook', href: 'https://www.facebook.com/caro.correa.31' }
      ]
    }
  }
}
</script>
