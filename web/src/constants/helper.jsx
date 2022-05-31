export const inputchangeHandler = (e) => {
    // setstateufnction from props
  setCredential((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};
