import "./page.css";

import NavBarButton from "@/components/navbar/buttons/buttons";
export default function Admin(){
  return (
    <div id="bg" className="w-full">
      <div className="grid grid-cols-6 gap-4 margin-0">
        <div id="navbar" className="grid grid-rows-7 col-span-1 p-4">
          <div id="Logo" className="row-span-1 bg-[#393e41]">
            <h1>F<span>ERREMA</span>X</h1>
          </div>
          <div className="grid row-span-6 grid-rows-16">
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="Usuarios"></NavBarButton>
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="bluelabel"></NavBarButton>
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="bluelabel"></NavBarButton>
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="bluelabel"></NavBarButton>
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="bluelabel"></NavBarButton>
            <NavBarButton icon="./icons/userConfig.svg" to="/" label="bluelabel"></NavBarButton>

          </div>
        </div>
        <div id = "content" className="grid place-items-center col-span-5 bg-[#454A4E] p-4">
          
        </div>
      </div>
    </div>
  );
}