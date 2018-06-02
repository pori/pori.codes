<template>
  <div>
    <template v-if="$route.path === '/'">
      <div class="container">
        <TheHomepage/>
      </div>
      <TheRainbow/>
    </template>
    <div v-else class="container">
      <Content/>
    </div>
  </div>
</template>

<script>
import TheHomepage from "./TheHomepage.vue";
import TheRainbow from "./TheRainbow.vue";

export default {
  components: {
    TheHomepage,
    TheRainbow
  }
};
</script>

<style lang="scss">
:root {
  /* Color */
  --primary: #ff91af;
  --secondary: #8bd5e9;
  --black: #333333;
  --grey: #bdbdbd;
  --muted: #e0e0e0;

  /* Type */
  --heading-typeface: "Libre Baskerville", serif;
  --body-typeface: "Libre Franklin", sans-serif;
  --type-scale: 1.125em;

  /* Globals */
  --border-radius: 3px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  font-size: var(--type-scale);
  margin: 0;
}

body {
  background-color: white;
  font-family: var(--heading-typeface);
  font-weight: 400;
  line-height: 1.45;
  color: #333;
}

p {
  font-family: var(--body-typeface);
  margin-bottom: 1.3em;
}

h1,
h2,
h3,
h4 {
  margin: 1.414em 0 0.5em;
  font-weight: bold;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: calc(var(--type-scale) * 4);
}

h2 {
  font-size: calc(var(--type-scale) * 3);
}

h3 {
  font-size: calc(var(--type-scale) * 2);
  font-weight: lighter;
}

h4 {
  font-size: var(--type-scale);
  font-weight: lighter;
}

small {
  font-size: 0.618em;
}

section {
  margin: 5rem 0;
}

a {
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--secondary);
  }
}

.button {
  background: var(--primary);
  padding: 0.5rem 1rem;
  color: white !important;
  font-family: var(--body-typeface);
  border-radius: var(--border-radius);
  font-weight: bold;
  transition: all 0.5s !important;

  &:hover {
    background: var(--secondary);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
  }
}

.container {
  width: 1000px;
  margin: 0 auto;
}
</style>