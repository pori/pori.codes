<template>
  <div>
    <Hero/>

    <Content/>

    <h3 class="section-heading">Community Engineering</h3>

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

    <h3 class="section-heading">Projects</h3>

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

    <Footer/>
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
import Hero from "./Hero.vue";
import ProjectCard from "./ProjectCard.vue";
import Footer from "./Footer.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
  components: {
    Hero,
    ProjectCard,
    Footer,
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

section {
  margin-top: 2em;
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  column-gap: 1em;

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