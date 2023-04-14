import './App.css';
import FirstPage from './components/FirstPage';
import { Hola } from './components/ReadMoreButton';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/components/ReadMoreButton' element={<Hola />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
