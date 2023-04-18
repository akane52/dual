import './App.css';
import HomePage from './components/HomePage';
import { IntroductionPage } from './components/IntroductionPage';
import { WhoAmIPage } from './components/WhoAmIPage';	
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/components/ReadMoreButton' element={<IntroductionPage />} />
        <Route path='/components/WhoAmIPage' element={<WhoAmIPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;