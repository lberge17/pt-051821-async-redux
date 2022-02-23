import { connect } from 'react-redux';
import { destroyPerson } from '../../actions/actions'

function Person({id, name, destroyPerson}) {

  return (
    <>
      <li>{name}</li>
      <button onClick={() => destroyPerson(id)}>X</button>
    </>
  )
}

export default connect(null, { destroyPerson })(Person)
