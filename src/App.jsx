import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';

//layouts
import DefaultLayout from './layouts/DefaultLayout';

//pages
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/recipes" Component={Recipes} />
              <Route path="/recipes/:id" Component={SingleRecipe} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
