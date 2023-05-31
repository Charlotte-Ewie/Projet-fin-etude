import { useSelector } from "react-redux";

const useUser = () => {
  const user = useSelector((state) => state.user);

  const isLogged = () => {
    const { token } = user;
    return token !== "";
  };

  return { isLogged };
};

export default useUser;
