import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense} from "react";

const Nav = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Route>
    </Routes>
  </Suspense>
);
};

export default Nav;
