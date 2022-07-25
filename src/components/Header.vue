<script setup>
import { RouterLink } from "vue-router";
import logo from "../assets/logo.png";
</script>

<template>
  <header class="header">
    <input type="checkbox" id="checkbox" class="header__checkbox" />
    <label for="checkbox" name="checkbox" class="header__label">
      <svg class="menu" viewBox="0 0 448 512" width="100" title="bars">
        <path
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        />
      </svg>

      <svg class="close" viewBox="0 0 384 512" width="100" title="times">
        <path
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        />
      </svg>
    </label>
    <ul class="nav__ul">
      <li>
        <a href="#" class="nav__wrapperlogo"
          ><img :src="logo" alt="logo for portfolio" class="nav__logo"
        /></a>
      </li>
      <li><a href="#about" class="nav__li">About me</a></li>
      <li><a href="#skills" class="nav__li">My skills</a></li>
      <li><a href="#projects" class="nav__li">My projects</a></li>
    </ul>
  </header>
</template>

<style>
.header__checkbox {
  display: none;
  /* margin: 1rem; */
}

.header__label {
  position: absolute;
  right: 10px;
  z-index: 30;
  cursor: pointer;
}

.header__label svg {
  width: 1rem;
  fill: white;
  margin-top: 0.3rem;
}

.header__label .close,
.header__label .menu {
  margin-top: 0.3rem;
}

.header__label .close {
  display: none;
}
.header {
  padding: 1em var(--pd-container);
  color: #545454;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: saturate(180%) blur(5px);
  backface-visibility: hidden;
  /* transform: translateZ(0); */
  box-shadow: inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1);
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
}
.nav__ul {
  display: flex;
  flex-direction: column;
  color: #545454;
  align-items: center;
  gap: 2em;
  /* margin: 1rem; */
  padding: 0;
}

.nav__ul a {
  color: inherit;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav__logo {
  display: block;
  width: 130px;
}
.nav__ul li {
  list-style-type: none;
  color: white;
  text-decoration: none;
  color: #545454;
  font-size: 14px;
  font-weight: 400;
  display: none;
}

.nav__ul li:first-child {
  display: block;
  margin-right: auto;
}

.nav__ul li:hover {
  color: white;
}

.header__checkbox:checked ~ ul.nav__ul li {
  display: block;
}

.header__checkbox:checked ~ label.header__label .close {
  display: block;
}

.header__checkbox:checked ~ label.header__label .menu {
  display: none;
}

@media only screen and (min-width: 560px) {
  .header__label {
    display: none;
  }

  .nav__ul {
    flex-direction: row;
  }

  .nav__ul li {
    display: block;
  }
}
</style>
