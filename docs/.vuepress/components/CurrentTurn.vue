<script>
import RnxComponent from "./RnxComponent";
export default {};
</script>

<template>
  <RnxComponent>
    <div class="current-turn">
      <div class="current-turn__header">
        <div class="current-turn__subtitle">CURRENT TURN</div>
        <div class="current-turn__title current-turn__title--top">PLAYER 1</div>
      </div>
      <div class="current-turn__content">
        <div class="current-turn__round">
          <div class="current-turn__title">ROUND</div>
          <div class="current-turn__number current-turn__number--left">10</div>
        </div>
        <div class="current-turn__avatar">
          <img
            src="/assets/avatar-1.png"
            alt="PLAYER 1 AVATAR"
            class="current-turn__image"
          />
          <div class="current-turn__cards">12</div>
        </div>
        <div class="current-turn__score">
          <div class="current-turn__title">SCORE</div>
          <div class="current-turn__number current-turn__number--right">
            123
          </div>
        </div>
      </div>
    </div>
  </RnxComponent>
</template>

<style lang="scss">
.current-turn {
  background: rgba(24, 24, 24, 0.92);
  border-radius: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ababab;
  font-size: 14px;
  letter-spacing: 0.03em;
  width: 291px;

  &__header {
    background-color: #191919;
    border-radius: 32px 32px 0 0;
    padding: 1rem;
    text-align: center;
  }

  &__subtitle {
    font-size: 9px;
  }

  &__title {
    color: white;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
  }

  &__title {
    font-size: 14px;
    color: #ababab;

    &--top {
      color: white;
      font-size: 20px;
      margin-top: 0.2rem;
    }
  }

  &__content {
    align-items: flex-start;
    display: flex;
    padding: 0.82rem 1rem;
  }

  &__avatar {
    align-items: center;
    border: 4px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0px 4.52525px 4.52525px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 112px;
    justify-content: center;
    margin: -20px auto -28px auto;
    position: relative;
    width: 112px;
  }

  &__image {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &__cards {
    align-items: center;
    background: #983128;
    border: 4px solid #ffffff;
    border-radius: 50%;
    bottom: 0;
    box-sizing: border-box;
    box-shadow: 0px 4.52525px 4.52525px rgba(0, 0, 0, 0.25);
    color: white;
    display: flex;
    font-weight: 600;
    font-size: 11.3131px;
    height: 30px;
    justify-content: center;
    position: absolute;
    right: 0;
    width: 30px;
  }

  &__round {
    padding-right: 0.4rem;
    flex: 1;
  }

  &__score {
    padding-left: 0.4rem;
    flex: 1;
  }

  &__number {
    color: white;
    font-size: 32px;
    font-weight: 600;

    &--left {
      padding-left: 0.4rem;
      text-align: left;
    }

    &--right {
      padding-right: 0.4rem;
      text-align: right;
    }
  }
}
</style>
