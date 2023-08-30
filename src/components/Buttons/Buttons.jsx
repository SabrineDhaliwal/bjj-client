import "./Buttons.scss";

function Button({ text, modifer, type, clickHandler}) {
  if (clickHandler) {
    return (
      <button
        onClick={clickHandler}
        className={`btn btn${modifer}`}
        type={type}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button className={`btn btn${modifer}`} type={type}>
        {text}
      </button>
    );
  }
}

export default Button;
