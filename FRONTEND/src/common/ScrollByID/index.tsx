export const generateId = (text: string) => {
  // Remove all special characters except for hyphens and underscores
  const cleanedText = text.replace(/[^\w\s-]/g, '').trim();
  // Convert to lowercase and replace spaces with hyphens
  return cleanedText.toLowerCase().replace(/\s+/g, '-');
};

export const handleHashChange = () => {     //handle ? for queryselector
  const { hash } = window.location;
  if (hash) {
    // Remove the '#' from the hash and sanitize it
    const id = generateId(hash.substring(1));
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
