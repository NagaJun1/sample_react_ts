import React from 'react';
import Menus from './Menu';

const Author = () => {
    return (<>
        <Menus />
        <h1> 筆者プロフィール </h1>
        <div className='flex'>
            <PersonalData />
        </div>
    </>);
};

const Row = ({ itemName, item }: any) => {
    return <div className="flex row" >
        <p className='itemName'>{itemName} </p>
        <p>{item}</p>
    </div>
};

const PersonalData = () => {
    return <>
        <div className='parsonal_data'>
            <Row itemName="名前：" item="Nagai Jumpei" />
            <Row itemName="年齢：" item="25歳" />
            <Row itemName="職業：" item="フリーランスエンジニア" />
            <Language />
            <Framework />
            <p> (2024/1/12 現在) </p>
        </div>
    </>;
}

const Language = () => {
    return <div className="flex row" >
        <p className='language'>使用言語：</p>
        <p>
            C# <br /> Java <br /> JavaScript <br /> SQL <br /> Rust <br />
            PHP <br /> Html <br /> css <br /> VBA <br /> TypeScript
        </p>
    </div>;
}

const Framework = () => {
    return <div className="flex row" >
        <p className='framework'> ライブラリ　 <br /> FW：</p>
        <p>
            Spring Boot <br /> .Net Framework <br />（Windows form, VSTO アドイン, AutoCAD アドイン）
            <br /> jQuery <br /> xamarin <br /> Android java <br /> webix <br /> React
        </p>
    </div>;
}

export default Author;
