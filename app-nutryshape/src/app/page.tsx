import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-12">
      <header className="flex justify-around">
        <Image alt="" src={"/nutryshape.png"} width={150} height={150} />
        <div className="flex gap-6 text-gray-500">
          <Link href={""}>Instagram</Link>
          <Link href={""}>Twitter</Link>
          <Link href={""}>Planos</Link>
          <Link href={""}>Termos de Uso</Link>
        </div>
        <button>Cadastrar</button>
      </header>
    </div>
  );
};

export default Home;
