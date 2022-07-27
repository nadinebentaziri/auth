import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import { Link} from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>
     <section>
     <div>
        <Link to='/vendeur'>Je suis un vendeur</Link>
      </div>
      <div>
        <Link to='/acheteur'>Je suis un acheteur</Link>
      </div>
     </section>

     

      
    </>
  )
}

export default Dashboard
