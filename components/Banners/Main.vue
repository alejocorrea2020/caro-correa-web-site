<template>
  <div class="main-background d-flex justify-center align-center">
    <div class="text-center hidden-md-and-up">
      <img src="/Logos/logo-ccm.png" alt="Logo Caro Correa" style="width: 200px">
      <h1 class="cPurple--text text-center mt-2">
        Carolina Correa Martínez
      </h1>

      <h2 class="cBlue--text text-center mt-2">
        Diseñadora Industrial
      </h2>
    </div>
  </div>
</template>

<style scoped>
  .main-background {
    background-position: center center;
    background-size: cover;
    height: calc(100vh - 100px);
    width: 100%
  }
  @media only screen and (min-width: 960px) {
    .main-background {
      background-image: url('/Banners/banner-principal-caro.png');
    }
  }
</style>
