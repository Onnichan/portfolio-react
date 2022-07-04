<script setup>
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";
</script>
<template>
  <main class="container">
    <Section id="about" class="section" type="about"> </Section>
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
.footer {
  padding: 0 var(--pd-container);
}
</style>
