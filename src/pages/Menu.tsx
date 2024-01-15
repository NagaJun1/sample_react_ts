import { useState } from "react";
import menuIcon from '../images/menu.svg';
import { APP_NAME } from "../const/string";

const Menus = () => {

  /** ポップアップメニューのクラス名制御（表示/非表示に使用）*/
  const [unvisible, setUnvisible] = useState(true);

  /** メニューの表示切替 */
  const changeMenuVisible = () => {
    setUnvisible(!unvisible);
  };

  return <div className="menus">
    <img src={menuIcon} alt="Icon" className='menuIcon' onClick={changeMenuVisible} />
    <div className={unvisible ? 'unvisible' : 'visible'}>
      <Link name="ホーム" link={'/' + APP_NAME} />
      <Link name="記事" link={'/' + APP_NAME + "/report"} />
      <Link name="筆者プロフィール" link={'/' + APP_NAME + "/author"} />
    </div>
  </div>;
}

/** 「sample_react_ts」の他ページへのリンク作成 */
const Link = ({ name, link }: any) => {
  return <div className="menu">
    <a href={link}>{name}</a>
  </div>
}

export default Menus;
