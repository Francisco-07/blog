import useSWRInfinite from 'swr/infinite'
import PostList from '../components/PostList'
import { colors } from '../styles/utils'
import styled from 'styled-components'

export const PaginatedPosts = ({ posts, filter, listFilter }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `/api/posts?offset=${index * 6}}&date=${filter ? 'asc' : 'desc'}`,
    fetcher,
    {
      fallbackData: posts,
    }
  )
  const fetchedData = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 1)

  return (
    <>
      {!fetchedData ? (
        <div>loading</div>
      ) : (
        <PostList posts={fetchedData || posts} listFilter={listFilter} />
      )}
      <BtnContainer>
        <Btn onClick={() => setSize(size + 1)} disabled={isReachingEnd}>
          {' '}
          {isLoadingMore
            ? '...'
            : isReachingEnd
            ? 'NO HAY MAS POSTS'
            : 'MAS POSTS'}
        </Btn>
      </BtnContainer>
    </>
  )
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const Btn = styled.button`
  border: none;
  background-color: ${colors.white};
  color: ${colors.darkGrey};
  border: 1px solid ${colors.darkGrey};
  padding: 0.7rem;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  &:hover:enabled {
    background-color: ${colors.darkGrey};
    color: ${colors.white};
  }
`
