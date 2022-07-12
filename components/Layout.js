import Navbar from './Navbar'
import Author from './Author'
import PostList from './PostList'
import Footer from './Footer'

const Layout = ({ blogs }) => {
  return (
    <>
      <Navbar />
      <Author />
      <PostList blogs={blogs} />
      <Footer />
    </>
  )
}

export default Layout
