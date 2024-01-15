import Menus from "./Menu";
import '../css/Report.css';

const Reports = () => {
  return <>
    <Menus />
    <h1> 記事 </h1>
    <div className="honbun">
      <div> なんか思いついたら書きます(;^ω^) </div>

      <h3> 外部ページリンク </h3>
      <div> 筆者が書いたページへのリンク </div>
      <Link name="Qiita" link='https://qiita.com/NagaJun' />
      <Link name="Github" link='https://github.com/NagaJun1' />
    </div>
  </>
};

const Link = ({ name, link }: any) => {
  return <div className={name}>
    <a href={link}> {name} </a>
  </div>
};

export default Reports;
