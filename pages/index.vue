<template>
  <div>
    <Main />
    <Projects />
    <Annexes />
  </div>
</template>

<script>
import Annexes from '@/components/Banners/Annexes'
import Main from '@/components/Banners/Main'
import Projects from '@/components/Banners/Projects'
export default {
  components: {
    Annexes,
    Main,
    Projects
  }
}
</script>
