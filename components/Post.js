import styled from 'styled-components'
import { colors, device } from '../styles/utils'
import Link from 'next/link'
import Image from 'next/image'

const Post = ({ title, subtitle, img, slug }) => {
  return (
    <Container>
      <ImgContainer>
        <Image width={300} height={300} objectFit='cover' src={img} />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </InfoContainer>
      <Button>
        <Link href={`/blogs/${slug}`}>
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
  @media ${device.tablet} {
    align-self: stretch;
  }
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
  padding: 5px;
  margin-bottom: 2rem;
`

const Button = styled.div`
  background-color: ${colors.yellow};
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
    background-color: ${colors.yellow};
    opacity: 1;
  }
`

export default Post
