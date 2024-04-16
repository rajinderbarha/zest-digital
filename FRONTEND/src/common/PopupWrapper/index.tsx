import Resource_Access_popup from "@/components/Resource_Access_popup";
import { usePopup } from "@/context";
import React from "react";

const PopupWrapper = ({ children }: any) => {
  const { isOpen, openPopup, closePopup } = usePopup() as any;
  return <>{isOpen && <div className="fixed w-full bg-white top-3">{children}</div>}</>;
};

export default PopupWrapper;
