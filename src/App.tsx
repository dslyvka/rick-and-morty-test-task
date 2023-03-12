import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";

import { Characters } from "pages/Characters";
import { Character } from "pages/Character";
import { Login } from "pages/Login";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Characters />
          </PrivateRoute>
        }
      />
      <Route
        path="characters"
        element={
          <PrivateRoute>
            <Characters />
          </PrivateRoute>
        }
      />
      <Route
        path="characters/:id"
        element={
          <PrivateRoute>
            <Character />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
