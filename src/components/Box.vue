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
      <div
        class="wrapper__box"
        v-for="image in props.media(props.title)"
        :key="image"
      >
        <img :src="image.value" alt="" class="box__media" />
        <span class="wrapper__title">{{ image.name }}</span>
      </div>
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
.wrapper__box {
  /* height: 100%; */
}

.box__media {
  display: block;
  height: 80px;
}

.wrapper__title {
  margin-top: 15px;
  text-align: center;
  display: block;
}
</style>

<!-- 
<nav class="nav">
  <input type="checkbox" name="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="toggle">
    <svg class="menu" viewBox="0 0 448 512" width="50" title="bars">
      <path
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
    </svg>
      <svg class="close" viewBox="0 0 384 512" width="50" title="times">
      <path
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
    </svg>
  </label>
    <ul class="nav__menu">
       <li class="nav__logo">logo</li>
       <li> <a href="#">classes</a></li>
       <li> <a href="#">blog</a></li>
       <li> <a href="#">foro</a></li>
    </ul>
</nav>

body{
  font-family: sans-serif;
  font-weight: lighter;
  color: gree;
  background-color: lightblue;
  height: 100vh;
}

.nav{
  border-bottom: 1px solid gray;
}

.checkbox{
  display: none;
}

.toggle{
  position: absolute;
  cursor: pointer;
  margin: 0 1rem;
  right: 0;
}

.toggle svg{
  width: 1rem;
  fill: white
}

.close{
  display: none;
}

.toggle.close, toggle.menu{
  margin-top: 0.3rem;
}

.nav__menu{
  align-items: center;
  display: flex;
  flex-direction:column;
  gap: 2rem;
}

.nav__menu li{
  display: none;
  list_style-type: none;
}

.nav__menu li:first-child{
  display: block;
  margin-right: auto;
}

.nav__menu a{
  color: inherit;
  font-size: 1.1rem;
  text-decoration: none;
}

.logo{
  height: 30px;
}

.logo img{
  height: 100%;
}

.checkbox:checked ~ ul.nav__menu li{
  display: block;
}

.checkbox:checked ~ label.toggle .close{
  display: block;
}

.checkbox:checked ~ label.toggle .menu{
  display: none;

  
  @media only screen and (min-width: 560x){
    .toggle{
      display: none;
    }
    
    .nav__menu{
      flex-direction: row;
    }
    
    .nav__menu li{
      display: block;
    }
  } -->
