import { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import Badge from '@material-ui/core/Badge'
import FavoriteIcon from '@material-ui/icons/Favorite'

const endpoint = '/api/likes'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(null)

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then(({ count }) => {
        setLikeCount(count)
        console.log(count)
      })
  }, [])

  const incrementLike = () => {
    setLiked(true)
    setLikeCount(likeCount + 1)
    fetch(endpoint, {
      body: JSON.stringify({}),
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch(() => {
        setLiked(false)
        setLikeCount(likeCount)
      })
  }

  return (
    <Fab aria-label="like" onClick={incrementLike}>
      <Badge badgeContent={likeCount} color="primary">
        <FavoriteIcon color={liked ? 'secondary' : 'action'} />
      </Badge>
    </Fab>
  )
}

export default LikeButton
