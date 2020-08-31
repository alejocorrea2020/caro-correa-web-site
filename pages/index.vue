<template>
  <div>
    <Main />
    <Projects />
    <Annexes />
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from '@/components/Banners/AboutMe'
import Annexes from '@/components/Banners/Annexes'
import Main from '@/components/Banners/Main'
import Projects from '@/components/Banners/Projects'
export default {
  components: {
    AboutMe,
    Annexes,
    Main,
    Projects
  }
}
</script>
