<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <TopBar/>
  <div class="dml-main">
    <router-view></router-view>
  </div>
  <Footer/>
  <!-- Overlay -->
</template>

<style scoped>
.dml-main {
  margin-top: 4rem;
  margin-bottom: auto;
  width: 100%;
}
</style>
