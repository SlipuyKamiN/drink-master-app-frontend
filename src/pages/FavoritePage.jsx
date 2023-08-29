// import Paginator from "components/FavoritePage/Paginator";
// import RecipesList from "components/FavoritePage/RecipesList";
// import { useGetFavoritesQuery } from "redux/recipesSlice";
// import { useSigninMutation } from "redux/authSlice";
// import { useEffect } from "react";

// const FavoritePage = () => {

//   const [dispatch, { data: userData }] = useSigninMutation();
//   const { data } = useGetFavoritesQuery('', { skip: !userData });
//   const query = "page=1&limit=8";
  
//   // const handle = () => {
//   //   dispatch({ email: "Stas@mail.com", password: "Ss123456" });
//   // }
//   useEffect(() => {
//     dispatch({ email: "Stas@mail.com", password: "Ss123456" });
//   }, [dispatch]);
  
//   // console.log(data.totalHits);
//   return (
//     <>
//       <div>FavoritePage</div>
//       <button >etnbtbte</button>
//       {data !== undefined && <RecipesList data={data} />}
//       {data.totalHits > 2 && data.totalHits !== undefined && <Paginator />}
//     </>
//   );
// };

// export default FavoritePage;
