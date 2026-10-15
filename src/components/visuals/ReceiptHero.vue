<template>
  <div class="printer">
    <div class="slot" aria-hidden="true"><span class="led"></span></div>

    <article :key="run" class="paper">
      <header class="head">
        <h2 class="name">Heng Ratanak Visoth</h2>
        <p>Full stack developer</p>
        <p>Phnom Penh, Cambodia</p>
      </header>

      <div class="portrait" aria-hidden="true">
        <img v-if="portrait" :src="portrait" alt="" width="240" height="240" />
      </div>

      <div class="rule"></div>

      <dl class="rows">
        <div class="row"><dt>Apps in production</dt><i></i><dd>10+</dd></div>
        <div class="row"><dt>Business clients</dt><i></i><dd>30+</dd></div>
        <div class="row"><dt>Daily active users</dt><i></i><dd>100+</dd></div>
      </dl>

      <div class="rule"></div>

      <dl class="rows">
        <div class="row"><dt>Experience</dt><i></i><dd>3+ years</dd></div>
        <div class="row"><dt>Stack</dt><i></i><dd>Flutter, Vue, Node</dd></div>
        <div class="row"><dt>Status</dt><i></i><dd>Available</dd></div>
        <div class="row"><dt>Date</dt><i></i><dd>{{ today }}</dd></div>
      </dl>

      <div class="rule"></div>

      <svg class="barcode" viewBox="0 0 200 34" preserveAspectRatio="none" aria-hidden="true">
        <rect v-for="bar in bars" :key="bar.x" :x="bar.x" y="0" :width="bar.w" height="34" />
      </svg>

      <p class="thanks">
        Thanks for stopping by.
        <button type="button" @click="run++">Print again</button>
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const run = ref(0)
const portrait = ref('')
const today = new Date().toLocaleDateString('en-GB')

// Barcode is seeded from the name so it stays the same on every load.
const bars = (() => {
  const seed = 'HENGRATANAKVISOTH'
  const out: { x: number; w: number }[] = []
  let x = 0
  for (let i = 0; x < 198; i++) {
    const w = ((seed.charCodeAt(i % seed.length) * (i + 3)) % 3) + 1
    if (i % 2 === 0) out.push({ x, w })
    x += w + 1
  }
  return out
})()

const INK = [27, 26, 24]
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]

// Thermal printers only print black dots, so the portrait is dithered to 1-bit.
onMounted(() => {
  const img = new Image()
  img.onload = () => {
    const size = 120
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(img, 0, 0, size, size)
    const frame = ctx.getImageData(0, 0, size, size)
    const px = frame.data
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4
        const lum = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]
        const boosted = Math.min(255, Math.max(0, (lum - 128) * 1.5 + 132))
        const limit = ((BAYER[(y % 4) * 4 + (x % 4)] + 0.5) / 16) * 255
        const dark = boosted < limit
        px[i] = INK[0]
        px[i + 1] = INK[1]
        px[i + 2] = INK[2]
        px[i + 3] = dark ? 255 : 0
      }
    }
    ctx.putImageData(frame, 0, 0)
    portrait.value = canvas.toDataURL()
  }
  img.src = '/pf.jpeg'
})
</script>

<style scoped>
.printer {
  position: relative;
  width: min(100%, 320px);
  filter: drop-shadow(0 22px 28px rgba(0, 0, 0, 0.55));
}

.slot {
  position: relative;
  z-index: 2;
  height: 14px;
  border-radius: 7px;
  background: #050505;
  box-shadow: inset 0 -2px 0 rgba(255, 255, 255, 0.07);
}

.led {
  position: absolute;
  right: 16px;
  top: 50%;
  width: 5px;
  height: 5px;
  margin-top: -2.5px;
  border-radius: 50%;
  background: rgb(var(--c-main));
  box-shadow: 0 0 8px rgb(var(--c-main));
  animation: blink 0.3s steps(2, jump-none) 9;
}

.paper {
  position: relative;
  margin: -7px 12px 0;
  padding: 26px 22px 40px;
  background:
    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.018) 0 1px, transparent 1px 3px), rgb(var(--c-paper));
  color: rgb(var(--c-ink));
  font-family: 'Martian Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 11px;
  line-height: 1.6;
  transform: rotate(-1.2deg);
  transform-origin: top center;
  -webkit-mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50% /
    14px 100%;
  mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50% / 14px 100%;
  animation: feed 2.6s steps(30, end) 0.35s both;
}

.head {
  text-align: center;
}

.name {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.head p {
  color: #6b675f;
}

.portrait {
  width: 240px;
  max-width: 100%;
  aspect-ratio: 1;
  margin: 16px auto 14px;
}

.portrait img {
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}

.rule {
  margin: 12px 0;
  border-top: 1px dashed rgb(var(--c-ink) / 0.45);
}

.row {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.row i {
  flex: 1;
  min-width: 8px;
  border-bottom: 1px dotted rgb(var(--c-ink) / 0.5);
  transform: translateY(-0.25em);
}

.row dd {
  font-weight: 600;
  text-align: right;
}

.barcode {
  display: block;
  width: 100%;
  height: 34px;
  fill: rgb(var(--c-ink));
}

.thanks {
  margin-top: 12px;
  text-align: center;
  color: #6b675f;
}

.thanks button {
  display: block;
  margin: 2px auto 0;
  color: rgb(var(--c-ink));
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.thanks button:hover {
  color: rgb(var(--c-main-ink));
}

.thanks button:focus-visible {
  outline: 2px solid rgb(var(--c-main));
  outline-offset: 3px;
}

@keyframes feed {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes blink {
  50% {
    opacity: 0.15;
  }
}

@media (prefers-reduced-motion: reduce) {
  .paper,
  .led {
    animation: none;
  }
}
</style>
