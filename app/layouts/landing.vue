<template>
  <LandingNavbar class="navbar"></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
</template>

<style>
.navbar {
  background: #ffffff;
  /* backdrop-filter: blur(5px); */
  border-radius: 1rem;
  position: sticky;
  top: 0;
}
</style>