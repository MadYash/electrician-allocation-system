import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../../src/not-found.svg'
const NotFound = () => {
  return (
    <main>
    <div class="container">

      <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link class="btn" to="/">Back to home</Link>
        <img src={notfound} class="img-fluid py-5" alt="Page Not Found"/>
      </section>

    </div>
    {/* <!-- End #main --> */}
  </main>

    )
}

export default NotFound