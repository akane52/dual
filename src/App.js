import './App.css';
import HomePage from './components/HomePage';
import { WhoAmIPage } from './components/WhoAmIPage';	
import { TravelportPage } from './components/TravelportPage';
import { LearningsDepartmentPage } from './components/LearningsDepartmentPage';
import { ConclusionsPage } from './components/ConclusionsPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/components/WhoAmIPage' element={<WhoAmIPage />} />
        <Route path='/components/TravelportPage' element={<TravelportPage />} />
        <Route path='/components/LearningsDepartmentPage' element={<LearningsDepartmentPage />} />
        <Route path='/components/ConclusionsPage' element={<ConclusionsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;