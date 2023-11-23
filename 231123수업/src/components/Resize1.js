import React, { useEffect, useState } from "react";

const Resize1 = () => {
  const [width, setWidth] = useState(null);

  console.log("리사이즈");
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  // const handleResize = () => {
  //   setWidth(width.innerHtml);
  // };

  useEffect(() => {
    console.log("리사이즈 시작");
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("클린업");
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <h2>Resize1</h2>
    </>
  );
};

export default Resize1;
