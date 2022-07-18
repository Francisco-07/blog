import styled from 'styled-components'
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import { device, colors } from '../styles/utils'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <>
      <Container>
        <Contact>
          <h2>FOLLOW</h2>
          <RedesContainer>
            <BsInstagram />
            <BsTwitter />
            <BsFacebook />
          </RedesContainer>
        </Contact>
        <Logo>
          <h1>JD</h1>
        </Logo>
        <FormContainer>
          <Form>
            <h2>SIGN UP IN THE NEWLETTER</h2>
            <input placeholder='NAME' />
            <input placeholder='EMAIL' />
            <button>SUBSCRIBE</button>
          </Form>
        </FormContainer>
      </Container>
      <Copyright />
    </>
  )
}

const Container = styled.footer`
  margin-top: 3rem;
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.tablet} {
    flex-direction: row-reverse;
    height: 100%;
  }
`
const RedesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  gap: 3rem;
  svg {
    font-size: 2.1rem;
    &:hover {
      color: ${colors.yellow};
    }
  }
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  h2 {
    text-align: center;
  }
  input {
    width: 100%;
    height: 30px;
    margin-bottom: 0.3rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${colors.black};
  }
  button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem;
    border: 1px solid ${colors.black};
    color: ${colors.black};
    background-color: ${colors.grey};
    &:hover {
      background-color: ${colors.darkBlue};
      color: white;
    }
  }
`
const Logo = styled.div`
  font-size: 2.3rem;
  text-align: center;
  flex: 1;
`
const Contact = styled.div`
  text-align: center;
  flex: 1;
`

export default Footer
