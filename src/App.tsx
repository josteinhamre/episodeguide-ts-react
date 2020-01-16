import React from 'react'
import { Store } from './Store'
import { IEpisode, IAction, IState } from './interfaces'
import { StyledHeader, StyleToggleSwitch } from './Style'
const EpisodeList = React.lazy(() => import('./EpisodeList'))

function App(): JSX.Element {
  // sets the context
  const { state, dispatch } = React.useContext(Store)

  // Triggers the Fetch data function if it has not allready been done.
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  // Grabs all episode data of an API
  const fetchDataAction = async () => {
    const newState: IState = { ...state }
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=brooklyn-nine-nine&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    // Adds a favorite field to every episode.
    const episodesFav = dataJSON._embedded.episodes.map((episode: IEpisode) => {
      episode.favorite = false
      return episode
    })
    newState.episodes = episodesFav
    return dispatch({
      type: 'FETCH_DATA',
      payload: newState
    })
  }

  // Action that toggels if a episode is a favorite or not in state.
  const toggleFavAction = (episode: IEpisode): IAction => {
    const newState: IState = { ...state }
    newState.episodes = state.episodes.map((uEpisode: IEpisode) => {
      if (uEpisode.id === episode.id) {
        uEpisode.favorite = !episode.favorite
      }
      return uEpisode
    })
    return dispatch({
      type: 'TOGGLE_FAV',
      payload: newState
    })
  }

  // Default props for showing all episodes.
  const props = {
    episodes: state.episodes,
    toggleFavAction,
  }

  // Props with only favorites.
  if (state.filterFavorites) {
    props.episodes = state.episodes.filter((episode: IEpisode) => episode.favorite)
  }

  // Action that toggles the state for showing Favorites or all episodes
  const toggleFilter = () => {
    const newState: IState = { ...state }
    newState.filterFavorites = !state.filterFavorites
    return dispatch({
      type: 'TOGGLE_DISPLAY',
      payload: newState
    })
  }

  return (
    <>
      <StyledHeader>
        <h1>BROOKLYN<br /> NINE-NINE</h1>
        <div className="heartcontainer">
          <span className="heart" role="img" aria-label="heart">❤️</span>
          <span className="count">{state.episodes.filter((ep: IEpisode) => ep.favorite).length}</span>
        </div>
        <StyleToggleSwitch>
          <input type="checkbox" id="switch" checked={state.filterFavorites} onChange={() => {
            window.scroll({ top: 0 })
            return toggleFilter()
          }} />
          <label htmlFor="switch">
            <span className="toggle-all">All</span>
            <span className="toggle-favorites">Favorites</span>
          </label>
        </StyleToggleSwitch>
      </StyledHeader>
      <React.Suspense fallback={<div>Loading...</div>}>
        <EpisodeList {...props} />
      </React.Suspense>
    </>
  )
}

export default App;