<script setup>
const props = defineProps({
  download: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <a class="button__wrapper" :href="props.download" :download="props.name">
    <div class="button__icon">
      <slot name="icon"></slot>
    </div>
    <div class="button__content">
      <slot name="text"></slot>
    </div>
  </a>
</template>

<style scoped>
.button__wrapper,
.button__wrapper:link {
  outline: none;
  text-decoration: none;
}
.button__wrapper {
  display: block;
  border-radius: 4px;
  padding: 10px 10px 10px 40px;
  background-color: antiquewhite;
  color: black;
  width: 150px;
}

.button__content {
  width: 100%;
  height: 100%;
}

.button__icon {
  position: absolute;
  left: 10px;
  top: 25%;
  bottom: 25%;
  height: 50%;
}
</style>
