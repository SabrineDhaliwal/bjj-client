import './Buttons.scss'

function Button({ text, modifer, type}) {
  return <button className={`btn btn${modifer}`} type={type}>{text}</button>;
}

export default Button;
