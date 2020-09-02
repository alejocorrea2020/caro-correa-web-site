<template>
  <div class="loader-container">
    <div
      class="loader"
      :style="{
        border: `${borderWidth} solid ${circleColor}`,
        borderTop: `${borderWidth} solid ${spinColor}`,
        width: width,
        height: width,
        animation: `spin ${rotationTime}s linear infinite`
      }"
      style="border-radius: 50%"
    />
    <h4 class="loader-message" :style="{ color: messageColor }">
      {{ message }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    borderWidth: {
      default: '9px',
      type: String
    },
    circleColor: {
      default: '#f3f3f3',
      type: String
    },
    message: {
      default: 'Estamos cargando los datos',
      type: String
    },
    messageColor: {
      type: String,
      default: 'rgb(0, 0, 0)'
    },
    rotationTime: {
      default: 1,
      type: [Number, String]
    },
    spinColor: {
      default: '#3498db',
      type: String
    },
    width: {
      default: '80px',
      type: String
    }
  }
}
</script>

<style>
  .loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .loader-message {
    color: #172B4D;
  }
</style>
