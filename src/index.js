import React from 'react'
import ReactDom from 'react-dom'
import UserCv from './UserCv'
import './index.css'


const root = document.querySelector('#root')

ReactDom.render(
    <>
      <UserCv/>  
    </>,
    root
)