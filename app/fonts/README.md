# Google Sans

`app/fonts.ts` loads these through `next/font/local`. The `.woff2` files are the ones
actually shipped; the `.ttf` files are the untouched originals, kept only as the source
for regenerating the subset.

## What's wired up

| File                        | Weight | Tailwind        |
| --------------------------- | ------ | --------------- |
| `GoogleSans-Regular.woff2`  | 400    | `font-normal`   |
| `GoogleSans-Medium.woff2`   | 500    | `font-medium`   |
| `GoogleSans-SemiBold.woff2` | 600    | `font-semibold` |
| `GoogleSans-Bold.woff2`     | 700    | `font-bold`     |

## Why the .woff2 files exist

The source `.ttf` files carry 7,525 glyphs (Latin, Greek, Cyrillic, and more) at 2.0 MB
each. They were subset to the standard Google Fonts **latin + latin-ext** ranges and
converted to woff2, which takes each cut from 2.00 MB to roughly 28 KB — about 112 KB
for all four weights.

**This drops Greek and Cyrillic.** If the app ever needs to render either, regenerate
the subset with those ranges added, or point `app/fonts.ts` straight at the `.ttf`
files (`next/font/local` accepts them) and take the size hit.

Regenerate with [fonttools](https://github.com/fonttools/fonttools) — `pip install
"fonttools[woff]" brotli`, then per weight:

```
pyftsubset GoogleSans-Regular.ttf \
  --output-file=GoogleSans-Regular.woff2 --flavor=woff2 \
  --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD,U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF" \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,rlig,frac,ordn,tnum,onum,lnum,pnum,sups,subs,zero,ss01,ss02,ss03,cv01" \
  --name-IDs='*' --name-legacy --notdef-outline --no-hinting --desubroutinize
```

## Before adding weights or italics

`next/font/local` emits a `<link rel="preload">` for **every** entry in the `src`
array — there is no per-file opt-out, only the one global `preload` flag. Each entry
you add is another blocking request on first paint, so only add cuts the UI genuinely
uses.

Italics are deliberately not wired up; nothing in the app uses them today, and browsers
synthesize an oblique acceptably. The real italic files are here if that changes:

```ts
{ path: "./fonts/GoogleSans-Italic.woff2", weight: "400", style: "italic" },
```

They'd need converting first — the script above works unchanged, just swap the filename.

## The two optical sizes

The originals ship in two optical-size families: `GoogleSans-*` (default, tuned for
body/UI text) and `GoogleSans_17pt-*` (tuned for larger display sizes). The default set
is what's wired up. The 17pt cuts are worth trying for large display headings — load
them as a second `localFont` call under its own variable, e.g. `--font-display`, and
map `--font-heading` to it in `app/globals.css`.

## Licensing

Google Sans is Google's proprietary typeface and is not licensed for general
third-party use. Confirm you have the rights before deploying this publicly.
