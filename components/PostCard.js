import styled from 'styled-components'
import { colors, device } from '../styles/utils'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ title, subtitle, img, slug, publishedAt, alt }) => {
  return (
    <Container>
      <ImgContainer>
        <Image
          priority
          width={300}
          height={300}
          objectFit='cover'
          src={img}
          alt={alt}
        />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </InfoContainer>
      <Published>{publishedAt}</Published>
      <Button>
        <Link href={`/posts/${slug}`}>
          <a>LEER MAS</a>
        </Link>
      </Button>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey};
  border-radius: 5px;
  position: relative;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.55);
  @media ${device.tablet} {
    align-self: stretch;
  }
`
const Published = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`

const InfoContainer = styled.div`
  padding: 0.3rem;
  margin-bottom: 2rem;
`

const Button = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  opacity: 0.8;
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  bottom: 0;
  &:hover {
    opacity: 1;
  }
`

export default PostCard
