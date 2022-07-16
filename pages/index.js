import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import FilterMenu from '../components/FilterMenu'
import { getPaginatedPosts } from '../lib/api'
import { PaginatedPosts } from '../actions/PaginatedPosts'
import { useState } from 'react'

export default function Home({ posts }) {
  const [filter, setFilter] = useState(false)
  const [listFilter, setListFilter] = useState(false)

  return (
    <div>
      <Navbar />
      <Author />
      <FilterMenu
        order={() => setFilter(!filter)}
        listView={() => setListFilter(!listFilter)}
      />
      <PaginatedPosts posts={posts} filter={filter} listFilter={listFilter} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPaginatedPosts({ offset: 0, date: 'desc' })
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
