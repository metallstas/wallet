import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage/HomePage'
import { Main } from '../components/Main/Main'
import { AddCategory } from '../components/AddCategory/AddCategory'

export const RooteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='/add-category' element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
