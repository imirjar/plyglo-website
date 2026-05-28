<template>
  <LandingNavbar class="navbar"></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
</template>

<style>
.navbar {
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 40;
}
</style>
