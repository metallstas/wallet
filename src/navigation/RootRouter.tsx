import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage/HomePage'
import { Main } from '../components/Main/Main'
import { AddCategory } from '../components/AddCategory/AddCategory'
import { RedactCategory } from '../components/RedactCategory/RedactCategor'
import { Category } from '../components/Category/Category'
import { TransactionsList } from '../components/TransactionsList/TransactionsList'

export const RooteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='/add-category' element={<AddCategory />} />
          <Route path='/redact-category' element={<RedactCategory />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/myTransactions' element={<TransactionsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
