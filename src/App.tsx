import './css/App.css';
import './css/Menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Author from './pages/Author';
import Reports from './pages/Report';
import Home from './pages/Home';
import { APP_NAME, PATH } from './const/string';
import Samples from './pages/Sample';
import { Test } from './pages/test/test';

const App = () => {
  // 各ページのパス設定
  return <BrowserRouter>
    <Routes>
      <Route path={APP_NAME + '/'} element={<Home />} />
      <Route path={APP_NAME + '/author'} element={<Author />} />
      <Route path={APP_NAME + '/report'} element={<Reports />} />
      <Route path={PATH.SAMPLE} element={<Samples />} />
      <Route path={PATH.TEST} element={<Test />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
