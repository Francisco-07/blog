import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { device, colors } from '../styles/utils'

const Copyright = () => {
  return (
    <Author id='Contacto'>
      Desarrollo
      <a
        target='_blank'
        rel='noreferrer'
        href='https://github.com/Francisco-07'
      >
        {' '}
        <MdKeyboardArrowRight /> Francisco Garciarena
      </a>
    </Author>
  )
}

const Author = styled.p`
  margin: 0;
  transition: all 1s;
  padding: 2rem;
  height: 100%;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  & a {
    display: flex;
    align-items: center;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    & svg {
      cursor: pointer;
      margin-left: 2px;
      margin-right: 2px;
      font-size: 1.8rem;
    }
  }
  @media ${device.laptop} {
    text-align: center;
    margin-top: 0;
  }
`
export default Copyright
