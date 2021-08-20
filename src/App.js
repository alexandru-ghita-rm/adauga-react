import { Route, Switch } from "react-router-dom";

import AllAnunturiPage from "./pages/AllAnunturi";
import NewAnuntPage from "./pages/NewAnunt";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <AllAnunturiPage />
      </Route>
      <Route path="/new-Anunt">
        <NewAnuntPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
