import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage/HomePage'
import { Main } from '../components/Main/Main'
import { Modal } from '../components/Modal/Modal'

export const RooteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='/modal' element={<Modal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
