import React from 'react'
import { IEpisodeProps } from './interfaces'
import { StyledEpisode } from './Style'





function Episode({ episode, toggleFavAction, style }: IEpisodeProps): JSX.Element {
  return (
    <StyledEpisode style={style}>
      <img src={(episode.image && episode.image.medium) || "https://res.cloudinary.com/lightglance/image/upload/c_scale,w_250/v1579178436/brooklyn99-s6-lrg_kwsdqj.jpg"} alt={episode.name} />
      <section>
        <div>
          <h4>{episode.name}</h4>
          Season: {episode.season}<br />
          Episode: {episode.number}
        </div>
        <button type="button" onClick={() => toggleFavAction(episode)}>{episode.favorite ? '❤️' : '🖤'}</button>

      </section>
    </StyledEpisode>
  )
}

export default Episode