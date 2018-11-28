<template>
  <div class="hero">
    <img class="avatar" src="/me.jpg" alt="Alex Hernandez">
  </div>
</template>

<style>
.hero {
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 230px;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
  .hero {
    height: 50vh;
  }
}
</style>