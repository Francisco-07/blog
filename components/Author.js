import styled from 'styled-components'
import { device } from '../styles/utils'

const Author = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Img
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arnold-1648032751.jpg'
              alt='author'
            />
          </div>
          <InfoContainer>
            <h2>Hi, im John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              orci velit, lacinia in orci ac, euismod blandit libero. Praesent
              nisl velit, sagittis vitae mollis eget, condimentum id ante.
            </p>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`
const InfoContainer = styled.div`
  width: 90%;
  margin-left: 1.3rem;
  @media ${device.tablet} {
    width: 50%;
  }
`

export default Author
