import { useEffect, useState } from "react";
import { APP_NAME } from "../const/string";
import { Link, useLocation } from "react-router-dom";
import { TemplateDrawer } from "../components/TemplateDrawer";
import { Button } from "@mui/material";
import { routeList } from "../App";

export const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 画面遷移時にメニューを閉じる
  const location = useLocation();
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <>
      <div className="sticky top-0 z-50 p-4 bg-gray-100 border-b border-gray-200">
        <Button
          type="button"
          variant="contained"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-xl">メニュー</p>
        </Button>
      </div>
      <LinksDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

const LinksDrawer = (props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { isOpen, setIsOpen } = props;
  return (
    <TemplateDrawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="top">
      <div>
        {routeList.map(x => (
          <ILink key={x.path} name={x.name} link={`/${APP_NAME}/${x.path}`} />
        ))}
      </div>
    </TemplateDrawer>
  )
}

/** 「sample_react_ts」の他ページへのリンク作成 */
const ILink = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="w-full text-lg px-4 py-2 bg-white border-b border-gray-200 hover:bg-gray-100">
      <Link className="block w-full" to={link}>{name}</Link>
    </div>
  );
}
