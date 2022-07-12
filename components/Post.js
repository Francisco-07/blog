import styled from 'styled-components'
import { colors } from '../styles/utils'

const Post = ({ title, subtitle, img }) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Button>Leer Mas</Button>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey};
  border-radius: 5px;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
const InfoContainer = styled.div`
  padding: 5px;
  margin-bottom: 0.6rem;
`

const Button = styled.div`
  background-color: ${colors.yellow};
  width: 120px;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
`

export default Post
