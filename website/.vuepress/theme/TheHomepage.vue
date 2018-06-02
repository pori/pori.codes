<template>
  <div>
    <TheHero/>
     
    <Content/>

    <section>
      <project-card 
        v-for="project in projects"
        :key="project.title"
        :imagePath="project.imagePath"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :liveLink="project.liveLink" />
    </section>

    <h3 class="section-heading">Extracurriculars</h3>

    <section class="two-col">
      <project-card 
        v-for="project in extracurriculars"
        :key="project.title"
        :imagePath="project.imagePath"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :liveLink="project.liveLink" />
    </section>
    
    <TheFooter/>
    <SocialLinks
      :twitter="social.twitter"
      :codepen="social.codepen"
      :github="social.github"
      :dribbble="social.dribbble"
    />
  </div>
</template>

<script>
import TheHero from "./TheHero.vue";
import ProjectCard from "./ProjectCard.vue";
import TheFooter from "./TheFooter.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
  components: {
    TheHero,
    ProjectCard,
    TheFooter,
    SocialLinks
  },
  computed: {
    options() {
      return this.$page.frontmatter;
    },
    projects() {
      return this.options.projects;
    },
    extracurriculars() {
      return this.options.extracurriculars;
    },
    social() {
      return this.options.social;
    }
  }
};
</script>

<style lang="scss">
.section-heading {
  font-weight: bold;
  color: var(--primary);
}

.two-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1em;
  margin-top: 0;

  .project {
    img {
      height: 200px;
    }

    .description {
      width: 100%;
    }
  }
}
</style>