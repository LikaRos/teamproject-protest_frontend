import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import SharedLayout from './SharedLayout';


//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>

        {/* <Route path="/" element={<Layout />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
      	</Routes> */}
   
        <Route path="/" element={<SharedLayout />}>
				</Route>
          {/* <Route index element={<MainPage />} /> */}

          {/* <Route index element={<LoginPage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/home">
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/home">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <MainPage />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/question"
            element={
              <PrivateRoute>
                <QuestionPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/result"
            element={
              <PrivateRoute>
                <ResultPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/materials"
            element={
              <PrivateRoute>
                <MaterialsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
					  </Route> */}
      
      </Routes>
    </>
  );
};
