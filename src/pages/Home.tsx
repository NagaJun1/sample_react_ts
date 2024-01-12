import { Menus } from "./Menu";

export const Home = () => {
  return <>
    <Menus />
    <h1> このサイトについて </h1>
    <div className="honbun">
      このサイトは、筆者の React の自己学習のために作成されています。 <br /><br />
      左上のメニューから、他ページへ遷移できます。<br /><br />
      このページのソースコードは、以下のリンクで公開しています。<br />
      <a href="https://github.com/NagaJun1/sample_react_ts">
        https://github.com/NagaJun1/sample_react_ts
      </a>
    </div>
  </>
}
