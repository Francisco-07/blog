import { getPaginatedPosts } from '../../lib/api'

export default async function getPosts(req, res) {
  const offset = parseInt(req.query.offset || 0, 10)
  const data = await getPaginatedPosts({ offset })
  res.status(200).json(data)
}
