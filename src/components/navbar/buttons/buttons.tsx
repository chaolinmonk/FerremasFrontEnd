import Link from "next/link" // o <a> si no usas Next.js
import { ElementType } from "react";

interface NavBarButtonProps{
  icon?:string;
  to?:string;
  label:string;
}

export default function NavBarButton({ icon: Icon, to = "#", label }:NavBarButtonProps) {
  return (
    <Link href={to}
     className="grid grid-cols-8 bg-[#393e41] hover:bg-[#4a5054]"
     >
      {/* Columna del ícono */}
      <div className="grid place-items-center col-span-2 border-t border-white">
        <img src={Icon} alt=""/>
      </div>

      {/* Columna del texto */}
      <div className="grid place-items-center col-span-6 border-t border-white">
        <span className="text-white text-sm text-[1.1rem]">{label}</span>
      </div>
    </Link>
  );
}
