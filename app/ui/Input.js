function Input(props) {
  const className = props.className || "";
  const { variant } = props;

  return (
    <>
      {!variant || variant === 0 ? (
        <input
          {...props}
          className={`!bg-gray-100 w-full px-5 py-4 rounded-md ${className}`}
        />
      ) : variant === 1 ? (
        <div className="relative flex flex-col items-center">
          <input
            {...props}
            className={`!bg-gray-100 w-full px-5 py-4 rounded-md peer !border-none !shadow-none !outline-none ${className}`}
          />
          <span className="block w-0 h-[2px] absolute bottom-0 bg-gray-800 rounded-md transition-[width] duration-300 peer-focus:w-full "></span>
        </div>
      ) : null}
    </>
  );
}

export default Input;
