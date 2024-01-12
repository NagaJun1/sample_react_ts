import './css/App.css';
import './css/Menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Author } from './pages/Author';
import { Reports } from './pages/Report';
import { Home } from './pages/Home';

/** 初期ページ表示 */
function App() {
  // 各ページのパス設定
  return <BrowserRouter basename={"/"}>
    <Routes>
      <Route path={'/sample_react_ts'} element={<Home />} />
      <Route path={'/sample_react_ts/author'} element={<Author />} />
      <Route path={'/sample_react_ts/report'} element={<Reports />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
