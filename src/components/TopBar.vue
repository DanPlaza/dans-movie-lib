<template>
  <div class="dml-top-bar">
    <nav class="container">
      <router-link class="logo" to="/">
        <img src="../assets/images/dml-logo.svg" alt="Dan's Movie Library logo"><span>Dan's Movie Library</span>
      </router-link>
      <div id="search-input-placeholder"></div>
    </nav>
  </div>
</template>

<style scoped>
.dml-top-bar {
  width: 100%;
  height: 4rem; 
  display: flex;
  position: fixed;
  background-color: var(--dml-color-secondary-dark);
  color: var(--dml-color-neutral);
}
.dml-top-bar nav {
  width: 100%;
  height: 100%; 
}

.dml-top-bar .logo {
  margin-right: auto;
  padding: var(--dml-space-md);
  height: 100%;
  display: flex;
}

.dml-top-bar .logo img {
  height: 100%;
}

.dml-top-bar .logo span {
  margin-left: var(--dml-space-md);
  align-self: center;
  color: var(--dml-color-primary);
  font-family: 'Railway', 'Helvetica';
  font-weight: 600;
}
</style>
