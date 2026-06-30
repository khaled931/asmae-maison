# Content Model

The MVP uses a structured file-based content model.

## Main file

```txt
src/content/site.ts
```

## Updating navigation

Edit the `nav` array inside each locale entry:

```ts
nav: [
  { href: "/services", label: "Services" }
]
```

## Updating programmes

Edit the `programmes.items` array for each language.

Each programme has:

- `slug`
- `title`
- `audience`
- `description`
- `outcomes`

## Updating the journal

Edit `journalPosts` in the same file.

Each post has:

- `slug`
- `date`
- `category`
- `title`
- `excerpt`
- `readingTime`
- `body`

The route is generated automatically at:

```txt
/[locale]/letters/[slug]
```

## Future CMS path

When Maison Asmae is ready for a CMS, the current structure can map cleanly into Sanity, Contentful, Payload, or Notion-backed publishing.
