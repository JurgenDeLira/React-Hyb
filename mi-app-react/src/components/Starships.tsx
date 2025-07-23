import { useState, useEffect } from "react";

export default function Starships() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return <></>;
}