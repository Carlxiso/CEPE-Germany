import Link from "next/link";
import Image from "next/image";
import image_hero from "@/public/hero_img.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={image_hero}
        fill
        className="object-cover object-top"
        alt="Letters"
        quality={100}
        placeholder="blur"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Abarca a língua portuguesa
        </h1>
        <p className="py-6 text-lg text-primary-50 max-w-3xl mx-auto mb-12">
          Abarcar a língua portuguesa é abraçar a nossa história, a família e as
          raízes que nos definem. É manter viva uma herança cultural única e, ao
          mesmo tempo, ganhar uma ferramenta valiosa para o teu futuro académico
          e profissional. Abraça este super poder!
        </p>
        <Link
          href="/pre-inscricao"
          className="bg-primary-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Pré-Inscrição
        </Link>
      </div>
    </main>
  );
}
