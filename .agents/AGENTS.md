# Project-Scoped Rules for theRuuts

## Nuxt 3 File-Based Routing & Nested Layouts
- When both a route file `<route>.vue` and a directory `<route>/` exist in `pages/`, Nuxt automatically registers `<route>.vue` as the parent route component for any sub-routes inside the `<route>/` directory.
- If `<route>.vue` does not contain `<NuxtPage />` in its template, child pages will not render at all.
- To make child pages (e.g., detail views) render independently, delete `<route>.vue` and place the original index layout inside `<route>/index.vue`.

## Async Component Unmounting & Null Safety
- When a component (like a modal or drawer) emits a `'close'` event that causes the parent component to immediately unmount it, any subsequent async execution inside that component (such as after `await nextTick()`) will execute after the component context is destroyed.
- Always synchronously capture values (e.g., `const targetPath = "/testimonials/" + props.post.slug`) *before* emitting close actions or awaiting lifecycle ticks to prevent throwing `TypeError: Cannot read properties of null`.
