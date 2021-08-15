import { AppRouter } from "./AppRouter";
import './css/App.css';

export const App = () => {
  return (
      <div className="d-flex" id="content-wrapper">
        <AppRouter />
      </div>
  );
};