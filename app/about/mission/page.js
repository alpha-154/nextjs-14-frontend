import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import ss from "@/public/images/ss.png"


function Mission() {
  return (
    <main className="mt-10">
      <div>
        Our mission Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
        provident error suscipit obcaecati reprehenderit nesciunt vitae
        laboriosam atque consequuntur fugiat.
      </div>
      <div className="w-[600px]">
        <Image placeholder="blur" src={ss} alt="ss image"/> 
      </div> 
      <Button/>
    </main>
  );
}

export default Mission;
