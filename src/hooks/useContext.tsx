import React from "react";
import Context from "../context/UserContext";

function useContext() {
  return React.useContext(Context);
}

export default useContext;
