<template>
  <div class="scene" aria-hidden="true"></div>
</template>

<style scoped>
.scene {
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background: rgb(var(--c-backdrop));
}

/* Static grain only. Nothing here moves, so the receipt stays the one thing that does. */
.scene::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.07;
  mix-blend-mode: overlay;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="180" height="180"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23n)"/%3E%3C/svg%3E');
}
</style>
