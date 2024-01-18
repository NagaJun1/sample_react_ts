import { trInTable, tdsInTr } from "../../ts/utils";

/** Ryzen8000G について */
const Ryzen8000 = () => {
  return <>
    <div className="margin10"> 発売予定の Ryzen 8000G シリーズ性能 </div>

    {/* thead,tbody が無いとDEVツールで、エラー出力される */}
    <table>
      <thead>
        <CpuModel />
      </thead>
      <tbody>
        <Clock />
        <CoreAndThread />
        <L2Cache />
        <L3Cache />
        <GpuName />
        <GpuCore />
        <GpuClock />
      </tbody>
    </table>

    <div className="margin-top20"> ＜以下共通＞ </div>
    <ul className="margin-top10">
      <li> 対応メモリ：DDR5-5200 </li>
      <li> TDP：65W </li>
      <li>ソケット：AM5 </li>
    </ul>

    <div className="margin-top20"> ＜著者備考＞ </div>
    <ul className="margin-top10">
      <li> 性能を発揮する上で、デュアルチャネルは必須 <br />（主に、フレームレートに影響する） </li>
      <li>
        性能を発揮する上での推奨するメモリは、「DDR5-6000」との記事を目にしたが、
        対応メモリとしては"5200"となっているため、オーバークロックを前提とした認識か？
      </li>
      <li> AMDが発表している性能としては、Core i5 13400F + GTX1650 と同等か、それ以上の性能としている。 </li>
    </ul>
  </>
};

const GpuClock = () => <>{
  tdsInTr([
    { val: "GPUクロック" },
    { val: "2900MHz" },
    { val: "2800MHz", col: 2 },
    { val: "2600MHz" },
  ])
}</>;

/** GPU名 */
const GpuName = () => <>{
  tdsInTr([
    { val: "GPU名" },
    { val: "Radeon 780M" },
    { val: "Radeon 760M" },
    { val: "Radeon 740M", col: 2 },
  ])
}</>;

/** GPUコア数 */
const GpuCore = () => <>{
  tdsInTr([
    { val: "GPUコア数" },
    { val: "12" },
    { val: "8" },
    { val: "4", col: 2 },
  ])
}</>;

/** UPU 型番 */
const CpuModel = () => <>{
  //「<>{}</>」で囲まないと、「 is not a valid JSX element」エラーとなる

  trInTable(["CPU型番", "7 8700G", "5 8600G", "5 8500G", "3 8300G"])
}</>;

/** コア/スレッド数 */
const CoreAndThread = () => <>{
  tdsInTr([
    { val: "コア/スレッド" },
    { val: "8/16" },
    { val: "6/12", col: 2 },
    { val: "4/8" }
  ])
}</>;

const Clock = () => <>{
  trInTable(["動作クロック", "4.2GHz", "4.3GHz", "3.5GHz", "3.4GHz"])
}</>;

const L2Cache = () => <>{
  tdsInTr([
    { val: "L2 キャッシュ" },
    { val: "8MB" },
    { val: "6MB", col: 2 },
    { val: "4MB" }
  ])
}</>;

const L3Cache = () => <>{
  tdsInTr([
    { val: "L3 キャッシュ" },
    { val: "16MB", col: 3 },
    { val: "8MB" }
  ])
}</>;

export default Ryzen8000;
