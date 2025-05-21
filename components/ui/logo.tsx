import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Lumunate">
      <Image src={'/WORD MARK-04.png'} alt="Lumunate Portfolio - Logo" width={110} height={32} /> 
    </Link>
  );  
}
