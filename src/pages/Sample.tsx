import Menus from "./Menu";
import '../css/Sample.css';
import { ReactNode, useState } from "react";

const Samples = () => {
  return <>
    <Menus />
    <h1> 公開済みの <br /> サンプルページ </h1>
    <div className="honbun">
      {linkList()}
    </div>
  </>;
};

/** リンク名・リンクURLをループで DOMに追加 */
const linkList = () => {
  let list: ReactNode[] = [];

  pageList.forEach((url: string, keyWord: string) => {

    // テキストボックスの値
    const [inputText, setInputElement] = useState("400");

    /**　テキストボックスの値に応じて、iframe の幅を修正 */
    let widthChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (0 <= Number(e.target.value)) {
        setInputElement(e.target.value); // 入力値が、数値となる場合のみ、許容される
      }
    };

    list.push(<div key={keyWord}>
      <Link name={keyWord} link={url} />
      <div className="flex">
        <p className="margin0"> 画面高さ (100px～800px)： </p>
        <input type='text' placeholder='ページ幅' value={inputText} onChange={widthChangeEvent} />
      </div>
      <iframe src={url} title={keyWord} height={inputText} />
    </div>);
  });
  return list;
}

/** key: リンク名, value: リンクURL  */
const pageList: Map<string, string> = new Map<string, string>([
  [
    "Amazon検索 金額指定 (以下、iframe 内では、検索できません)",
    "https://nagajun1.github.io/amazon_product_search/"
  ], [
    "draw 2d サンプル",
    "https://nagajun1.github.io/sample_draw2d/"
  ], [
    "webix サンプル",
    "https://nagajun1.github.io/webix_test/"
  ]
]);

const Link = ({ name, link }: any) => {
  return <div className='link'>
    <a href={link}> {name} </a>
  </div>
};

export default Samples;