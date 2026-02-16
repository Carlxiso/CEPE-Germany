import Image from "next/image";
import Link from "next/link";
import logo from "@/public/cepe_logo_black.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src="/cepe_logo_black.png"
        alt="CEPE Logo"
        width="180"
        height="100"
      /> */}
      <Image src={logo} width="180" height="100" alt="CEPE Logo" quality={80} />
      {/* <div className="text-xl font-semibold">
        Coordenação do Ensino Português no Estangeiro
      </div> */}
    </Link>
  );
}
