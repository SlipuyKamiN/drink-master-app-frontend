const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<RestrictedRoute component={Login} />} />
        <Route
          path="register"
          element={<RestrictedRoute component={Register} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
