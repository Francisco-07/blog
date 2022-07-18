import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const postFields = `
  title,
  subtitle,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
  'alt': mainImage.alt,
  publishedAt,
  body,
`

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export async function getAllPosts() {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {${postFields}}`
  )
  return results
}

export async function getPaginatedPosts({ offset, date }) {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt ${date}) {${postFields}}[${offset}...${
      offset + 6
    }]`
  )
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
