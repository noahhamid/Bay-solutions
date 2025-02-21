const Button = ({ text, className, onClick, href }) => {
  return (
    <>
      {href ? (
        <a href={href}>
          <button className={className} onClick={onClick}>
            {text}
          </button>
        </a>
      ) : (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
