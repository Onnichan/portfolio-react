<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  images: {
    type: Function,
    required: false,
  },
  body: {},
});

// function showImages(filter) {
//   return Object.keys(props.images()).find(key =>
//     key === filter ? props.images()[key] : undefined
//   );
// }
</script>

<template>
  <div class="card">
    <span class="card__title"></span>
    <div class="card__body"></div>
  </div>
</template>

<style scoped></style>
