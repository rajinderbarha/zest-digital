
// import Thanks_you from '@/common/Thanks_you';


// const ThanksYouPage = () => <Thanks_you />;x`
// export default ThanksYouPage;




import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Thanks_you from '@/common/Thanks_you';

const ThanksYouPage = () => {
  const router = useRouter();
  const [isFormSubmitted, setIsFormSubmitted] = useState(true);

  useEffect(() => {
    // Check for form submission state in session storage
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    
    if (!formSubmitted) {
      // Redirect to the form page if not submitted
      setIsFormSubmitted(false);
      router.replace('/');
    } else {
      // Remove form submission state from sessionStorage after rendering
      sessionStorage.removeItem('formSubmitted');
    }
  }, [router]);

  // Conditionally render the thank you component if the form is submitted
  if (!isFormSubmitted) {
    return 
  }else{

    return <Thanks_you />;
  }

};

export default ThanksYouPage;





