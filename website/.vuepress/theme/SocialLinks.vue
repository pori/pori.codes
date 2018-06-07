<template>
  <nav>
    <ul>
      <li>
        <a 
          v-if="twitter" 
          :href="`https://twitter.com/${twitter}`" 
          title="Twitter"
          target="_blank"
        >
          <icon-twitter />
        </a>
      </li>
      <li>
        <a 
          v-if="codepen" 
          :href="`https://codepen.io/${codepen}`" 
          title="CodePen"
          target="_blank"
        >
          <icon-codepen />
        </a>
      </li>
      <li>
        <a 
          v-if="github" 
          :href="`https://github.com/${github}`" 
          title="GitHub"
          target="_blank"
        >
          <icon-github />
        </a>
      </li>
      <li>
        <a 
          v-if="dribbble" 
          :href="`https://dribbble.com/${dribbble}`" 
          title="Dribbble"
          target="_blank"
        >
          <icon-dribbble />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconTwitter from "./icons/IconTwitter.vue";
import IconCodepen from "./icons/IconCodepen.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconDribbble from "./icons/IconDribbble.vue";

export default {
  components: {
    IconTwitter,
    IconCodepen,
    IconGithub,
    IconDribbble
  },
  props: ["twitter", "codepen", "github", "dribbble"]
};
</script>

<style lang="scss">
nav {
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 3rem;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 0.5rem;
      vertical-align: middle;

      a svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>