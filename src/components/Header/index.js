import logo from "../../assets/images/carvalho-aleixo-inc-logo.jpg";

export function Header() {
  return (
    <div className="flex justify-around p-10 mb-10 bg-tahiti text-white">
      <img
        className="max-w-64 md:hidden sm:hidden"
        src={logo}
        alt="carvalho aleixo inc logo"
      />
      <h1 className="text-2xl font-bold font-mono self-center">
        Teste Carvalho Aleixo Inc
      </h1>
    </div>
  );
}
