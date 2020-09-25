//custom hook for auth

import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    //if not loading and not logged in take the user to the login page before letting them post
    if (!fetching && !data?.me) {
      router.replace("/login?next=" + router.pathname); //telling the login page where to go after loggin in
    }
  }, [fetching, data, router]);
};
