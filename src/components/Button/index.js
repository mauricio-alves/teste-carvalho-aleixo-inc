import { api } from "../../api/api";
import toast from "react-hot-toast";

export function Button({ parameter, setData }) {
  async function handleSubmit() {
    try {
      const { data } = await api.get(`/api/scrape/${parameter}`);
      console.log(data);
      setData(data.resultData);
      toast.success("Pesquisa realizada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro de busca na Amazon, tente novamente!");
    }
  }

  return (
    <>
      <button
        className="focus:outline-none text-white bg-emerald hover:bg-teal focus:ring-4 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        onClick={() => {
          handleSubmit();
        }}
      >
        Realizar pesquisa
      </button>
    </>
  );
}
