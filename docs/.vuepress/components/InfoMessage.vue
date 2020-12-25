<script>
import RnxComponent from "./RnxComponent";
export default {};
</script>

<template>
  <RnxComponent>
    <div class="info-message">
      <div class="info-message__header">
        <div class="info-message__icon">
          <svg
            width="36"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.017 31.377h23.966a2.25 2.25 0 001.981-3.316L19.982 5.806c-.85-1.578-3.113-1.578-3.963 0L4.036 28.06a2.25 2.25 0 001.98 3.316v0z"
              stroke="#F2F2F2"
              stroke-opacity=".64"
              stroke-width="1.851"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.597 13.739L18 22.316l.403-8.575a.403.403 0 00-.407-.422v0a.403.403 0 00-.4.418v0z"
              stroke="#F2F2F2"
              stroke-opacity=".64"
              stroke-width="1.851"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 27.932a1.406 1.406 0 110-2.813 1.406 1.406 0 010 2.813z"
              fill="#F2F2F2"
              fill-opacity=".64"
            />
          </svg>
        </div>
      </div>
      <div class="info-message__content">
        Mensaje tipo toast que muestra alertaal jugador. Aparece desde la
        derecha durante un tiempo determinado.
      </div>
    </div>
  </RnxComponent>
</template>

<style lang="scss">
.info-message {
  background: rgba(24, 24, 24, 0.92);
  border-radius: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ababab;
  font-size: 14px;
  letter-spacing: 0.03em;
  overflow: hidden;
  width: 291px;

  &__header {
    background-color: #191919;
    border-radius: 32px 32px 0 0;
    padding: 0.42rem 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  &__icon {
    background-color: #191919;
    border-radius: 50%;
    color: #ababab;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: -0.82rem 0 -1.42rem;
    height: 72px;
    width: 72px;
  }

  &__content {
    align-items: flex-start;
    color: #f2f2f2;
    display: flex;
    font-size: 16px;
    justify-content: center;
    line-height: 1.38rem;
    padding: 1.82rem 1.3rem 1.2rem 1.3rem;
    text-align: center;
  }
}
</style>
