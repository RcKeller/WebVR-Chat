import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './UI.scss'

export const UI = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
UI.propTypes = {
  children: PropTypes.node,
}

export default UI
