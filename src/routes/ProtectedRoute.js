import { Navigate } from "react-router-dom";
import { handleCheckToken } from '../components/check_jwt';

const ProtectedRoute = ({ children }) => {
    const isTokenValid = handleCheckToken();
  
    // Выполнить какие-либо действия в зависимости от наличия/отсутствия токена.
    // Например, показать/скрыть UI-элементы, вывести уведомление и т.д.
    if(isTokenValid) {
      console.log("Token is valid");
      // Other actions...
    } else {
      console.log("Token is invalid or does not exist");
      // Other actions...
    }
  
    // Всегда возвращаем children, чтобы пользователь мог перейти на любую страницу.
    return children;
  };
  

export default ProtectedRoute;
