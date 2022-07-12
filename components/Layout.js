import Navbar from './Navbar'
import Author from './Author'
import PostList from './PostList'
import Footer from './Footer'

const Layout = ({ posts }) => {
  return (
    <>
      <Navbar />
      <Author />
      <PostList posts={posts} />
      <Footer />
    </>
  )
}

export default Layout
