import React from "react";
import Link from "next/link";

export default function Priser() {
  return (
    <div className="bg-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Priser og betingelser
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Transparente priser og gode betingelser for psykologhjælp i Vejle
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Individual */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-800">
                    Individuelle samtaler
                  </h3>
                  <p className="text-sm text-gray-500">Personlig psykologhjælp</p>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-orange-500">
                    1.050,-
                  </div>
                  <div className="mt-1 text-sm text-gray-400">50 minutter</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Autoriseret psykolog",
                    "Professionel hjælp",
                    "Tilpasset dit tempo",
                    "Fuld tavshedspligt",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Young people — highlighted */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-orange-400 bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                Særpris
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-800">
                    Studerende & unge
                  </h3>
                  <p className="text-sm text-gray-500">Under 25 år</p>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-orange-500">
                    950,-
                  </div>
                  <div className="mt-1 text-sm text-gray-400 line-through">
                    1.050,-
                  </div>
                  <div className="text-sm text-gray-400">50 minutter</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "100 kr. rabat for unge",
                    "Samme høje kvalitet",
                    "Forståelse for ungelivet",
                    "Forældre kan kontakte os",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Parental guidance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-800">
                    Forældresparring
                  </h3>
                  <p className="text-sm text-gray-500">Vejledning til forældre</p>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-orange-500">
                    1.250,-
                  </div>
                  <div className="mt-1 text-sm text-gray-400">75 minutter</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Længere sessioner",
                    "PPR-erfaring",
                    "Fokus på barnets trivsel",
                    "Praktiske redskaber",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilskud / Betaling / Afbud */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold text-gray-800">
              Praktisk information
            </h2>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-orange-50 p-6 ring-1 ring-orange-200">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  Tilskud
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Vi kan desværre ikke modtage klienter med henvisning fra egen
                  læge. Er du dog medlem af Sygeforsikringen "danmark", kan du
                  få tilskud — op til <strong>450 kr.</strong> for unge 18–25
                  år, og op til <strong>300 kr.</strong> for andre. Vi sørger
                  for ugentlig indberetning. Gør os opmærksom på det ved første
                  samtale.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6 ring-1 ring-orange-200">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  Betaling
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Betaling foregår via{" "}
                  <strong>MobilePay eller bankoverførsel</strong> efter hver
                  samtale. Det er nemt og fleksibelt.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6 ring-1 ring-orange-200">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  Afbud
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Afbud meldes i så god tid som muligt på sms eller mail, og{" "}
                  <strong>senest 24 timer</strong> før aftalen. Ved udeblivelse
                  eller for sent afbud opkræves halv takst.
                </p>
              </div>
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
            Vi har kort ventetid og ser frem til at høre fra dig
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-orange-600"
            >
              Book en samtale
            </Link>
            <Link
              href="/vi-tilbyder"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-white hover:text-gray-800"
            >
              Se vores tilbud
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
