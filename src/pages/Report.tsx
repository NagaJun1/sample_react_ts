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
      <div className="qiita" onClick={goToQiita}> Qiita </div>
      <div className="github" onClick={goToGithub}> Github </div>
    </div>
  </>
};

const goToQiita = () => {
  window.open('https://qiita.com/NagaJun', '_blank');
};

const goToGithub = () => {
  window.open('https://github.com/NagaJun1', '_blank');
}

export default Reports;
