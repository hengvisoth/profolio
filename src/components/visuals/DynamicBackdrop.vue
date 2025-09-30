<template>
  <div class="scene">
    <div class="layer layer--glow"></div>
    <div class="layer layer--beam"></div>
    <div class="layer layer--grain"></div>
  </div>
</template>

<style scoped>
.scene {
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  overflow: hidden;
  background: radial-gradient(circle at 15% 20%, rgba(253, 186, 116, 0.18), transparent 55%),
    radial-gradient(circle at 80% 10%, rgba(249, 115, 22, 0.15), transparent 60%),
    linear-gradient(180deg, rgba(11, 15, 28, 0.95), rgba(9, 6, 4, 0.85));
}

.layer {
  position: absolute;
  inset: -20%;
  mix-blend-mode: screen;
}

.layer--glow {
  background: radial-gradient(circle at 50% 60%, rgba(249, 115, 22, 0.24), transparent 70%);
  filter: blur(80px);
  animation: slowPulse 18s ease-in-out infinite;
}

.layer--beam {
  background: conic-gradient(from 240deg at 50% 50%, rgba(255, 214, 170, 0.2), transparent 40%, rgba(253, 186, 116, 0.12));
  transform: rotate(8deg) scale(1.05);
  opacity: 0.55;
  animation: beamDrift 24s linear infinite;
}

.layer--grain {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none"%3E%3Cpath d="M0 159L159 0" stroke="rgba(255,255,255,0.04)"/%3E%3C/svg%3E');
  opacity: 0.2;
  transform: scale(1.2);
  animation: grainShift 40s linear infinite;
}

@keyframes slowPulse {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(1.05);
  }
}

@keyframes beamDrift {
  0% {
    transform: rotate(8deg) scale(1.05);
  }
  100% {
    transform: rotate(368deg) scale(1.05);
  }
}

@keyframes grainShift {
  0% {
    transform: translate3d(0, 0, 0) scale(1.2);
  }
  100% {
    transform: translate3d(-5%, -4%, 0) scale(1.2);
  }
}
</style>
