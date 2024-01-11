import React from 'react';

const Home = () => {
    return (<>
        <h1> サイト管理者 </h1>
        <div className='flex'>
            <PersonalData />
        </div>
    </>);
};

/**
* 個人情報
* @param name 名前
* @param content コンテンツ（経歴など）
* @returns 
*/
function PersonalData() {
    return <div className='parsonal_data'>
        <div className="flex" >
            <p className='name'> 名前： </p>
            <p> Nagai Jumpei </p>
        </div>
        <div className="flex" >
            <p className='age'> 年齢： </p>
            <p> 25歳 </p>
        </div>
        <div className='flex'>
            <p className='business'> 職業： </p>
            <p> フリーランスエンジニア</p>
        </div>
        <div className="flex" >
            <p className='language'>使用言語：</p>
            <p>
                C# <br /> Java <br /> JavaScript <br /> SQL <br /> Rust <br />
                PHP <br /> Html <br /> css <br /> VBA <br /> TypeScript
            </p>
        </div>
        <div className="flex" >
            <p className='framework'> フレームワーク <br /> ライブラリ：</p>
            <p>
                Spring Boot <br /> .Net Framework <br/>（Windows form, VSTO アドイン, AutoCAD アドイン）
                <br /> jQuery <br /> xamarin <br /> Android java <br /> webix <br /> React
            </p>
        </div>
        <div className="flex" >
            <p className='blank' />
            <p>(2023/12/31 現在)</p>
        </div>
    </div>;
}

export default Home;