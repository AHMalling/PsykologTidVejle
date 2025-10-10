import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex justify-center bg-gray-700 py-5 text-white/90">
      <div className=" col-span-3 col-start-5 text-left ">
        <p>Psykologtid Vejle</p>
        <p>Andkærhus</p>
        <p>Andkærvej 19</p>
        <p>7100 Vejle</p>
        <p>Telefon: 25331100</p>
        <p>Mail: psykologtidvejle@protonmail.com</p>
      </div>
      {/*       <div className="col-span-2 col-start-8 mr-10 hidden sm:grid">
        <Image
          src={require("@/assets/DanskPsykologForening-300x103-1.png")}
          alt="Dansk Psykolog Foreningslogo"
          className="z-20 "
          width={200}
          height={75}
        />
      </div> */}
    </section>
  );
}
