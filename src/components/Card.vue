<script setup>
import iconExternalLink from "../assets/icons/IconExternalLink.svg";
import iconGithub from "../assets/icons/iconGithub.svg";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: false,
  },
});
</script>

<template>
  <div class="card">
    <div class="card__body">
      <a :href="props.data.web" class="card__externalLink">
        <img :src="props.data.url" class="card__media" alt="" />
      </a>
      <div class="card__options">
        <a :href="props.data.web" class="card__link">
          <img :src="iconExternalLink" alt="" class="card__icons" title="web" />
          <!-- <span>web</span> -->
        </a>
        <a :href="props.data.github" class="card__link">
          <img :src="iconGithub" alt="" class="card__icons" title="github" />
          <!-- <span>repo</span> -->
        </a>
      </div>
      <span class="card__title">{{ props.data.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.card,
.card__body {
  position: relative;
  width: 100%;
  height: 100%;
  /* border-radius: 4px; */
}

.card__externalLink::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
  transition: background-color 1s ease-in-out;
}
.card__externalLink:hover::after {
  background-color: rgba(0, 0, 0, 0.466);
}

.card__body:hover .card__options {
  opacity: 1;
  visibility: visible;
  transition: all 300ms ease-in-out;
}

.card__media {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.card__link {
  display: block;
}

.card__options {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.564);
  backdrop-filter: saturate(180%) blur(5px);
  width: 6.8%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
}

.card__icons {
  display: block;
  width: 60%;
  margin: 4px auto;
  color: white;
  z-index: 10;
}

.card__title {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 10;
  /* background-color: rgba(66, 42, 38, 0.237); */
  /* background-color: rgb(0, 0, 0); */
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 800;
  font-family: sans-serif;
}
</style>
