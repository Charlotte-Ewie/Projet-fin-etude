import { useSelector } from "react-redux";

const useVeterinary = () => {
  const profil = useSelector((state) => state.user.profil);

  const roleVeterinary = () => {
    const { role } = profil;
    return role === "V";
  };

  return { roleVeterinary };
};

export default useVeterinary;
