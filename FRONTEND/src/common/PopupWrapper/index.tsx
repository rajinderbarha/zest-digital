import { usePopup } from "@/context";

const PopupWrapper = ({ children }: any) => {
  const { isOpen, openPopup, closePopup } = usePopup() as any;
  return <>{isOpen && <div className="fixed w-full bg-white top-3">{children}</div>}</>;
};

export default PopupWrapper;
