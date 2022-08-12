import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { colors, device } from '../styles/utils'

const Post = ({ title, subtitle, img, slug, publishedAt, alt }) => {
  return (
    <Container>
      <ImgContainer>
        <Image priority={true} layout='fill' src={img} alt={alt} />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </InfoContainer>
      <Published>{publishedAt}</Published>
      <Button>
        {' '}
        <Link href={`/posts/${slug}`}>
          <a>LEER MAS</a>
        </Link>
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: ${colors.grey};
  border-radius: 5px;
  position: relative;
`

const ImgContainer = styled.div`
  display: none;
  position: relative;
  @media ${device.tablet} {
    display: flex;
    width: 300px;
  }
  img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0, 88% 100%, 0% 100%);
  }
`
const InfoContainer = styled.div`
  padding: 40px 15px;
  width: 100%;
  h2 {
    margin: 0;
  }
`

const Button = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  opacity: 0.8;
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  &:hover {
    opacity: 1;
  }
  a {
    width: 100%;
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
