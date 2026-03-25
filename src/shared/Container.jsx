import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-260 mx-auto 2xl:px-0 px-4">
      {children}
    </div>
  );
};

export default Container;