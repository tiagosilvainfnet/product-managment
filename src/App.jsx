import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { NativeBaseProvider } from "native-base";
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { Loading, Navigation } from "./components";
import { getAuth } from "firebase/auth";

const Login = lazy(() => import("./pages/authentication/login"));
const RecoveryPassword = lazy(() => import("./pages/authentication/recovery-password"));
const ProductList = lazy(() => import("./pages/product/list"));
const ProductForm = lazy(() => import("./pages/product/form"));
const UserList = lazy(() => import("./pages/user/list"));
const UserForm = lazy(() => import("./pages/user/form"));
const StockList = lazy(() => import("./pages/stock/list"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));

// const firebaseConfig = {
//   apiKey: "AIzaSyC6xwnd-eyn3gf7V1CNgC7wyz4wfXdDtTI",
//   authDomain: "project-managment-2024.firebaseapp.com",
//   projectId: "project-managment-2024",
//   storageBucket: "project-managment-2024.appspot.com",
//   messagingSenderId: "646297068260",
//   databaseURL: "https://project-managment-2024-default-rtdb.firebaseio.com",
//   appId: "1:646297068260:web:d516632ddbc58ed62142f1"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDmGNWw3nBDu5X6sU9vU0wXJo-LU_9m32Y",
  authDomain: "mobile-first-708ca.firebaseapp.com",
  projectId: "mobile-first-708ca",
  storageBucket: "mobile-first-708ca.appspot.com",
  messagingSenderId: "195492127813",
  databaseURL: "https://mobile-first-708ca-default-rtdb.firebaseio.com",
  appId: "1:195492127813:web:b470cfdd4e7aba3a8b2f2c"
};

const App = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [route, setRoute] = useState('/dashboard');

  return (
    <NativeBaseProvider>
      <Router>
        {
          route === '/login' || route === '/recovery-password'
          ? null
          : <Navigation 
              menus={[
                {label: 'Painel', path: '/dashboard', icon: HomeIcon},
                {label: 'Produtos', path: '/products', icon: AppRegistrationIcon},
                {label: 'Estoque', path: '/stock', icon: Inventory2Icon},
                {label: 'Usuários', path: '/user', icon: GroupIcon},
              ]}
              auth={auth} />
        }
        <div style={{
          marginTop: '50px',
        }}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Dashboard setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/dashboard" element={<Dashboard setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/login" element={<Login setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/recovery-password" element={<RecoveryPassword setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/products" element={<ProductList setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/products/:id" element={<ProductForm setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/user" element={<UserList setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/user/:id" element={<UserForm setRoute={setRoute} app={app} auth={auth}/>} />
              <Route path="/stock" element={<StockList setRoute={setRoute} app={app} auth={auth}/>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;
