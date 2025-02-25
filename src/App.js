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
import { EventsDashboard } from './pages/EventsDashboard';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { EventPage } from './pages/EventPage';
import { QueryProvider } from './contexts/QueryContext';

export default function App() {
  return (
    <>
      <QueryProvider>
        <UserProvider>
          <BrowserRouter>
           <GlobalStyle />
           <ToastContainer />
            <Routes>
              <Route path="/" element={<EventsDashboard />} />
              <Route path="/event/:eventId" element={<EventPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

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
      </QueryProvider>
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
