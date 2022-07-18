import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '../lib/api'
import styled from 'styled-components'

const serializers = {
  types: {
    image: ({ node: { asset, alt } }) => {
      return (
        <Container>
          <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} />
          <div>{alt}</div>
        </Container>
      )
    },
  },
}

const PostContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
)

const Container = styled.div`
  img {
    border-radius: 3px;
  }
`

export default PostContent
