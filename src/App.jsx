import { initializeApp } from "firebase/app";
import './App.css';
import { NativeBaseProvider } from "native-base";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loading } from "./components";

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

  return (
    <NativeBaseProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="/product" element={<ProductList />} />
            {/* TODO: Modificar para form */}
            <Route path="/product/:id" element={<ProductList />} />
            <Route path="/user" element={<UserList />} />
            {/* TODO: Modificar para form */}
            <Route path="/user/:id" element={<UserList />} />
            <Route path="/stock" element={<StockList />} />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;
