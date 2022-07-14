import useSWRInfinite from 'swr/infinite'
import PostList from '../components/PostList'

const fetcher = (url) => fetch(url).then((res) => res.json())
const PAGE_SIZE = 1

export const PaginatedPosts = ({ posts }) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/api/posts?offset=${index * 2}}`,
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
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size
  console.log(data)
  return (
    <>
      {!fetchedData ? (
        <div>loading</div>
      ) : (
        <PostList posts={fetchedData || posts} />
      )}
      <button onClick={() => setSize(size + 1)} disabled={isReachingEnd}>
        {' '}
        {isLoadingMore
          ? 'loading...'
          : isReachingEnd
          ? 'no more issues'
          : 'load more'}
      </button>
    </>
  )
}
