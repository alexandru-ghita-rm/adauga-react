import { useState, useEffect } from "react";
import AnuntList from "../components/Anunturi/AnuntList";

function AllAnunturiPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAnunturi, setLoadedAnunturi] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-react-app-ddf88-default-rtdb.europe-west1.firebasedatabase.app/Anunturi.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

      const Anunturi = [];

      for (const key in data) {
        const Anunt = {
          id: key,
          ...data[key]

        };

        Anunturi.push(Anunt);
      }
        setIsLoading(false);
        setLoadedAnunturi(Anunturi);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Anunturile mele</h1>
      <AnuntList Anunturi={loadedAnunturi} />
    </section>
  );
}

export default AllAnunturiPage;
