<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="dml-footer">
    <div class="container">
      <p class="copy">© Dan Plaza 2022-{{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
.dml-footer {
  width: 100%;
  height: 4rem; 
  display: flex;
  background-color: var(--dml-color-primary);
  color: var(--dml-color-secondary-dark);
}

.dml-footer div {
  width: 100%;
  height: 100%; 
  display: flex;
}

.dml-footer .copy {
  margin-right: auto;
  padding: var(--dml-space-md);
  align-self: center;
}
</style>
