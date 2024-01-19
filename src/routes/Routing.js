import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import PageNotFound from '../pages/PageNotFound';

function Routing () {
  return (
    <div>
      {/* <BrowserRouter basename='satta/'> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
