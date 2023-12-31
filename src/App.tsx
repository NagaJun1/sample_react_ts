import './css/App.css';
import { JUMPEI_NAGAI } from './const/string';
import { TrInTable } from './ts/utils';

const AppStyle = {
  height: 80,
  backgroundColor: "#adff2f" // greenyellow
};

/** 初期ページ表示 */
function App() {
  return <div>
    <div className="App" style={AppStyle}>
      ヘッダー
    </div>
    <h1> 経歴情報 </h1>
    <JumpeiDate />
    <PersonalData name="個人名" />
  </div>;
}

/**
 * 個人情報
 * @param name 名前
 * @param content コンテンツ（経歴など）
 * @returns 
 */
function PersonalData({ name }: any) {
  return <div className='parsonal_data'>
    <h3>{name}</h3>
    <div>
      {
        name === JUMPEI_NAGAI ?
          <JumpeiContent></JumpeiContent>
          : <p>コンテンツ（経歴など）</p>
      }
      <p>(2023/12/31 現在)</p>
    </div>
  </div>;
}

/** jumpei nagai の個人情報 */
const JumpeiDate = () => {
  return PersonalData({ name: JUMPEI_NAGAI });
}

/** jumpei nagai の経歴 */
const JumpeiContent = () => {
  return <table>
    <TrInTable td1="年齢" td2="25歳" />
    <TrInTable td1="職種" td2="フリーランスエンジニア" />
    <TrInTable td1="使用言語"
      td2="C#、Java、JavaScript、SQL、Rust、PHP、Html、css、VBA、TypeScript" />
    <TrInTable td1="使用フレームワーク・ライブラリ"
      td2="Spring Boot、.Net Framework（Windows form、VSTO アドイン、AutoCAD アドイン）、jQuery、xamarin、Android java、webix、React" />
  </table>;
}

export default App;
