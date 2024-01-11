import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

/** 初期ページ表示 */
function App() {
  // 各ページのパス設定
  return <BrowserRouter>
    <Routes>
      <Route path={'/sample_react_ts'} element={<Home />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
