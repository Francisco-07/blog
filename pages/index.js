import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import { getPaginatedPosts } from '../lib/api'
import { PaginatedPosts } from '../actions/PaginatedPosts'

export default function Home({ posts }) {
  return (
    <div>
      <Navbar />
      <Author />
      <PaginatedPosts posts={posts} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPaginatedPosts({ offset: 0 })
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
