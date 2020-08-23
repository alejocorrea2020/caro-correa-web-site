<template>
  <div style="background: white; border-radius: 10px;">
    <div
      class="preview-card elevation-5 cursor-pointer"
      style="min-height: 350px; position: relative; border-radius: 10px;"
      :style="{ backgroundImage: `url(${image})` }"
      @click="goTo()"
    >
      <div class="preview-card--title-component pa-4">
        <img
          src="/Logos/logo-ccm.png"
          style="max-width: 60px; position: absolute; right: 16px; top: 16px; border-radius: 10px"
          alt="Logo Carolina Correa Martínez"
        >
        <h4 class="white--text mt-0 text-uppercase line-height-13">
          {{ title }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo () {
      this.$emit('goTo')
    }
  }
}
</script>

<style>
  .preview-card {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .preview-card--title-component {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    filter: opacity(1);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: all ease-in-out 0.4s;
  }
  @media only screen and (min-width: 960px) {
    .preview-card--title-component {
      filter: opacity(0);
    }
    .preview-card:hover .preview-card--title-component {
      filter: opacity(1);
    }
  }
</style>
