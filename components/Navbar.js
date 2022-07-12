import styled from 'styled-components'
import { colors } from '../styles/utils'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Author>
          <h2>JD</h2>
        </Author>
        <Items>
          <a>
            <h3>HOME</h3>
          </a>
        </Items>
      </Wrapper>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${colors.yellow};
`

const Wrapper = styled.div`
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

const Items = styled.div`
  a {
    cursor: pointer;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${colors.black};
    }
  }
`

export default Navbar
