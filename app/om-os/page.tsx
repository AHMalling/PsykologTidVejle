import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function OmOs() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Mød vores psykologer
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Vi er Kamilla og Thea - to autoriserede psykologer med passion for
            at hjælpe mennesker videre i livet
          </p>
        </div>
      </section>

      {/* Kamilla Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="mx-auto max-w-md">
                <Image
                  src="/assets/Camilla-Porstraet-1024x1536.jpg"
                  alt="Portrræt af psykolog Kamilla Nansen"
                  width={400}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-orange-400 p-4 text-white shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-semibold">Autoriseret</p>
                    <p className="text-xs">siden 2015</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-gray-800">
                  Kamilla Nansen
                </h2>
                <p className="text-lg font-semibold text-orange-600">
                  Psykolog, Københavns Universitet 2015
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Baggrund & Erfaring
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Jeg er uddannet psykolog ved Københavns Universitet i 2015 og
                  havde under min studietid et særligt fokus på arbejdsmiljø,
                  herunder mobning og stress. Jeg er autoriseret af
                  Psykolognævnet.
                </p>
                <p className="leading-relaxed text-gray-700">
                  Som ansat hos Kolding Kommunes PPR-kontor (Pædagogisk
                  Psykologisk Rådgivning) har jeg på de forskellige
                  ungdomsuddannelser varetaget samtaleforløb med unge
                  studerende.
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Specialeområder
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Misbrug</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Angst</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Stress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Depression</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Sorg</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Identitetsspørgsmål</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Min tilgang
                </h3>
                <blockquote className="mb-4 border-l-4 border-orange-400 pl-4 italic text-gray-700">
                  "Hos mig vil du opleve, at det er hvad du har brug for, der er
                  det vigtige. En udvikling kan først finde sted, når du oplever
                  at være tilpas med at tage de emner op, du har brug for at
                  arbejde med."
                </blockquote>
                <p className="text-gray-600">
                  Vi træder oftest på de stier, som vi kender allerbedst, så det
                  at turde gå en ny vej kan være svært. Dem kan vi sammen finde.
                </p>
              </div>

              <div className="rounded-lg bg-orange-500 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">Kontakt Kamilla</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span>Telefon til praksis: 25331100</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span>kamilla@psykologtidvejle.dk</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Thea Section */}
      <section className="bg-orange-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-6 lg:order-2">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-gray-800">
                  Thea Dahl Vemmelund
                </h2>
                <p className="text-lg font-semibold text-orange-600">
                  Psykolog, Aarhus Universitet 2017
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Baggrund & Erfaring
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Jeg er uddannet psykolog fra Aarhus Universitet i 2017 og
                  autoriseret af Psykolognævnet i 2021. Jeg har tidligere
                  arbejdet med børn, unge og familier i kommunalt regi
                  (Pædagogisk Psykologisk Rådgivning).
                </p>
                <p className="leading-relaxed text-gray-700">
                  Under min studietid har jeg desuden haft tilknytning til
                  psykiatrien, herunder Klinik for OCD og Angstlidelser, samt
                  varetaget supervision og sparring med personale og ledelse på
                  skoler og i dagtilbud.
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Specialeområder
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Stress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Angst</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Depression</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Lavt selvværd</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Relationer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>OCD</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Min tilgang
                </h3>
                <blockquote className="mb-4 border-l-4 border-orange-400 pl-4 italic text-gray-700">
                  "I mit arbejde som psykolog lægger jeg stor vægt på at møde
                  dig åbent og respektfuldt. Jeg vil altid bestræbe mig på at
                  skabe et trygt og roligt rum med plads og tid til at udforske
                  det, der fylder hos dig."
                </blockquote>
                <p className="text-gray-600">
                  Jeg er optaget af sammenhængen mellem krop, følelser og
                  tanker, samt de fortællinger og overbevisninger vi bærer med
                  os. Jeg anvender elementer fra narrative og kognitive
                  tilgange.
                </p>
              </div>

              <div className="rounded-lg bg-orange-500 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">Kontakt Thea</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span>Telefon til praksis: 25331100</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span>thea@psykologtidvejle.dk</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:order-1">
              <div className="mx-auto max-w-md">
                <Image
                  src="/assets/Thea-Portraet-1024x1536.jpg"
                  alt="Portrræt af psykolog Thea Dahl Vemmelund"
                  width={400}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-orange-400 p-4 text-white shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-semibold">Autoriseret</p>
                    <p className="text-xs">siden 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Vil du gerne vide mere?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Læs mere om vores tilbud eller book en samtale
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/vi-tilbyder"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Se vores tilbud
            </Link>
            <Link
              href="/kontakt"
              className="inline-block rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-gray-800"
            >
              Book en samtale
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
