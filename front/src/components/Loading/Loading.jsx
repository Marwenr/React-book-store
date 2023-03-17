import React from "react";

const Loading = ({ isLoading, children }) => {
  const renderHandler = () => {
    const childrenType = children?.type?.render?.displayName;
    if (childrenType === "Button") {
      const loadingButton = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );

      return <>{isLoading ? loadingButton : children}</>;
    }

    return <>{isLoading ? <p>Loading...</p> : children}</>;
  };

  return renderHandler();
};

export default Loading;
