import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from './contexts/UserContext';
import { GlobalStyle } from './styles/reset';
import { useToken } from './hooks/useToken';

export default function App() {
  return (
    <>

      <ToastContainer />
        <UserProvider>
          <BrowserRouter>
           <GlobalStyle />
            <Routes>
              <Route path="/" element={<EventsDashboard />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/event/:eventId" element={<Event />} />

              <Route path="/user" element={
                <ProtectedRoute>
                  <h1>user page</h1>
                </ProtectedRoute>}
              />
              <Route path="/creator" element={
                <ProtectedRoute>
                  <h1>creator page</h1>
                </ProtectedRoute>}
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
    </>
  );
}

function ProtectedRoute({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}
