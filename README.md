# minimalist

> NOTE: This is now the canonical repository for `minimalist`

A base collection of atoms and molecules written in https://sass-lang.com/

## Testing changes locally

Before you can start working with minimalist, you need to install [Hugo](https://gohugo.io/getting-started/installing/).

When making changes to minimalist, testing is done via the styleguide. To run the styleguide, built on Hugo, run the following command in your terminal:

```bash
yarn styleguide
```

This will do an initial build and startup Hugo. You can now browser the styleguide locally at [http://localhost:1313](http://localhost:1313). Hugo will run in watch mode so, if any files or assets changes, it will automatically rebuild and reload the current page in the browser.

When you make a change to minimalist, you need to trigger a new build of the minimalist source. In a separate terminal instance, run the following:

```bash
yarn build:styleguide:sass
```
