import { initializeApp } from "firebase/app";
import { NativeBaseProvider } from "native-base";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loading } from "./components";
import { getAuth } from "firebase/auth";

const Login = lazy(() => import("./pages/authentication/login"));
const RecoveryPassword = lazy(() => import("./pages/authentication/recovery-password"));
const ProductList = lazy(() => import("./pages/product/list"));
const UserList = lazy(() => import("./pages/user/list"));
const StockList = lazy(() => import("./pages/stock/list"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));

const firebaseConfig = {
  apiKey: "AIzaSyC6xwnd-eyn3gf7V1CNgC7wyz4wfXdDtTI",
  authDomain: "project-managment-2024.firebaseapp.com",
  projectId: "project-managment-2024",
  storageBucket: "project-managment-2024.appspot.com",
  messagingSenderId: "646297068260",
  appId: "1:646297068260:web:d516632ddbc58ed62142f1"
};

const App = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <NativeBaseProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard app={app} auth={auth}/>} />
            <Route path="/dashboard" element={<Dashboard app={app} auth={auth}/>} />
            <Route path="/login" element={<Login app={app} auth={auth}/>} />
            <Route path="/recovery-password" element={<RecoveryPassword app={app} auth={auth}/>} />
            <Route path="/product" element={<ProductList app={app} auth={auth}/>} />
            {/* TODO: Modificar para form */}
            <Route path="/product/:id" element={<ProductList app={app} auth={auth}/>} />
            <Route path="/user" element={<UserList app={app} auth={auth}/>} />
            {/* TODO: Modificar para form */}
            <Route path="/user/:id" element={<UserList app={app} auth={auth}/>} />
            <Route path="/stock" element={<StockList app={app} auth={auth}/>} />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;
