export const generateId = (text: string) => {
  const cleanedText = text.replace(/\?/g, '');
  console.log(cleanedText);
  return cleanedText.toLowerCase().replace(/\s+/g, "-");
};

// export const generateId = (text: string) => {
//   // Remove special characters and spaces
//   const cleanedText = text.replace(/[^\w\s-]/g, '').trim();
  
//   // Convert to lowercase and replace spaces with dashes
//   const id = cleanedText.toLowerCase().replace(/\s+/g, '-');
  
//   return id;
// };


export const handleHashChange = () => {
  const { hash } = window.location;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};