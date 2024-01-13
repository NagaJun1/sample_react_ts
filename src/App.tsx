import './css/App.css';
import './css/Menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Author from './pages/Author';
import Reports from './pages/Report';
import Home from './pages/Home';
import { APP_NAME } from './const/string';

const App = () => {
  // 各ページのパス設定
  return <BrowserRouter>
    <Routes>
      <Route path={APP_NAME + '/'} element={<Home />} />
      <Route path={APP_NAME + '/author'} element={<Author />} />
      <Route path={APP_NAME + '/report'} element={<Reports />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
