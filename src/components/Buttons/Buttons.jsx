

function Button({ text, modifer }) {
  return <button className={`btn btn${modifer}`}>{text}</button>;
}

export default Button;
