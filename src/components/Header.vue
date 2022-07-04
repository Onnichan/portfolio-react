<script setup>
import { RouterLink } from "vue-router";
import logo from "../assets/logo.png";
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="heaader__logo">
      <img :src="logo" alt="logo description for me" height="50" />
    </RouterLink>
    <nav class="header__nav">
      <ul class="nav__ul">
        <a href="#about" class="nav__li">About me</a>
        <a href="#skills" class="nav__li">My skills</a>
        <a href="#projects" class="nav__li">My projects</a>
        <a href="#contact" class="nav__li">Contact</a>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  /* background-color: rgba(44, 36, 36, 0.192); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em var(--pd-container);
  color: #545454;
}

.header__nav {
}

.nav__ul {
  list-style: none;
  display: flex;
  color: #545454;
  align-items: center;
  gap: 2em;
}

.nav__li,
.nav__li:link {
  outline: none;
  color: white;
  text-decoration: none;
  /* margin-left: 2em; */
  color: #545454;
  font-size: 1.2em;
}

.nav__li:hover {
  color: white;
}

.router-link-active {
  color: white;
}
</style>
