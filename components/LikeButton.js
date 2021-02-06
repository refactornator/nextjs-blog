import { useState } from 'react'
import useSWR from 'swr'
import Fab from '@material-ui/core/Fab'
import Badge from '@material-ui/core/Badge'
import FavoriteIcon from '@material-ui/icons/Favorite'

const endpoint = '/api/likes'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  const { data, error, mutate } = useSWR(endpoint)

  const incrementLike = async () => {
    const originalCount = data.count || 0

    setLiked(true)
    data.count = originalCount + 1

    await fetch(endpoint, {
      body: JSON.stringify({}),
      method: 'POST',
    }).then((response) => {
      if (response.status !== 200) {
        setLiked(false)
        mutate({ count: originalCount })
      }
    })
  }

  if (error) return <div>Error</div>
  if (!data) return <div>Loading...</div>
  return (
    <Fab aria-label="like" onClick={incrementLike}>
      <Badge badgeContent={data.count} color="primary">
        <FavoriteIcon color={liked ? 'secondary' : 'action'} />
      </Badge>
    </Fab>
  )
}

export default LikeButton
