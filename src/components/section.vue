<script setup>
import aboutImage from "../assets/images/sections/about/areawork.png";
import { loadImages } from "../utils/loadImages";
import ButtonIcon from "./ButtonIcon.vue";
import iconDonwload from "../assets/icons/IconDownload.svg";
import Box from "./Box.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: false,
  },
  class: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section :id="props.id" :class="props.class" v-if="props.type === 'about'">
    <div class="section__body section__body--about">
      <div class="body__content">
        <span
          class="body__title"
          style="
            --content: 'Frontend';
            --start-color: #007cf0;
            --end-color: #00dfd8;
            --delay: 0s;
          "
          >Frontend</span
        ><br />
        <span
          class="body__title"
          style="
            --content: 'Developer';
            --start-color: #7928ca;
            --end-color: #ff0080;
            --delay: 3.33s;
          "
          >Developer</span
        >
        <span
          class="body__title body__title--seniority"
          style="
            --content: 'Jr';
            --start-color: #ff4d4d;
            --end-color: #f9cb28;
            --delay: 6.66s;
          "
          >Jr</span
        >
        <p class="section__paragraph">
          Hi! My name is
          <span class="body__name">Walter Daniel Huaynapata Aguilar</span> I'm
          from Peru and I like the design and combinate colors, apply designs
          and practice all time. <br />

          I consider very curious, proactive, puntual and responsable without
          the focus. <br />

          I don't wait to learn new technologies and get new experiences 😁
          <br />

          Greetings 👋 <br />
        </p>
        <ButtonIcon>
          <template #icon>
            <img :src="iconDonwload" class="button__icon" alt="icon download" />
          </template>
          <template #text> Download CV </template>
        </ButtonIcon>
      </div>
      <div class="body__image">
        <img :src="aboutImage" alt="" />
      </div>
    </div>
  </section>
  <section
    :id="props.id"
    :class="props.class"
    v-else-if="props.type === 'skills'"
  >
    <h3 class="section__title">My skills</h3>
    <div class="section__body section__body--skills">
      <Box title="frontend" :media="loadImages"></Box>
      <Box title="backend" :media="loadImages"></Box>
      <Box title="tools" :media="loadImages"></Box>
    </div>
  </section>
  <section
    :id="props.id"
    :class="props.class"
    v-else-if="props.type === 'projects'"
  ></section>
  <section
    :id="props.id"
    :class="props.class"
    v-else-if="props.type === 'contact'"
  ></section>
</template>

<style scoped>
.section {
  padding: 5rem 0;
}

.section__paragraph {
  margin-top: 5em;
  font-size: 1.2em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.586);
}
.section__title {
  text-align: center;
  font-weight: 700;
  font-size: 3em;
}

.section__body {
  display: flex;
}

.section__body--about {
  align-items: center;
  justify-content: space-between;
}

.section__body--skills {
}
.body__title {
  font-size: 4rem;
  /* display: block; */
  font-weight: 800;
  position: relative;
  /* color: black; */
}

.body__title--seniority {
  margin-left: 30px;
}

.body__title::before {
  background: linear-gradient(90deg, var(--start-color), var(--end-color));
  content: var(--content);
  position: absolute;
  /* inset: 0; */
  font-size: 4rem;
  /* display: block; */
  font-weight: 800;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated 9s infinite;
  animation-delay: var(--delay);
}

.body__content {
  width: 50%;
}

/* .body__image {
  width: 50%;
} */

.button__icon {
  height: 100%;
  width: 100%;
}

@keyframes animated {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}
</style>
