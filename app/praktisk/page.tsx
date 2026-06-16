import Image from "next/image";
import React from "react";
import Link from "next/link";
import mapImage from "@/assets/Kort-Andkaerhus-1.jpg";

const infoItems = [
  {
    title: "Her finder du os",
    content: (
      <>
        <p>
          Psykologtid Vejle har lokaler i{" "}
          <a
            href="https://andkaerhus.dk/"
            className="font-medium text-orange-600 hover:text-orange-700"
          >
            Andkærhus
          </a>
          , som ligger tæt på motorvej E45 afkørsel Vejle C.
        </p>
        <p className="mt-2">
          Vores lokaler ligger lige inden for døren til højre. Du vil kunne se
          vores logo på døren ind til venteområdet, hvor du kan tage plads.
        </p>
      </>
    ),
  },
  {
    title: "Parkering",
    content: <p>Der er gratis parkering lige ud for indgangen.</p>,
  },
  {
    title: "Offentlig transport",
    content: (
      <>
        <p>
          Fra Banegårdspladsen i Vejle Centrum kan du tage bus til Andkærhus.
        </p>
        <p className="mt-2">
          Der forefindes et busstoppested 100 m. fra Andkærhus, men også andre
          stop findes i gåafstand. Undersøg den bedste løsning for dig på{" "}
          <a
            href="https://www.rejseplanen.dk/"
            className="font-medium text-orange-600 hover:text-orange-700"
          >
            Rejseplanens hjemmeside
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "For gangbesværede",
    content: <p>Der er god adgang for gangbesværede.</p>,
  },
];

export default function Praktisk() {
  return (
    <div className="bg-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Praktisk information
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Alt du skal vide, inden du møder op til din første samtale
          </p>
        </div>
      </section>

      {/* Map + address */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              {/* Map image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={mapImage}
                  alt="Kort over Andkærhus, Vejle"
                  className="h-auto w-full object-cover"
                  placeholder="blur"
                />
              </div>

              {/* Address card */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-orange-500 p-8 text-white shadow-lg">
                  <h2 className="mb-6 text-2xl font-bold">Vores adresse</h2>
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                        Sted
                      </p>
                      <p className="mt-1 text-orange-50">
                        Andkærhus
                        <br />
                        Andkærvej 19
                        <br />
                        7100 Vejle
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                        Telefon
                      </p>
                      <a
                        href="tel:25331100"
                        className="mt-1 block hover:text-orange-200"
                      >
                        25 33 11 00
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                        E-mail
                      </p>
                      <a
                        href="mailto:psykologtidvejle@protonmail.com"
                        className="mt-1 block break-all hover:text-orange-200"
                      >
                        psykologtidvejle@protonmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Nær motorvejen
                    </span>{" "}
                    — Andkærhus ligger tæt på E45, afkørsel Vejle C, og er let
                    at finde uanset om du kommer i bil eller med bus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-3xl font-bold text-gray-800">
              Transport & adgang
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {infoItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-orange-50 p-6 ring-1 ring-orange-200"
                >
                  <h3 className="mb-3 text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <div className="text-sm leading-relaxed text-gray-600">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Klar til at booke en tid?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Vi ser frem til at tage godt imod dig
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-orange-600"
            >
              Kontakt os
            </Link>
            <Link
              href="/priser"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-white hover:text-gray-800"
            >
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
