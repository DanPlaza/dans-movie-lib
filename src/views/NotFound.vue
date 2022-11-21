<template>
  <main class="container dml-not-found">
    <section class="logo">
      <img src="../assets/images/dml-logo.svg" alt="Dan's Movie Library logo"> 
    </section>
    <section class="info">
      <h1>We couldn't find what you were looking for!</h1>
      <p>There seems to be an issue with the address you got.</p>
      <p>Try going to our home page and find your way from there.</p>
    </section>
  </main>
</template>

<style scoped>
.dml-not-found  {
  margin-top: var(--dml-space-lg);
  padding-left: var(--dml-space-md);
  padding-right: var(--dml-space-md);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr;
}
.dml-not-found h1 {
  margin-bottom: var(--dml-space-lg);
}
</style>