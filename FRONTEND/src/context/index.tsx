import { createContext, useContext, useState } from 'react';

const PopupContext = createContext({});
export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
    {children}
  </PopupContext.Provider>

};
