<script setup>
import Card from "./Card.vue";
const props = defineProps({
  data: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="grid">
    <div class="grid__body">
      <Card v-for="item in props.data()" :key="item.name" :data="item"></Card>
    </div>
  </div>
</template>

<style scoped>
.grid {
  width: 100%;
  height: 100%;
}
.grid__body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
/* 
@media only screen and (max-width:880px){
  .grid__body{
    grid-template-columns: repeat(2, 1fr);
  }
} */

@media only screen and (max-width: 800px) {
  .grid__body {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
