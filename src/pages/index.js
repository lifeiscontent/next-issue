import { useRouter } from "next/dist/client/router";

export default () => {
  const router = useRouter();

  return <div>the path is {router.pathname}</div>;
};
