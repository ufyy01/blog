import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Bloglayout from './Layouts/Bloglayout';
import BlogDetail, { blogDetailsLoader } from './Pages/BlogDetail';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Bloglayout />}>
        <Route path='blog' element={<Blog />}>
          <Route path=':id' element={<BlogDetail />} loader={blogDetailsLoader} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}


export default App;
