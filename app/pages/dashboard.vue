<script setup lang="ts">
    definePageMeta({
        layout: "landing",
        middleware: ['auth'],
    });
</script>

<template>
  <LandingContainer>
    <Dashboard></Dashboard>
  </LandingContainer>
</template>
