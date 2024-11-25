import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navabr extends Component {
  

  render() {
    const {Category}=this.props
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News Portal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us </Link>
        </li>
        {Category.map((category,index)=>
        {
            console.log(`${category}`)
            return(
            <li key={index} className='nav-item'>
                    <Link className="nav-link" to={`/${category}`}>{category.toUpperCase()}</Link>    
            </li>
            );
        })}
        </ul>
    </div>
  </div>
</nav>
        </>
    )
  }
}

export default Navabr
