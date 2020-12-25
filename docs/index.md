# Game Board

Morbi lacinia mi ac neque fringilla mattis. Donec non neque augue. Nulla sed nulla ac nibh sagittis mollis quis in ex. Aliquam porttitor commodo sapien, in finibus orci suscipit nec. Donec ut ante odio.

![alt text](/assets/play-board.jpg 'View Playboard')

## CurrentTurn

<CurrentTurn/>

::: details Click para ver el código

### HTML

```html
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
        src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        alt="PLAYER 1 AVATAR"
        class="current-turn__image"
      />
      <div class="current-turn__cards">12</div>
    </div>
    <div class="current-turn__score">
      <div class="current-turn__title">SCORE</div>
      <div class="current-turn__number current-turn__number--right">123</div>
    </div>
  </div>
</div>
```

### CSS

```css
.current-turn {
  background: rgba(24, 24, 24, 0.92);
  border-radius: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ababab;
  font-size: 14px;
  letter-spacing: 0.03em;
  width: 291px;
}

.current-turn__header {
  background-color: #191919;
  border-radius: 32px 32px 0 0;
  padding: 1rem;
  text-align: center;
}

.current-turn__subtitle {
  font-size: 9px;
}

.current-turn__title {
  color: white;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
}

.current-turn__title {
  font-size: 14px;
  color: #ababab;
}

.current-turn__title--top {
  color: white;
  font-size: 20px;
  margin-top: 0.2rem;
}

.current-turn__content {
  align-items: flex-start;
  display: flex;
  padding: 0.82rem 1rem;
}

.current-turn__avatar {
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

.current-turn__image {
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.current-turn__cards {
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

.current-turn__round {
  padding-right: 0.4rem;
  flex: 1;
}

.current-turn__score {
  padding-left: 0.4rem;
  flex: 1;
}

.current-turn__number {
  color: white;
  font-size: 32px;
  font-weight: 600;
}

.current-turn__number--left {
  padding-left: 0.4rem;
  text-align: left;
}

.current-turn__number--right {
  padding-right: 0.4rem;
  text-align: right;
}
```

:::

## Info Message

<InfoMessage />

::: details Click para ver el código

### HTML

```html
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
    Mensaje tipo toast que muestra alertaal jugador. Aparece desde la derecha
    durante un tiempo determinado.
  </div>
</div>
```

### CSS

```css
.info-message {
  background: rgba(24, 24, 24, 0.92);
  border-radius: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ababab;
  font-size: 14px;
  letter-spacing: 0.03em;
  overflow: hidden;
  width: 291px;
}
.info-message__header {
  background-color: #191919;
  border-radius: 32px 32px 0 0;
  padding: 0.42rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
.info-message__icon {
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
.info-message__content {
  align-items: flex-start;
  color: #f2f2f2;
  display: flex;
  font-size: 16px;
  justify-content: center;
  line-height: 1.38rem;
  padding: 1.82rem 1.3rem 1.2rem 1.3rem;
  text-align: center;
}
```

:::
