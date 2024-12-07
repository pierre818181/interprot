import { useLocation, useNavigate } from "react-router-dom";

export const usePreserveQueryParamsNavigate = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (path: string) => {
    navigate(path + search);
  };
};
