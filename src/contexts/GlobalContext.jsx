import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]); //recipes list (index)
    const [recipe, setRecipe] = useState({}); //single recipe (show)
    const [loading, setLoading] = useState(true); //loader that i will use in every single page that i need
    const [search, setSearch] = useState('');

    const fetchRecipes = () => {
        axios
            .get('http://localhost:8080/api/recipes')
            .then((res) => {
                setRecipes(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };




    const fetchRecipe = (id) => {
        axios
            .get(`http://localhost:8080/api/recipes/${id}`)
            .then((res) => {
                setRecipe(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    };

    const fetchSearchRecipe = (name) => {
        axios
            .get(`http://localhost:8080/api/recipes/search?name=${name}`)
            .then((res) => {
                setRecipes(res.data);
                setLoading(false);
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setRecipes([]);
                }
                setLoading(false);
            })
    };



    const value = {
        recipes,
        recipe,
        loading,
        search,
        setSearch,
        fetchSearchRecipe,
        fetchRecipes,
        fetchRecipe
    };



    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };