import Post from './Post'
import { data } from '../data'
import { device } from '../styles/utils'
import styled from 'styled-components'

const PostList = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.slug}
          title={post.title}
          subtitle={post.subtitle}
          img={post.mainImage}
          slug={post.slug}
        />
      ))}
    </Container>
  )
}

const Container = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`

export default PostList
