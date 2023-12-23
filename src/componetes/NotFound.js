import React from 'react'
import { Link } from 'react-router-dom'
import "./notfound.css"

export default function NotFound() {
  return (
    <div className='notFound'>
        <h1>404 Not Found</h1>
        <h2>Go to Home Page</h2>
        <Link to="/">Home</Link>
    </div>
  )
}
