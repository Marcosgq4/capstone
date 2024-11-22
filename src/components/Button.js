import { useNavigate } from "react-router-dom";

const Button = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
