export function usePosts () {
  return Object.values(import.meta.globEager('./pages/posts/**/*.{md,mdx}'))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
