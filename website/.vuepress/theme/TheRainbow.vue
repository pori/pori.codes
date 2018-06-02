<template>
  <div class="pride">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss">
.pride {
  --row-1: #eb3324;
  --row-2: #f3a83c;
  --row-3: #fffe54;
  --row-4: #377d22;
  --row-5: #001df5;
  --row-6: #74197b;

  display: flex;
  flex-direction: column;
  height: 100vh;

  @for $i from 1 through 6 {
    div:nth-child(#{$i}) {
      flex: 1;
      background: var(--row-#{$i});
      transition: all 0.3s;
    }
  }

  &:hover,
  &:active {
    --row-1: #74d7ec;
    --row-2: #ffafc7;
    --row-3: #fbf9f5;
    --row-4: #fbf9f5;
    --row-5: #ffb5cb;
    --row-6: #73d5ea;

    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(5),
    div:nth-child(6) {
      flex: 2;
    }
  }
}
</style>