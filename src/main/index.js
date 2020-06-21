import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import Routes from './routes'
import { history } from '../store'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
import MainContent from '../components/main'

export const Main = () => {
  return (
    <>
      <BrowserRouter
        basename={process.env.NODE_ENV !== 'production' ? '/' : '/'}
      >
        <Router history={history}>
          <Navbar />
          <Routes />
          <Header />
          <MainContent />
          <Footer />
        </Router>
      </BrowserRouter>
    </>
  )
}
