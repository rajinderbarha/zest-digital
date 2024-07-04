import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const currentPath = router.asPath;
    { currentPath === "/services" && router.replace("/") }
  }, [router]);

  return <div>Service page</div>;
};

export default Index;
