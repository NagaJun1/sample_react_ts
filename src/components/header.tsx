import { Bars3Icon, ChatBubbleLeftIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

// アイコンには、heroicons を使用
// https://www.npmjs.com/package/@heroicons/react

/** ヘッダーコンポーネント */
export const Header = () => {

  /** 画面サイズが大きいなら、横並び */
  return <div className={'lg:flex'}>
    <div className='flex w-full'>
      <div className='p-4 text-2xl bg-slate-100 w-full'>ページロゴ</div>
    </div>

    {/* 画面サイズが大きいなら、lg: で右に寄せる */}
    <div className={'lg:min-w-[600px] lg:ml-auto'}>
      <Menus />
    </div>
  </div>;
}

const Menus = () => {
  return <>
    <div className="grid grid-flow-col justify-stretch mb-2">
      <MenuPanel label={'オフィス検索'}
        Icon={() => {
          return <MagnifyingGlassIcon className='h-10 mx-auto' />;
        }}
        onClick={() => {
          alert('処理未定義：オフィス検索')
        }} />

      <MenuPanel label={'問い合わせ'}
        className="border-x border-black"
        Icon={() => {
          return <ChatBubbleLeftIcon className='h-10 mx-auto' />;
        }}
        onClick={() => {
          alert('処理未定義：問い合わせ')
        }} />

      <MenuPanel label={'マイページ'}
        className="border-r border-black"
        Icon={() => {
          return <UserIcon className='h-10 mx-auto' />;
        }}
        onClick={() => {
          alert('処理未定義：マイページ')
        }} />

      {/* ↓ ドロワー表示したい TODO */}
      <MenuPanel label={'メニュー'}
        className=''
        Icon={() => <Bars3Icon className='h-10 mx-auto' />}
        onClick={() => {
          alert('処理未定義：メニュー')
        }} />
    </div>
  </>;
}

type MenuPanelProps = {
  Icon: () => React.ReactElement;
  className?: string;
  label: string;
  onClick: () => void;
}

const MenuPanel = ({ Icon, label, onClick, className }: MenuPanelProps) => {
  // TODO ホバーで色変える + マウスカーソルも変える
  return <div
    className={"py-2 text-xl text-center bg-sky-100 " + (className ?? '')}
    onClick={onClick}>
    <Icon />
    <div>{label}</div>
  </div>;
}