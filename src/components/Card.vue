<script setup>
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
    <span class="card__title" v-show="title">{{ title }}</span>
    <div class="card__body">
      <img :src="props.data.url" class="card__media" alt="" />
    </div>
  </div>
</template>

<style scoped>
.card,
.card__body {
  width: 100%;
}
.card__media {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
