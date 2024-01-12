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
      <Link name="ホーム" link="/sample_react_ts" />
      <Link name="記事" link="/sample_react_ts/report" />
      <Link name="筆者プロフィール" link="/sample_react_ts/author" />
    </div>
  </div>;
}

const Link = ({ name, link }: any) => {
  return <div className="menu">
    <a href={link}>{name}</a>
  </div>
}
