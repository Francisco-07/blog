import PostCard from './PostCard'
import Post from './Post'
import { device } from '../styles/utils'
import styled from 'styled-components'

const PostList = ({ posts, listFilter }) => {
  return (
    <Container>
      <Wrapper>
        {listFilter
          ? posts.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                subtitle={post.subtitle}
                img={post.mainImage}
                slug={post.slug}
                publishedAt={post.publishedAt}
                alt={post.alt}
              />
            ))
          : posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                subtitle={post.subtitle}
                img={post.mainImage}
                slug={post.slug}
                publishedAt={post.publishedAt}
                alt={post.alt}
              />
            ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    width: 90%;
  }
`

export default PostList
