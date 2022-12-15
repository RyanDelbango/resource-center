import React, { useEffect } from "react";
import Router from "next/router";

const Custom404 = () => {

  useEffect(() => {
    Router.push('/');
  }, []);

  return <></>;
};

export default Custom404;