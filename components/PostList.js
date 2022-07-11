import Post from './Post'
import { data } from '../data'
import { device } from '../styles/utils'

import styled from 'styled-components'

const PostList = () => {
  return (
    <Container>
      {data.map((d) => (
        <Post key={d.id} title={d.title} info={d.info} img={d.img} />
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
