import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getCategories } from '../../redux/actions/categoriesAction'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import cls from './Main.module.css'

export const Main = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <>
      <Header />
      <main style={{minHeight: '100vh'}}>
        <div className={cls.container}>
        <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
