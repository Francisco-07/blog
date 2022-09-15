import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '../styles/utils'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Author>
          <Link href='/'>
            <a>
              <h1>SIMPLE BLOG</h1>
            </a>
          </Link>
        </Author>
      </Wrapper>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
`

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const Author = styled.div`
  h2 {
    margin: 0;
    cursor: pointer;
  }
`

export default Navbar
