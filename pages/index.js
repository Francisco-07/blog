import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
      <Layout posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
