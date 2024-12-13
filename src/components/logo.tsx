import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Image
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="logo imgage"
      width={53}
      height={17}
    />
  );
}
