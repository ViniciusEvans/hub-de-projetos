import { createContext } from "react";
import useProvider from "../hooks/useProvider";

const Context = createContext({});

export function UserProvider(props: any) {
  const userProvider = useProvider();
  return (
    <Context.Provider value={userProvider}>{props.children}</Context.Provider>
  );
}

export default Context;
