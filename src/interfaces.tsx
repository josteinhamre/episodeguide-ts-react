export interface IEpisode {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: {
    medium: string
    original: string
  }
  summary: string
  favorite: boolean
}

export interface IState {
  episodes: Array<IEpisode>
  filterFavorites: boolean
}

export interface IAction {
  type: string
  payload: IState
}

export interface IEpisodesProps {
  episodes: Array<IEpisode>
  toggleFavAction: (episode: IEpisode) => IAction
}

export interface IEpisodeProps {
  episode: IEpisode,
  toggleFavAction: (episode: IEpisode) => IAction,
  style: { top: string, left: string }
}