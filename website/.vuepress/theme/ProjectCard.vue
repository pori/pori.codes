<template>
  <div class="project">
    <img :src="imagePath" :alt="title">
    <h3>{{ title }}</h3>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="description">{{ description }}</p>
    <a v-if="liveLink" class="button" :href="liveLink" target="_blank">Visit Project</a>
  </div>
</template>

<script>
export default {
  props: [
    "imagePath",
    "title",
    "subtitle",
    "description",
    "liveLink",
    "moreLink"
  ]
};
</script>

<style lang="scss">
.project {
  margin-bottom: 6em;

  img,
  h3,
  .subtitle,
  .description,
  .button {
    transition: transform 0.3s;
  }

  img {
    width: 100%;
    height: 600px;
    border-radius: var(--border-radius);
  }

  h3 {
    margin-top: 0.5em;
    font-weight: bold;
  }

  .subtitle {
    font-weight: bold;
    color: var(--grey);
  }

  .description {
    width: 75%;
  }

  &:hover {
    img {
      transform: rotate(-12deg);
    }

    h3 {
      transform: rotate(12deg);
    }

    .subtitle {
      transform: rotate(-12deg);
    }

    .description {
      transform: rotate(12deg);
    }
  }
}
</style>