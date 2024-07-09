import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Thanks_you from '@/common/Thanks_you';

const ThanksYouPage = () => {
  const router = useRouter();
  const [isFormSubmitted, setIsFormSubmitted] = useState(true);

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    if (!formSubmitted) {
      setIsFormSubmitted(false);
      router.replace('/');
    } else {
      sessionStorage.removeItem('formSubmitted');
    }
  }, [router]);

  if (!isFormSubmitted) {
    return
  } else {
    return <div className="Body_padding"><Thanks_you /></div>  
  }
};

export default ThanksYouPage;





