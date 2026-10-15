# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Heng Ratanak Visoth. Vue 3 + Vite + TypeScript, styled with Tailwind CSS (and the Flowbite plugin). There is no backend and no API calls. All content is static.

## Commands

The README uses pnpm. The repo also has `package-lock.json` and `bun.lock`, so use pnpm to avoid lockfile drift.

```bash
pnpm install
pnpm run dev          # Vite dev server on port 5001
pnpm run build        # production build to dist/
pnpm run preview      # serve the production build
pnpm run type-check   # vue-tsc --noEmit -p tsconfig.app.json
pnpm run test:unit    # vitest (watch mode)
pnpm run format       # prettier --write src/
```

Run one test file once, without watch mode:

```bash
pnpm exec vitest run src/components/__tests__/NavigationBar.spec.ts
```

`pnpm run lint` is currently broken. ESLint 9 is installed, but the config is the legacy `.eslintrc.cjs`, and the script passes `--ignore-path`, which ESLint 9 rejects. Fixing it means migrating to `eslint.config.js` or setting `ESLINT_USE_FLAT_CONFIG=false` and dropping `--ignore-path`.

Prettier style: no semicolons, single quotes, 2-space indent, 100-column width, no trailing commas. Some existing files (for example `src/main.ts`, `src/router/index.ts`) do not follow this yet.

## Architecture

**Page structure.** `App.vue` renders `DynamicBackdrop` (a fixed background layer) plus `<RouterView />`. The router has one route, `/`, and it uses hash history (`createWebHashHistory`). `views/HomePage.vue` stacks the section components in order: `LandingPage`, `AboutSection`, `ProjectSection`, `ExperienceSection`, `SkillSection`, `FooterSection`. `ContactSection` is imported in `HomePage` but not rendered. `NavigationBar` is imported in `App.vue` but commented out of the template. It still has a unit test.

**Section anchors.** The nav uses section element ids (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`). Each section component sets its own `id`. `NavigationBar` hardcodes this list and scrolls with GSAP `ScrollToPlugin`. If you rename or add a section, update the id in the section component and the `navItems` array in `NavigationBar.vue`. `FooterSection` carries `id="contact"`, so `#contact` has a target. `ContactSection` is not rendered.

**Content lives in `src/data/`, not in components.** Projects (`project.ts`), work history (`careerHistory.ts`), skills (`skill.ts`), social links (`socail.ts`, spelled this way) and tech icons (`icon.ts`) are plain typed arrays and objects. Their types are in `src/types/*.dto.ts`. To change portfolio content, edit these files. Project and skill images are in `public/projects/<NN>/` and `public/assets/skills/`. Data files reference them by absolute URL path such as `/projects/01/poster.jpg`.

**i18n is scaffolded but not wired up.**
- `src/store/store.ts` is a small `reactive()` store, not Pinia or Vuex. It holds `language` (`en | kh | jp | cn`, saved in `localStorage` under `preferredLanguage`, and synced to `<html lang>`) and `activeSection`.
- `src/i18n/translations.ts` defines `AppTranslations` and an `en` object. `kh`, `jp` and `cn` all reuse `en` as a placeholder.
- `useT()` in `src/i18n/useI18n.ts` resolves dotted paths such as `t('nav.home')`.
- No component calls `useT()` yet. Section text is hardcoded in the `.vue` files and `src/data/`. `LanguageSelector` only changes the stored language, and it is not rendered anywhere (the cleaned-up footer dropped it).

**Animation libraries.** Several are installed:
- AOS drives the scroll animations. It is initialised in `main.ts` with `once: false`, and components use `data-aos` attributes. This is the one in active use.
- GSAP is used for scroll-to in `NavigationBar`.
- Swiper is installed but no longer used. The projects section (`ProjectShowcase.vue`) is scroll-driven: from `xl` up, a sticky stage shows the active project's scene (`visuals/ProjectArt.vue`, picked by the `art` field in `src/data/project.ts`) while the text scrolls past. Below `xl`, every project is stacked in one column. The sticky stage only works because `HomePage.vue` uses `overflow-x-clip`, not `overflow-hidden`, on its wrapper.
- `@vueuse/motion` is registered as a plugin in `main.ts`, but no component uses `v-motion`.
- `src/config/motion.ts` and `src/config/motions/` are not imported anywhere (dead code).
- `initFlowbite()` is called in `App.vue` on mount.

**Icons and global scripts.** `src/config/fontawesome.ts` registers all FontAwesome solid, regular and brand icons globally as `<font-awesome-icon>`. `@iconify/vue` (`<Icon icon="ph:...">`) is also used. `index.html` loads several scripts and styles from CDNs (Flowbite CSS, a FontAwesome kit, `typewriter-effect`, Google Analytics). The app depends on those loading.

**Styling.** The theme palette (near-black base, orange `--c-main`, warm paper and ink for the receipt) lives as RGB channel variables in `:root` at the top of `src/assets/main.css`. Tailwind tokens (`main`, `surface`, `background`, `softwhite`, `text-muted`, and so on) read those variables in `tailwind.config.js`, and the receipt and project scenes read them too. Change a color in `:root` instead of hardcoding hex values. Tailwind config also defines the theme tokens listed above. It also defines a custom `lg: 1440px` breakpoint and a `large: 1540px` breakpoint, so `lg:` is much wider than Tailwind's default. Shared component classes (`.glass-panel`, `.glass-card`, `.glass-chip`, `.breathing-effect`) are in `src/assets/main.css`. `components/HOC/HOCPadding.vue` is the shared max-width and padding wrapper used by sections.

**TypeScript setup.** The `@` alias points to `src/` (set in `vite.config.ts`, `tsconfig.json` and `tsconfig.app.json`). `type-check` uses `tsconfig.app.json`, which excludes `__tests__`. `src/types/` also holds ambient declarations for `aos` and `vue-writer`. `.gitignore` excludes compiled `src/**/*.js` output, so keep `src` as `.ts` and `.vue` only.

**Tests.** Vitest runs with a jsdom environment (`vitest.config.ts` extends `vite.config.ts`). The only test is `src/components/__tests__/NavigationBar.spec.ts`. It mocks `gsap`, `matchMedia` and `requestAnimationFrame`, and builds fake section elements with a stubbed `getBoundingClientRect`.
