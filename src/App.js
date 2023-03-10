import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Component/Router/Router';

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
