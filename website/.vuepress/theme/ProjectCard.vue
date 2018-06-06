<template>
  <div class="project">
    <div class="image-container">
      <img :src="imagePath" :alt="title">
    </div>
    <h3>{{ title }}</h3>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="description">
      <span class="lead" v-html="lead"></span>&nbsp;
      <span v-html="description"></span>
    </p>
    <a v-if="liveLink" class="button" :href="liveLink" target="_blank">
      {{ liveLinkLabel || 'Visit Project'}} 
      <icon-arrow></icon-arrow>
    </a>
  </div>
</template>

<script>
import IconArrow from "./icons/IconArrow.vue";

export default {
  components: {
    IconArrow
  },
  props: [
    "imagePath",
    "title",
    "subtitle",
    "lead",
    "description",
    "liveLink",
    "liveLinkLabel",
    "moreLink"
  ]
};
</script>

<style lang="scss">
.project {
  margin-bottom: 6em;

  .image-container,
  img,
  h3,
  .subtitle,
  .description {
    transition: transform 0.3s;
  }

  .image-container {
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background: var(--secondary);
    border-radius: var(--border-radius);

    img {
      max-width: 100%;
      margin: 0 auto;
      border-radius: var(--border-radius);
    }
  }

  h3 {
    margin-top: 0.5em;
    margin-bottom: 0;
    font-weight: bold;
  }

  .subtitle {
    font-weight: bold;
    color: var(--grey);
    margin-top: 0.3em;
  }

  .description {
    width: 75%;
    color: var(--grey);

    .lead {
      color: var(--black);
    }
  }

  &:hover {
    .image-container {
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