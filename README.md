# Docsiter

Quick starter template for creating a [VitePress](https://vitepress.dev) site.

## Setup

1. Have [Node](https://nodejs.org/en/download/package-manager) installed (or something compatible).
2. Clone this here repo.
3. Run

```
$ npm ci
```

## Command Line

To generate the docsite into `vite-docs` folder, run

```
$ npm run doc
```

To preview the docsite, run

```
$ npm run read
```

Then visit http://localhost:5173/

## Building Stuff

Visit the [Markdown Guide](https://www.markdownguide.org/) if you're new to Markdown. Visit the [Vitepress Guide](https://vitepress.dev/guide/what-is-vitepress) to learn how to do far fancier things than this template sets up.

- `src/.vitepress/config.ts` is primary config.
  - [Primary config options](https://vitepress.dev/reference/default-theme-config).
- `src/.vitepress/theme/custom.css` lets you change colours.
  - See [this file](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css) for what vars you can tweak.
  - When in doubt, inspect an element in your preview and you usually see the var it is using. These typically chain to other vars.
- `docs/` hosts all source markdown content.
- `docs/index.md` is the hero page definition.
  - [Hero config options](https://vitepress.dev/reference/frontmatter-config).
- `docs/public` hosts the assets, like images. Image paths can reference this without the `public` on the path.