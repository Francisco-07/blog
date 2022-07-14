import { getPostBySlug, getAllPosts } from '../../lib/api'
import styled from 'styled-components'
import PostContent from '../../components/PostContent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const BlogDetail = ({ blog }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <h1>{blog.title}</h1>
          <h2>{blog.subtitle}</h2>
          <Img src={blog.mainImage} />
          {blog.body && <PostContent content={blog.body} />}
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const blog = await getPostBySlug(params.slug)
  return {
    props: { blog },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts?.map((b) => ({ params: { slug: b.slug } }))
  return {
    paths,
    fallback: false,
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Wrapper = styled.div`
  width: 80%;
`
const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 3px;
`

export default BlogDetail
