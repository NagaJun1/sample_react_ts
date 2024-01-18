import { Td, trInTable } from "../../ts/utils";

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
  trInTable([
    new Td("GPUクロック"),
    new Td("2900MHz"),
    new Td("2800MHz", 1, 2),
    new Td("2600MHz"),
  ])
}</>

/** GPU名 */
const GpuName = () => <>{
  trInTable([
    new Td("GPU名"),
    new Td("Radeon 780M"),
    new Td("Radeon 760M"),
    new Td("Radeon 740M", 1, 2),
  ])
}</>;

/** GPUコア数 */
const GpuCore = () => <>{
  trInTable([
    new Td("GPUコア数"),
    new Td("12"),
    new Td("8"),
    new Td("4", 1, 2),
  ])
}</>;

/** UPU 型番 */
const CpuModel = () => <>{
  //「<>{}</>」で囲まないと、「 is not a valid JSX element」エラーとなる

  trInTable([
    new Td("CPU型番"),
    new Td("7 8700G"),
    new Td("5 8600G"),
    new Td("5 8500G"),
    new Td("3 8300G"),
  ])
}</>;

/** コア/スレッド数 */
const CoreAndThread = () => <>{
  trInTable([
    new Td("コア/スレッド"),
    new Td("8/16"),
    new Td("6/12", 1, 2),
    new Td("4/8")
  ])
}</>;

const Clock = () => <>{
  trInTable([
    new Td("動作クロック"),
    new Td("4.2GHz"),
    new Td("4.3GHz"),
    new Td("3.5GHz"),
    new Td("3.4GHz")
  ])
}</>

const L2Cache = () => <>{
  trInTable([
    new Td("L2 キャッシュ"),
    new Td("8MB"),
    new Td("6MB", 1, 2),
    new Td("4MB")
  ])
}</>;

const L3Cache = () => <>{
  trInTable([
    new Td("L3 キャッシュ"),
    new Td("16MB", 1, 3),
    new Td("8MB")
  ])
}</>;

export default Ryzen8000;
