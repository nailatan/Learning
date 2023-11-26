import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const SelectGame = () => {
    navigate(`/Select`, { replace: false });
  };

  return (
    <div>
      <FontAwesomeIcon icon={faEarthAmerica} />
      <Input
        addonBefore="Nombre"
        maxLength={15}
        onPressEnter={SelectGame}
      />
    </div>
  );
};

export default Login;
