import React, { useEffect, useState } from "react";

const Icon = (props) => {
  const { name, ...otherProps } = props;

  const [iconModule, setIconModule] = useState(null);

  useEffect(() => {
    import(`./${name}.svg`)
      .then((module) => {
        setIconModule(module);
      })
      .catch((error) => {
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    const Component = iconModule.ReactComponent;

    return <Component {...otherProps} />;
  };

  return <>{renderIcon()}</>;
};

export default Icon;
