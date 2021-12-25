import React, { useEffect, useState } from "react";

const Icon = (props) => {
  const { name, ...otherProps } = props;

  const [iconModule, setIconModule] = useState(null);

  useEffect(() => {
    React.lazy(() =>
      import(`./icons/${name}_black_24dp.svg`)
        .then(({ module }) => {
          console.log(module);
          setIconModule(module);
        })
        .catch((error) => {
          console.log(error);
          console.error(`Icon with name: ${name} not found!`);
        })
    );
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    const Component = iconModule.ReactComponent;

    return <Component {...otherProps} />;
  };

  return <>{renderIcon()}</>;
};

export default Icon;
// key={Date.now()}
/*
  useEffect(() => {
    import(`./icons/${name}_black_24dp.svg`)
      .then(({ module }) => {
        console.log(module);
        setIconModule(module);
      })
      .catch((error) => {
        console.log(error);
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [name]);
  */

  /* <Icon className="icon" name="logo" /> */


  /* <Icon className="icon" name="star" /> */


  /* <Icon className="icon" name="unicorn" /> */


  /* <Icon className="icon" name="unicorn" /> */

