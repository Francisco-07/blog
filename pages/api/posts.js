import { getPaginatedPosts } from '../../lib/api'

export default async function getPosts(req, res) {
  const offset = parseInt(req.query.offset || 0, 10)
  const date = req.query.date || 'desc'
  const data = await getPaginatedPosts({ offset, date })
  res.status(200).json(data)
}
