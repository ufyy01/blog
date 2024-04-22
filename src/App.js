import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Blog, { blogLoader } from './Pages/Blog';
import Bloglayout from './Layouts/Bloglayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='blog' element={<Bloglayout />}>
        <Route index element={<Blog />} loader={blogLoader} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}


export default App;
