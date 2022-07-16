import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '../styles/utils'

const Post = ({ title, subtitle, img, slug, publishedAt }) => {
  return (
    <Container>
      <ImgContainer>
        <img src={img} />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Published>{publishedAt}</Published>
        <Button>
          {' '}
          <Link href={`/posts/${slug}`}>
            <a>LEER MAS</a>
          </Link>
        </Button>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 250px;
  background-color: ${colors.grey};
  border-radius: 5px;
  margin-bottom: 1rem;
  position: relative;
`

const ImgContainer = styled.div`
  flex: 0.35;
  img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0, 88% 100%, 0% 100%);
  }
`
const InfoContainer = styled.div`
  flex: 0.65;
  margin-left: 2rem;
  margin-top: 2.2rem;
  h2 {
    margin: 0;
  }
`

const Button = styled.div`
  background-color: ${colors.yellow};
  color: ${colors.white};
  opacity: 0.8;
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  &:hover {
    opacity: 1;
  }
`

const Published = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`

export default Post
