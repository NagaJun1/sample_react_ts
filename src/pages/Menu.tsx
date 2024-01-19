import { useState } from "react";
import menuIcon from '../images/menu.svg';
import { APP_NAME, PATH } from "../const/string";

const Menus = () => {

  /** ポップアップメニューのクラス名制御（表示/非表示に使用）*/
  const [unvisible, setUnvisible] = useState(true);

  /** メニューの表示切替 */
  const changeMenuVisible = () => {
    setUnvisible(!unvisible);
  };

  /** メニューを非表示化 */
  const hiddenMenus = () => {
    setUnvisible(true);
  };

  return <>
    <div className="menu-button">
      <img src={menuIcon} alt="Icon" className='menuIcon' onClick={changeMenuVisible} />
    </div>
    <div className={unvisible ? 'unvisible' : 'visible'}>
      <div className="menus-container">
        <div className="menus">
          <Link name="ホーム" link={'/' + APP_NAME} />
          <Link name="記事" link={'/' + APP_NAME + "/report"} />
          <Link name="サンプルコード・ページ" link={PATH.SAMPLE} />
          <Link name="筆者プロフィール" link={'/' + APP_NAME + "/author"} />
        </div>
        <div className="outside-of-frame" onClick={hiddenMenus} />
      </div>
    </div>
  </>;
}

/** 「sample_react_ts」の他ページへのリンク作成 */
const Link = ({ name, link }: any) => {
  return <div className="menu">
    <a href={link}>{name}</a>
  </div>
}

export default Menus;
