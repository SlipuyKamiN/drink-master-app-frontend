import RecipesItem from '../FavoritePage/RecipesItem';
import scss from '../FavoritePage/RecipesList.module.scss';

const RecipesList = ({ data, removeFavorite, }) => {
 
console.log(Array.isArray(data));

    return <>
        {
            Array.isArray(data)
                ? <ul className={scss.recipesList}>
                    {data.map(({ _id, description, drink, drinkThumb }) => (
                        <RecipesItem
                            key={_id}
                            id={_id}
                            description={description}
                            drink={drink}
                            drinkThumb={drinkThumb}
                            removeFavorite={removeFavorite}
                        />
                    ))}
                </ul>
                : <ul className={scss.recipesList}>
                    {data.favorites.map(({ _id, description, drink, drinkThumb }) => (
                        <RecipesItem
                            key={_id}
                            id={_id}
                            description={description}
                            drink={drink}
                            drinkThumb={drinkThumb}
                            removeFavorite={removeFavorite}
                        />
                    ))}
                </ul>
        }
    </>
};

export default RecipesList;
