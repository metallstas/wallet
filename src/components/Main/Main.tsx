import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import cls from './Main.module.css'

export const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
