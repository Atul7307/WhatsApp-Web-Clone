import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

<<<<<<< HEAD
  const clientId = '652512037315-a1hsi9o414qshmtovfvnjqntp95ccf0n.apps.googleusercontent.com';
  // const clientId = '652512037315-a1hsi9o414qshmtovfvnjqntp95ccf0n.apps.googleusercontent.com';
=======
  const clientId = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';
>>>>>>> 0d78fa90298fa5243f8213e16ae34eb854210ca6

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
