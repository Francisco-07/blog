import Layout from '../components/Layout'
import { getAllBlogs } from '../lib/api'

export default function Home({ blogs }) {
  return (
    <>
      <Layout blogs={blogs} />
    </>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs,
    },
  }
}
