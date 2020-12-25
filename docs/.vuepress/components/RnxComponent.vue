<template>
  <div class="component">
    <div class="component__title">Component preview</div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.component {
  background-color: #f2f2f2;
  margin: 0;
  padding: 6rem 0;
  position: relative;
  display: flex;
  justify-content: center;

  &__title {
    position: absolute;
    top: 0.62rem;
    right: 0.62rem;
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.123rem;
  }
}
</style>
