import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Bloglayout from './Layouts/Bloglayout';
import BlogDetail, { blogDetailsLoader } from './Pages/BlogDetail';
import Filler from './Pages/Filler';
import Error from './Pages/404';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' exact element={<Bloglayout />}>
        <Route index element={<Filler />} />
        <Route path="about" element={<Filler />} />
        <Route path="contact" element={<Filler />} />
        <Route path="news" element={<Filler />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} loader={blogDetailsLoader} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}


export default App;