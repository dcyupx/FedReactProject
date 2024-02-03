import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
      <section className='Not-Found'>
        <div className='conatiner not-found-container'>
          <h1>404</h1>
          <h3>Oops, This Page is Not Available</h3>
          <Link to={'/'} className='btn btn-border'> Back To Home</Link>
        </div>

      </section>
    )
  }