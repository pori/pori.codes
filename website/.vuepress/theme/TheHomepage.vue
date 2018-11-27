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
        :lead="project.lead"
        :description="project.description"
        :liveLink="project.liveLink"
        :liveLinkLabel="project.liveLinkLabel"
      />
    </section>

    <h3 class="section-heading">Elsewhere</h3>

    <section class="elsewhere">
      <div v-for="item in elsewhere">
        <a :href="item.link" target="_blank">{{ item.label }}</a>
      </div>
    </section>

    <h3 class="section-heading">Extracurriculars</h3>

    <section class="extracurriculars">
      <project-card
        v-for="project in extracurriculars"
        :key="project.title"
        :imagePath="project.imagePath"
        :title="project.title"
        :subtitle="project.subtitle"
        :lead="project.lead"
        :description="project.description"
        :liveLink="project.liveLink"
        :liveLinkLabel="project.liveLinkLabel"
      />
    </section>

    <TheFooter/>
    <SocialLinks
      :twitter="social.twitter"
      :codepen="social.codepen"
      :github="social.github"
      :gitlab="social.gitlab"
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
    elsewhere() {
      return this.options.elsewhere;
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
h2 a {
  &:nth-child(4):after,
  &:nth-child(5):after {
    content: " ";
  }
}

section:first-of-type {
  margin-top: 6em;
}

.section-heading {
  font-weight: bold;
  color: var(--primary);
}

.elsewhere {
  div {
    margin: 1.5em 0;

    a {
      color: var(--black);

      &:hover {
        color: var(--secondary);
      }
    }
  }
}

.extracurriculars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 1em;
  margin-top: 0;

  .project {
    .image-container {
      height: 300px;

      img:first-child {
        max-height: 75%;
      }
    }

    .description {
      width: 100%;
    }
  }
}
</style>