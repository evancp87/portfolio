import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const DelayedFallback = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{show && <Loader />}</>;
};
export default DelayedFallback;
