import Menus from "./Menu";
import '../css/Sample.css';
import { ReactNode } from "react";

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

  pageList.forEach((value: string, key: string) => {
    list.push(<Link name={key} link={value} />)
  });
  return list;
}

/** key: リンク名, value: リンクURL  */
const pageList: Map<string, string> = new Map<string, string>([
  [
    "Amazon検索 金額指定",
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