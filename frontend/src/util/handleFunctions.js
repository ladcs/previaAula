function handleOnChange({ target }, objToChange, set) {
  const { id, value } = target;
  set({
    ...objToChange,
    [id]: value,
  })
}

export { handleOnChange };
