<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  media: {
    type: Function,
    required: false,
  },
});
</script>
<template>
  <div class="box">
    <div class="box__title">
      {{ props.title }}
    </div>
    <div
      class="box__body"
      v-for="image in props.media(props.title)"
      :key="image"
    >
      <img :src="image.value" alt="" />
    </div>
  </div>
</template>
<style scoped>
.box {
  /* padding: ; */
}
.box__title {
  font-weight: 700;
  font-size: 1.5em;
}
</style>
