import React from "react";
import { samplePanelData } from ".";
import { PanelData } from "./type";
import { Header } from "../../components/header";

const Panels = () => {

  return <div className="">
    <div className="sticky top-0 ">
      <Header />
    </div>
    <Body />
  </div>;
}

const Body = () => {

  // 絞り込み条件
  const [filter, setFilter] = React.useState('');

  // 用意が面倒なので、データコピー（データ定義は、samplePanelData を参照）
  let data = samplePanelData.concat(samplePanelData);
  data = data.concat(data);
  data = data.concat(data);

  // 絞り込み処理
  data = data.filter((val) => {
    return val.station.toLowerCase().includes(filter.toLowerCase())
      || val.prefecture.toLowerCase().includes(filter.toLowerCase())
      || val.other.toLowerCase().includes(filter.toLowerCase());
  });

  return <>
    <SearchBox onSubmit={(text: string) => { setFilter(text) }} />

    <div>コードURL： https://github.com/NagaJun1/sample_react_ts/blob/main/src/pages/panels/panels.tsx</div>

    {/* 横並びで折り返し */}
    <div className="my-10 w-fit flex flex-wrap justify-center">
      {data.map((data: PanelData, index: number) => {
        return <div key={index}
          onClick={() => {
            alert('クリックイベント、都道府県：' + data.prefecture + '、最寄り駅：' + data.station)
          }}
          className="m-2 p-4 bg-sky-100 w-fit">
          <img src={data.imgUrl} alt={'image'} className="w-80 mb-2" />
          <Label title={'都道府県'} value={data.prefecture} />
          <Label title={'最寄り駅'} value={data.station} />
          <Label title={'その他'} value={data.other} />
        </div>;
      })}
    </div>
  </>;
}

const Label = ({ title, value }: { title: string, value: string }) => {
  return <div className="flex pb-2 px-2 text-lg">
    <div className="w-40">{title}</div>
    <div className="w-40">{value}</div>
  </div>
}

type SearchBoxProps = {
  onSubmit: (text: string) => void;
}

/** 検索窓 */
const SearchBox = ({ onSubmit }: SearchBoxProps) => {
  const [text, setText] = React.useState('');

  return <div className='flex mt-6'>
    <input
      type='text'
      value={text}
      onChange={(e) => { setText(e.currentTarget.value) }}
      className='bg-slate-200 min-w-60 text-base p-2 mx-6'
      placeholder='駅名、件名、その他' />
    <button
      className='bg-sky-300 max-h-10 min-w-32'
      onClick={() => { onSubmit(text); }}>検索</button>
  </div>;
}

export default Panels;