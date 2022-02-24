import { useEffect } from 'react'
import StarshipsForm from './StarshipsForm'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStarships } from '../../actions/actions'

// Hooks Example

export default function Starships() {
  const dispatch = useDispatch()
  const starships = useSelector(state => state.starships)
  const planets = useSelector(state => state.planets)
  const people = useSelector(state => state.people)

  useEffect(() => {
    // dispatch => fetchStarships
    dispatch(fetchStarships())
  }, [])

  return (
    <div>
      <h1>Starships</h1>
      <StarshipsForm />
      <ul>
        {starships.map(s => <li key={s.id}>{s.name}</li>)}
      </ul>
    </div>
  )
}
