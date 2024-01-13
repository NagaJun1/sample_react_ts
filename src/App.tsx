import './css/App.css';
import './css/Menu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Author from './pages/Author';
import Reports from './pages/Report';
import Home from './pages/Home';

/** 初期ページ表示 */
const App = () => {
  // 各ページのパス設定
  // github pages だと、画面遷移が成功しない
  // 解決核について... https://qiita.com/takuya0206/items/f284b5e68f48f1ebefae
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/author' element={<Author />} />
      <Route path='/report' element={<Reports />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
