
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      errorElement : <ErrorPage></ErrorPage>,
      element : <Main></Main>,
      children : [
        {
          path : '/',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Home></Home>
        },
        {
          path : '/home/:quizId',
          loader : async ({params}) =>{
            // console.log(params)
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element : <QuizQuestion></QuizQuestion>
        },
        {
          path : 'blog',
          element : <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
