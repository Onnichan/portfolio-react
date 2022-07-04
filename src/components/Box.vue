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
    <div class="box__body">
      <img
        :src="image.value"
        v-for="image in props.media(props.title)"
        :key="image"
        alt=""
        class="box__media"
      />
    </div>
  </div>
</template>
<style scoped>
.box {
  margin: 25px 0;
}
.box__title {
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.box__body {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  transition: flex-wrap 3s;
}

.box__media {
  display: block;
  height: 80px;
}
</style>
