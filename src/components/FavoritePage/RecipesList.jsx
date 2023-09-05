import RecipesItem from './RecipesItem';
import scss from '../FavoritePage/RecipesList.module.scss';

const RecipesList = ({ data, removeResipes }) => {
    
    return <>
        <ul className={scss.recipesList}>
            {(data.result || data.favorites).map(({ _id, description, drink, drinkThumb }) => (
                <RecipesItem
                    key={_id}
                    id={_id}
                    description={description}
                    drink={drink}
                    drinkThumb={drinkThumb}
                    removeResipes={removeResipes}
                />
            ))}
        </ul>
    </>
};

export default RecipesList;
