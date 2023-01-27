import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/logIn"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { Component } from 'react';
// import FormPhoneBook from './FormPhoneBook/FormPhoneBook';
// import ContactList from './Contacts/ContactsList';
// import Filter from './Filter/Filter';
// import Section from './Section/Section';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectIsLoading } from 'redux/selectors';
// import { selectError } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <Section title="PhoneBook">
//         <FormPhoneBook />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList />
//       </Section>
//     </div>
//   );
// };

export default App;
