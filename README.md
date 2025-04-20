### 1. `useParams` hook to read route's dynamic params in URL

[Read more](https://nextjs.org/docs/app/api-reference/functions/use-params)

```
next-js/
└──app/
   └──news/
      ├──[slug]/
      |  └──page.tsx
      └──page.tsx
```

### 2. `notFound` method fallback

```
next-js/
└──app/
   └──news/
      ├──[slug]/
      |  └──page.tsx
      └──page.tsx
```

### 3. `Parallel Routes` and Handle `Route-related` error

[Parallel routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
[Catch-all](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)

```
next-js/
└──app/
   └──archive/
      ├──@archive/
      |  └──[[...filter]]/
      |     └──error.tsx
      |     └──page.tsx
      ├──@latest/
      |     └──default.tsx
      └──layout.tsx
```
