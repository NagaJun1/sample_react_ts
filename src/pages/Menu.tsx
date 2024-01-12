import { useState } from "react";
import MenuIcon from '../images/menu.svg';

export const Menus = () => {

  /** ポップアップメニューのクラス名制御（表示/非表示に使用）*/
  const [unvisible, setUnvisible] = useState(true);

  /** メニューの表示切替 */
  const changeMenuVisible = () => {
    setUnvisible(!unvisible);
  };

  return <div className="menus">
    <img src={MenuIcon} alt="" className='menuIcon' onClick={changeMenuVisible} />
    <div className={unvisible ? 'unvisible' : 'visible'}>
      <div className="menu" onClick={goToHomePage}> ホーム </div>
      <div className="menu" onClick={goToReportPage}> 記事 </div>
      <div className="menu" onClick={goToAuthorPage}> 筆者プロフィール </div>
    </div>
  </div>;
}

const goToHomePage = () => {
  window.location.href = '/sample_react_ts';
};

const goToReportPage = () => {
  window.location.href = '/sample_react_ts/report';
};

const goToAuthorPage = () => {
  window.location.href = '/sample_react_ts/author';
};
