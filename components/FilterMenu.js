import styled from 'styled-components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CgArrowsExchangeV } from 'react-icons/cg'

const FilterMenu = ({ order, listView }) => {
  return (
    <Container>
      <Wrapper>
        <AiOutlineUnorderedList onClick={listView} />
        <CgArrowsExchangeV onClick={order} />

        <hr />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
`

const Wrapper = styled.div`
  width: 90%;

  svg {
    font-size: 3rem;
    margin-left: 1rem;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`

export default FilterMenu
