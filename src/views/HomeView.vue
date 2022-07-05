<script setup>
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";
</script>
<template>
  <main class="container">
    <Section id="about" class="section" type="about"> </Section>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="0.35"
        d="M0,320L80,298.7C160,277,320,235,480,229.3C640,224,800,256,960,245.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg> -->
    <Section id="skills" class="section" type="skills"> </Section>
    <Section id="projects" class="section" type="projects"> </Section>
    <Section id="contact" class="section" type="contact"> </Section>
  </main>
  <Footer class="footer"></Footer>
</template>
<style scoped>
.container {
  padding: 0 var(--pd-container);
}
/* .footer {
  padding: 0 var(--pd-container);
} */
</style>
