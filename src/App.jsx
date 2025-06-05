import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/recipes" Component={Recipes} />
            <Route path="/recipe/:id" Component={SingleRecipe} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
