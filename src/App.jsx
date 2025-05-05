// route/App.jsx
import { RouterProvider } from 'react-router-dom';
import AppRouter from './route/AppRouter';

function App() {
  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
