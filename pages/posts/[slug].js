import { getPostBySlug, getAllPosts } from '../../lib/api'
import styled from 'styled-components'
import PostContent from '../../components/PostContent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { device } from '../../styles/utils'

const PostDetail = ({ post }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <ImgContainer>
            <Image layout='fill' src={post.mainImage} alt={post.alt} />
          </ImgContainer>
          {post.body && <PostContent content={post.body} />}
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
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

const ImgContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  img {
    border-radius: 3px;
    object-fit: cover;
    object-position: center;
  }
  @media ${device.tablet} {
    width: 75%;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Wrapper = styled.div`
  width: 80%;
  @media ${device.tablet} {
    width: 75%;
  }
`
const Img = styled.img``

export default PostDetail
