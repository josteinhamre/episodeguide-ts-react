import React from 'react'
import { IEpisode, IEpisodesProps } from './interfaces'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledEpisodeGrid } from './Style'
import Episode from './Episode'

function EpisodeList(props: IEpisodesProps): JSX.Element {
  const height = 250
  const width = 250
  const spacing = 50
  const cols = Math.floor(window.innerWidth / (width + spacing))
  const frameWidth = width * cols + spacing * (cols - 1)
  const frameMargin = (window.innerWidth - frameWidth) / 2
  const frameHeight = Math.ceil(props.episodes.length / cols) * height
  const { toggleFavAction } = props

  return (
    <StyledEpisodeGrid>
      <TransitionGroup className="transitionGroup" style={{ margin: `1rem ${frameMargin}px`, width: frameWidth, height: frameHeight }}>
        {props.episodes.map((episode: IEpisode, i) => {
          const rowIndex = i % cols
          const episodeProps = {
            episode,
            toggleFavAction,
            style: {
              left: `${(width * rowIndex + spacing * rowIndex) % frameWidth}px`,
              top: `${Math.floor(i / cols) * height}px`,
            }
          }
          return (
            <CSSTransition
              key={episode.id}
              in={true}
              out={true}
              classNames="episodes"
              timeout={{ enter: 700, exit: 700 }}
            >
              <Episode {...episodeProps} />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </StyledEpisodeGrid>
  )
}

export default EpisodeList;