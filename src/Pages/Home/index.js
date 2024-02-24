import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Toaster } from "react-hot-toast";

export function Home() {
  const [data, setData] = useState([]);
  const [parameter, setParameter] = useState("");
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    setParameter(event.target.value);
  }

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center p-4">
          <h2 className="xl:text-2xl lg:text-xl md:text-xl sm:text-lg sm:font-bold  font-mono text-center">
            Faça sua pesquisa na Amazon e veja os resultados aqui!
          </h2>
        </div>
        <div className="flex justify-center my-4">
          <input
            className="w-3/5 self-center border-2 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
            type="text"
            value={parameter}
            onChange={handleChange}
            placeholder="Digite sua palavra-chave aqui..."
          />
        </div>
        <div className="flex justify-center">
          <Button setData={setData} parameter={parameter} />
        </div>
        {loading ? (
          <div className="flex justify-center p-4">
            <h2>Nenhuma pesquisa feita ainda...</h2>
          </div>
        ) : (
          <Card data={data} />
        )}
      </div>
      <Footer />
    </div>
  );
}
