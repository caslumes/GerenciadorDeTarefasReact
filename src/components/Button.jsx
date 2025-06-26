function Button(props) {
  return (
    <button
      className={`bg-slate-400 text-white p-2 rounded-md text-left flex`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
