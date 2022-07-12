import client from './sanity'

const postFields = `
  title,
  subtitle,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
  publishedAt,
  body
`

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]{${postFields}}`)
  return results
}

export async function getPostBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "post" && slug.current == $slug] {
      ${postFields}
    }`,
      { slug }
    )
    .then((res) => res?.[0])

  return result
}
