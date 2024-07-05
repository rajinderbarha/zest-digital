export const generateId = (text: string) => {
  const cleanedText = text.replace(/[^\w\s-]/g, '').trim();
  return cleanedText.toLowerCase().replace(/\s+/g, '-');
};

export const handleHashChange = () => {    
  const { hash } = window.location;
  if (hash) {
    const id = generateId(hash.substring(1));
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
