<template>
  <svg
    class="art"
    viewBox="0 0 640 380"
    role="img"
    :aria-label="label"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <pattern :id="`${uid}-dots`" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.08)" />
      </pattern>
      <linearGradient :id="`${uid}-scan`" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--accent)" stop-opacity="0" />
        <stop offset="1" stop-color="var(--accent)" stop-opacity="0.5" />
      </linearGradient>
    </defs>
    <rect width="640" height="380" :fill="`url(#${uid}-dots)`" />

    <!-- MB POS: phone, bluetooth link, receipt printer -->
    <g v-if="kind === 'pos'">
      <g class="slide" style="--d: 0.6s">
        <path :d="zigPos" fill="var(--paper)" />
        <g fill="var(--ink)">
          <rect x="412" y="112" width="72" height="7" rx="3.5" />
          <template v-for="(y, i) in [134, 150, 166]" :key="y">
            <rect x="412" :y="y" :width="[58, 44, 62][i]" height="5" rx="2.5" opacity="0.7" />
            <rect x="490" :y="y" width="26" height="5" rx="2.5" />
          </template>
          <rect x="412" y="190" width="34" height="7" rx="3.5" />
          <rect x="484" y="187" width="32" height="13" rx="3" fill="var(--accent)" />
          <rect v-for="bar in bars" :key="bar.x" :x="412 + bar.x" y="214" :width="bar.w" height="30" />
        </g>
        <line x1="412" y1="178" x2="516" y2="178" stroke="var(--ink)" stroke-opacity="0.4" stroke-dasharray="4 4" />
      </g>

      <rect class="ln fp draw" pathLength="1" x="96" y="48" width="150" height="284" rx="26" />
      <rect x="152" y="62" width="38" height="5" rx="2.5" fill="rgb(var(--c-paper) / 0.25)" />
      <rect x="114" y="84" width="66" height="8" rx="4" fill="rgb(var(--c-paper) / 0.45)" />
      <g v-for="(y, i) in [108, 136, 164]" :key="y" class="pop" :style="`--d: ${0.5 + i * 0.12}s`">
        <rect x="114" :y="y" width="114" height="20" rx="7" fill="rgb(var(--c-paper) / 0.08)" />
        <rect x="122" :y="y + 6" :width="[44, 56, 36][i]" height="8" rx="4" fill="rgb(var(--c-paper) / 0.5)" />
        <rect x="200" :y="y + 6" width="22" height="8" rx="4" fill="rgb(var(--c-paper) / 0.5)" />
      </g>
      <line x1="114" y1="198" x2="228" y2="198" stroke="rgb(var(--c-paper) / 0.2)" />
      <rect x="114" y="212" width="40" height="8" rx="4" fill="rgb(var(--c-paper) / 0.45)" />
      <rect x="186" y="208" width="42" height="16" rx="5" fill="var(--paper)" />
      <rect class="pop" style="--d: 1s" x="114" y="250" width="114" height="42" rx="13" fill="var(--accent)" />
      <text class="pop" style="--d: 1s" x="171" y="276" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Pay</text>
      <g class="pop" style="--d: 1.2s">
        <circle cx="246" cy="62" r="19" fill="var(--accent)" />
        <path d="M237 62 l7 7 l12 -14" class="ln" style="stroke-width:3.5;stroke:#fff" />
      </g>

      <path class="ln ac draw dash" pathLength="1" d="M246 190 C 292 190, 312 252, 366 252" style="--d: 0.9s" />
      <g class="pop" style="--d: 1.3s">
        <circle cx="306" cy="221" r="18" fill="var(--panel-deep)" stroke="var(--accent)" stroke-width="2" />
        <path class="ln" d="M299 215 L313 227 L306 233 L306 209 L313 215 L299 227" style="stroke-width:2;stroke:#fff" />
      </g>

      <rect class="ln fp draw" pathLength="1" x="366" y="250" width="190" height="84" rx="18" />
      <rect x="388" y="264" width="146" height="10" rx="5" fill="#050505" />
      <circle cx="536" cy="306" r="4.5" fill="var(--accent)" />
      <circle cx="394" cy="308" r="5" fill="none" stroke="rgb(var(--c-paper) / 0.5)" stroke-width="2" />
      <rect x="410" y="304" width="44" height="8" rx="4" fill="rgb(var(--c-paper) / 0.2)" />
    </g>

    <!-- License plate recognition: car, scan frame, Telegram alert -->
    <g v-else-if="kind === 'plate'">
      <ellipse cx="250" cy="296" rx="170" ry="12" fill="rgba(0,0,0,0.35)" />
      <path class="ln fp draw" pathLength="1" d="M160 168 L186 104 Q192 92 206 92 L294 92 Q308 92 314 104 L340 168 Z" />
      <path d="M176 162 L196 108 L304 108 L324 162 Z" fill="rgb(var(--c-paper) / 0.06)" />
      <rect class="ln fp draw" pathLength="1" x="100" y="164" width="300" height="106" rx="30" />
      <rect x="118" y="264" width="56" height="22" rx="8" fill="#0d0d0d" />
      <rect x="326" y="264" width="56" height="22" rx="8" fill="#0d0d0d" />
      <g class="pop" style="--d: 0.5s">
        <rect class="ln" x="116" y="186" width="64" height="26" rx="13" style="fill:rgb(var(--c-paper) / 0.16)" />
        <rect class="ln" x="320" y="186" width="64" height="26" rx="13" style="fill:rgb(var(--c-paper) / 0.16)" />
        <rect class="ln" x="196" y="186" width="108" height="24" rx="8" style="fill:var(--ink)" />
        <path class="ln" d="M214 192 V204 M232 192 V204 M250 192 V204 M268 192 V204 M286 192 V204" style="stroke-width:1.5" />
      </g>
      <rect class="pop" style="--d: 0.7s" x="200" y="226" width="100" height="32" rx="5" fill="var(--paper)" />
      <text class="pop plate" style="--d: 0.7s" x="250" y="248" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">2A-1234</text>

      <path class="ln ac draw" pathLength="1" style="--d: 1s; stroke-width:3.5" d="M190 230 V216 H204 M296 216 H310 V230 M310 254 V268 H296 M204 268 H190 V254" />
      <g class="scan">
        <rect x="96" y="52" width="308" height="40" :fill="`url(#${uid}-scan)`" />
        <rect x="96" y="90" width="308" height="3" fill="var(--accent)" />
      </g>

      <path class="ln ac draw dash" pathLength="1" style="--d: 1.3s" d="M310 242 C 384 242, 396 152, 450 152" />
      <g class="pop" style="--d: 1.6s">
        <rect class="ln fp" x="450" y="112" width="162" height="80" rx="16" />
        <circle cx="482" cy="152" r="16" fill="var(--accent)" />
        <path d="M474 153 L492 144 L484 163 L480 156 Z" fill="var(--ink)" />
        <text x="508" y="146" font-size="12" font-weight="700" fill="var(--paper)">Plate detected</text>
        <text class="plate" x="508" y="166" font-size="11" fill="var(--accent)">2A-1234</text>
      </g>
    </g>

    <!-- Face recognition: landmark mesh and attendance list -->
    <g v-else-if="kind === 'face'">
      <ellipse class="ln fp draw" pathLength="1" cx="220" cy="192" rx="86" ry="108" />
      <g class="ln pop" style="--d: 0.5s; stroke-width:1.2" stroke-opacity="0.5">
        <path d="M200 244 L240 244 M196 172 L220 214 L244 172 M196 172 L200 244 M244 172 L240 244 M200 244 L220 296 L240 244 M140 200 L196 172 M300 200 L244 172 M150 252 L200 244 M290 252 L240 244 M150 252 L220 296 M290 252 L220 296 M140 200 L150 252 M300 200 L290 252 M180 148 L196 172 M260 148 L244 172" />
      </g>
      <g class="ln ac pop" style="--d: 0.9s; stroke-width:2.5" >
        <ellipse cx="196" cy="172" rx="15" ry="6" />
        <ellipse cx="244" cy="172" rx="15" ry="6" />
        <path d="M178 150 Q196 142 212 148 M228 148 Q244 142 262 150" />
        <path d="M220 178 L212 214 H228" />
        <path d="M200 244 Q220 258 240 244 Q220 238 200 244 Z" />
      </g>
      <g class="pop" style="--d: 1.1s" fill="var(--accent)">
        <circle v-for="p in facePoints" :key="p.join()" :cx="p[0]" :cy="p[1]" r="3.2" />
      </g>
      <path class="ln ac draw" pathLength="1" style="--d: 1.2s; stroke-width:3.5" d="M118 94 V68 H144 M296 68 H322 V94 M322 290 V316 H296 M144 316 H118 V290" />

      <path class="ln ac draw dash" pathLength="1" style="--d: 1.5s" d="M322 192 C 372 192, 372 118, 424 118" />
      <rect class="ln fp draw" pathLength="1" x="424" y="52" width="170" height="278" rx="26" />
      <rect x="486" y="66" width="46" height="5" rx="2.5" fill="rgb(var(--c-paper) / 0.25)" />
      <rect x="442" y="88" width="72" height="8" rx="4" fill="rgb(var(--c-paper) / 0.45)" />
      <g v-for="(y, i) in [124, 172, 220, 268]" :key="y" class="pop" :style="`--d: ${1.7 + i * 0.12}s`">
        <rect
          x="440"
          :y="y - 20"
          width="138"
          height="40"
          rx="11"
          :fill="i === 0 ? 'rgb(var(--c-main) / 0.16)' : 'rgb(var(--c-paper) / 0.06)'"
          :stroke="i === 0 ? 'var(--accent)' : 'none'"
          stroke-width="1.5"
        />
        <circle cx="462" :cy="y" r="11" fill="rgb(var(--c-paper) / 0.14)" />
        <rect x="482" :y="y - 4" :width="[54, 44, 60, 48][i]" height="8" rx="4" fill="rgb(var(--c-paper) / 0.55)" />
        <circle cx="558" :cy="y" r="9" :fill="i === 0 ? 'var(--accent)' : 'none'" :stroke="i === 0 ? 'var(--accent)' : 'rgb(var(--c-paper) / 0.3)'" stroke-width="1.5" />
        <path v-if="i === 0" :d="`M553 ${y} l4 4 l7 -8`" class="ln" style="stroke-width:2.5;stroke:var(--ink)" />
      </g>
    </g>

    <!-- Delivery Express: map, route, courier, order alert, OTP -->
    <g v-else-if="kind === 'delivery'">
      <g stroke="rgba(255,255,255,0.05)" stroke-width="14" fill="none">
        <path d="M80 0 V380 M200 0 V380 M320 0 V380 M440 0 V380 M560 0 V380" />
        <path d="M0 70 H640 M0 150 H640 M0 230 H640 M0 310 H640" />
      </g>
      <path class="ln" stroke-opacity="0.25" stroke-dasharray="6 8" d="M110 300 V230 Q110 214 126 214 H300 Q320 214 320 194 V110 Q320 94 336 94 H520" />
      <path class="ln ac draw" pathLength="1" style="--d: 0.3s; animation-duration: 1.6s; stroke-width:4.5" d="M110 300 V230 Q110 214 126 214 H300 Q320 214 320 194 V110 Q320 94 336 94 H520" />

      <g class="pop" style="--d: 0.4s">
        <circle cx="110" cy="300" r="22" fill="var(--panel)" stroke="var(--accent)" stroke-width="2.5" />
        <path class="ln" d="M99 297 L103 288 H117 L121 297 M101 297 V311 H119 V297 M108 311 V303 H112 V311" style="stroke-width:2;stroke:var(--paper)" />
      </g>
      <g class="pop" style="--d: 1.8s">
        <path d="M520 132 C 500 108, 496 98, 496 90 A24 24 0 1 1 544 90 C 544 98, 540 108, 520 132 Z" fill="var(--accent)" />
        <circle cx="520" cy="90" r="8" fill="var(--ink)" />
      </g>
      <g class="pop" style="--d: 1.2s">
        <circle class="pulse" cx="320" cy="152" r="26" fill="none" stroke="var(--accent)" stroke-opacity="0.5" stroke-width="2" />
        <circle cx="320" cy="152" r="18" fill="var(--paper)" stroke="var(--accent)" stroke-width="2.5" />
        <path d="M320 140 L330 164 L320 158 L310 164 Z" fill="var(--ink)" />
      </g>

      <g class="pop" style="--d: 0.9s">
        <rect class="ln fp" x="56" y="40" width="196" height="58" rx="16" />
        <circle cx="86" cy="69" r="15" fill="rgb(var(--c-main) / 0.18)" />
        <path class="ln ac" d="M80 74 H92 L90 70 V66 Q90 61 86 61 Q82 61 82 66 V70 Z M84 77 H88" style="stroke-width:2" />
        <text x="112" y="65" font-size="12" font-weight="700" fill="var(--paper)">New order</text>
        <text x="112" y="82" font-size="11" fill="rgb(var(--c-paper) / 0.55)">Driver assigned</text>
      </g>

      <g class="pop" style="--d: 1.5s">
        <rect class="ln fp" x="384" y="196" width="206" height="100" rx="18" />
        <text x="402" y="222" font-size="11" fill="rgb(var(--c-paper) / 0.55)">Enter code</text>
        <g v-for="i in 4" :key="i">
          <rect :x="402 + (i - 1) * 46" y="236" width="36" height="42" rx="9" fill="rgb(var(--c-paper) / 0.06)" :stroke="i === 4 ? 'var(--accent)' : 'rgb(var(--c-paper) / 0.35)'" stroke-width="1.8" />
          <circle v-if="i < 4" :cx="420 + (i - 1) * 46" cy="257" r="4.5" fill="var(--paper)" />
          <line v-else x1="438" y1="246" x2="438" y2="268" stroke="var(--accent)" stroke-width="2.5" class="blink" />
        </g>
      </g>
    </g>

    <!-- E-commerce shoe store: sneaker, checkout, card -->
    <g v-else-if="kind === 'shop'">
      <ellipse cx="304" cy="292" rx="214" ry="13" fill="rgba(0,0,0,0.38)" />
      <path class="ln draw" pathLength="1" d="M96 262 Q96 246 112 246 H470 Q514 246 522 266 Q524 278 510 280 H112 Q96 280 96 262 Z" style="fill:var(--paper)" />
      <path class="ln fp draw" pathLength="1" d="M114 246 L122 156 Q124 138 144 136 L196 134 Q212 134 222 148 Q242 176 282 182 Q330 188 384 206 Q452 226 500 240 Q514 246 510 246 Z" />
      <g class="pop" style="--d: 0.8s" stroke="var(--paper)" stroke-width="3.5" stroke-linecap="round">
        <line x1="218" y1="142" x2="236" y2="156" />
        <line x1="236" y1="152" x2="254" y2="166" />
        <line x1="254" y1="162" x2="272" y2="176" />
        <line x1="272" y1="172" x2="290" y2="184" />
      </g>
      <path class="ln ac draw" pathLength="1" style="--d: 0.9s; stroke-width:7" d="M150 218 Q250 186 340 214 Q404 234 474 242" />
      <path class="ln pop" style="--d: 1s" stroke-opacity="0.35" d="M112 262 H506" />

      <g class="pop" style="--d: 1.2s">
        <rect x="60" y="46" width="168" height="48" rx="24" fill="var(--accent)" />
        <text x="110" y="76" font-size="15" font-weight="700" fill="var(--ink)">Checkout</text>
        <circle cx="90" cy="70" r="12" fill="var(--ink)" />
        <path class="ln" d="M84 70 l4 4 l8 -9" style="stroke-width:2.5;stroke:var(--accent)" />
      </g>

      <g class="pop tag" style="--d: 1.4s">
        <path d="M470 54 H538 L560 76 L538 98 H470 Q462 98 462 90 V62 Q462 54 470 54 Z" fill="var(--paper)" />
        <circle cx="478" cy="76" r="5" fill="var(--panel-deep)" />
        <rect x="492" y="66" width="38" height="8" rx="4" fill="var(--ink)" />
        <rect x="492" y="80" width="24" height="6" rx="3" fill="var(--ink)" opacity="0.5" />
      </g>

      <g class="pop" style="--d: 1.6s">
        <rect class="ln fp" x="470" y="304" width="104" height="62" rx="11" />
        <rect x="470" y="318" width="104" height="12" fill="rgb(var(--c-paper) / 0.14)" />
        <rect x="484" y="341" width="22" height="16" rx="4" fill="var(--accent)" />
        <rect x="518" y="346" width="42" height="6" rx="3" fill="rgb(var(--c-paper) / 0.4)" />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'

export type ArtKind = 'pos' | 'plate' | 'face' | 'delivery' | 'shop'

const props = defineProps<{ kind: ArtKind }>()

// Several scenes can be on the page at once, so gradient/pattern ids must be unique.
const uid = `art${useId()}`

const labels: Record<ArtKind, string> = {
  pos: 'A phone sends a sale over Bluetooth to a receipt printer',
  plate: 'A camera frame locks onto a license plate and sends a Telegram alert',
  face: 'A face mapped with landmarks, matched into an attendance list',
  delivery: 'A map route from a shop to a customer with a courier and a delivery code',
  shop: 'A sneaker with a checkout button, price tag and payment card'
}
const label = computed(() => labels[props.kind])

// Receipt paper with a torn top edge, as it comes out of the printer.
const zigPos = 'M396 266 V98' + ' l8 -10 l8 10'.repeat(8) + ' V266 Z'

const bars = (() => {
  const widths = [2, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1]
  const out: { x: number; w: number }[] = []
  let x = 0
  for (let i = 0; x < 100; i++) {
    const w = widths[i % widths.length]
    if (i % 2 === 0) out.push({ x, w })
    x += w + 1
  }
  return out
})()

const facePoints = [
  [196, 172],
  [244, 172],
  [220, 214],
  [200, 244],
  [240, 244],
  [220, 296],
  [140, 200],
  [300, 200],
  [150, 252],
  [290, 252],
  [180, 148],
  [260, 148]
]
</script>

<style scoped>
.art {
  --accent: rgb(var(--c-main));
  --paper: rgb(var(--c-paper));
  --ink: rgb(var(--c-ink));
  --panel: rgb(var(--c-surface));
  --panel-deep: rgb(var(--c-surface-strong));
  display: block;
  width: 100%;
  height: 100%;
}

.ln {
  fill: none;
  stroke: rgb(var(--c-paper) / 0.55);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ln.ac {
  stroke: var(--accent);
}
.ln.fp {
  fill: var(--panel);
}
.plate {
  font-family: 'Martian Mono', ui-monospace, monospace;
}
.dash {
  stroke-dasharray: 5 7;
}

.draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 0.9s ease-out var(--d, 0s) forwards;
}
.draw.dash {
  /* A dashed link can't use the draw-on trick, so it fades in instead. */
  stroke-dasharray: 5 7;
  stroke-dashoffset: 0;
  opacity: 0;
  animation: fade 0.5s ease-out var(--d, 0s) forwards;
}
.pop {
  opacity: 0;
  animation: fade 0.45s ease-out var(--d, 0s) forwards;
}
.slide {
  animation: feed 1.1s steps(11, end) var(--d, 0s) both;
}
.scan {
  animation: scan 1.7s ease-in-out 0.3s both;
}
.pulse {
  transform-box: fill-box;
  transform-origin: center;
  animation: ring 1.6s ease-out 1.4s 2 both;
}
.blink {
  animation: blink 1s steps(2, jump-none) infinite;
}
.tag {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(8deg);
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fade {
  to {
    opacity: 1;
  }
}
@keyframes feed {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
@keyframes scan {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(176px);
    opacity: 0;
  }
}
@keyframes ring {
  from {
    transform: scale(0.8);
    opacity: 0.8;
  }
  to {
    transform: scale(1.6);
    opacity: 0;
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .draw,
  .pop,
  .slide,
  .scan,
  .pulse,
  .blink {
    animation: none;
  }
  .draw {
    stroke-dashoffset: 0;
  }
  .draw.dash,
  .pop {
    opacity: 1;
  }
  .scan,
  .pulse {
    display: none;
  }
}
</style>
