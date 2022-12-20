import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './sereens/HomeScreen';
import ProductScreen from './sereens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <header>
        <a href='/' >amazona</a>
      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
     </BrowserRouter>
  );
}

export default App;
