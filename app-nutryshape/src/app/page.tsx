import Image from "next/image";
import Link from "next/link";
import { IoIosFitness } from "react-icons/io";

const Home = () => {
  return (
    <div className="p-12 flex flex-col gap-24 ">
      <header className="flex justify-around items-center">
        <Image alt="" src={"/nutryshape.png"} width={150} height={150} />
        <div className="flex gap-6 text-primaryGray">
          <Link href={""} className="hover:text-secondaryBlue">
            Instagram
          </Link>
          <Link href={""} className="hover:text-secondaryBlue">
            Twitter
          </Link>
          <Link href={""} className="hover:text-secondaryBlue">
            Planos
          </Link>
          <Link href={"/termsofuse"} className="hover:text-secondaryBlue">
            Termos de Uso
          </Link>
        </div>
        <Link
          href={"/register"}
          className="py-2 px-6 rounded-lg border-2 border-primaryBlue hover:bg-primaryBlue hover:font-medium"
        >
          Cadastrar
        </Link>
      </header>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white font-bold text-5xl w-[50rem] text-center">
          Nunca foi tão interessante ter uma vida{" "}
          <span className="text-primaryBlue">saudável</span>
        </h1>
        <p className="text-primaryGray text-lg w-[41rem] text-center">
          A plataforma perfeita para você dar aquele{" "}
          <span className="text-primaryBlue font-medium">start</span> na mudança
          do seu estilo de vida, rápido e fácil!
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Image alt="" src={"/imagelandingpage.svg"} width={700} height={700} />
        <div className="absolute flex gap-24">
          <div className="flex flex-col gap-10">
            <div className="py-5 px-10 backdrop-blur-md bg-gradient-to-r from-[rgba(255,255,255,0.20)] to-[rgba(255,255,255,0.10)] rounded-xl mr-32">
              <div className="flex justify-start flex-col gap-2">
                <IoIosFitness className="text-6xl" />
                <div>
                  <h3 className="text-xl font-medium">Treinos</h3>
                  <p className="text-primaryGray font-light">
                    Gere treinos de acordo com sua necessidade.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 px-10 backdrop-blur-md bg-gradient-to-r from-[rgba(255,255,255,0.20)] to-[rgba(255,255,255,0.10)] rounded-xl ml-32">
              <div className="flex justify-start flex-col gap-2">
                <IoIosFitness className="text-6xl" />
                <div>
                  <h3 className="text-xl font-medium">Plataforma</h3>
                  <p className="text-primaryGray font-light">
                    Interface totalmente acessível e agradável para você.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="py-5 px-10 backdrop-blur-md bg-gradient-to-r from-[rgba(255,255,255,0.20)] to-[rgba(255,255,255,0.10)] rounded-xl ml-32">
              <div className="flex justify-start flex-col gap-2">
                <IoIosFitness className="text-6xl" />
                <div>
                  <h3 className="text-xl font-medium">Dietas</h3>
                  <p className="text-primaryGray font-light">
                    Gerencie suas dietas de acordo com o seu gosto.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 px-10 backdrop-blur-md bg-gradient-to-r from-[rgba(255,255,255,0.20)] to-[rgba(255,255,255,0.10)] rounded-xl mr-32">
              <div className="flex justify-start flex-col gap-2">
                <IoIosFitness className="text-6xl" />
                <div>
                  <h3 className="text-xl font-medium">Tudo organizado</h3>
                  <p className="text-primaryGray font-light">
                    Toda sua rotiona de alimentação e treino, em um só lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
