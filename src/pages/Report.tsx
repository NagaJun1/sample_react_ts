import Menus from "./Menu";
import '../css/Report.css';
import Ryzen8000 from "./reports/Ryzen8000Data";

const Reports = () => {
  return <>
    <Menus />
    <h1> 記事 </h1>
    <div className="honbun">
      <h3> 外部ページリンク </h3>
      <div> 筆者が書いたページへのリンク </div>
      <Link name="Qiita" link='https://qiita.com/NagaJun' />
      <Link name="Github" link='https://github.com/NagaJun1' />

      <h3 className="margin-top40"> メモ </h3>
      <Ryzen8000 />
    </div>
  </>
};

/** リンク */
const Link = ({ name, link }: any) => {
  return <div className={name}>
    <a href={link}> {name} </a>
  </div>
};

export default Reports;
