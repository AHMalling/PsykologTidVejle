import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Priser() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
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

      {/* Pricing Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Individual Sessions */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                    👤
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    Individuelle samtaler
                  </h3>
                  <p className="text-gray-600">Personlig psykologhjælp</p>
                </div>
                
                <div className="mb-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-orange-500">1.050,-</div>
                  <div className="text-sm text-gray-500">50 minutter</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Professionel psykologhjælp</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Autoriseret psykolog</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Tilpasset dit tempo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Fuld tavshedspligt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Young People */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl border-2 border-orange-300">
              <div className="absolute -right-4 -top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white transform rotate-12">
                POPULÆR
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                    🎓
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    Studerende & unge
                  </h3>
                  <p className="text-gray-600">Under 25 år</p>
                </div>
                
                <div className="mb-6 text-center">
                  <div className="mb-1 text-4xl font-bold text-orange-500">950,-</div>
                  <div className="text-sm text-gray-500 line-through">1.050,-</div>
                  <div className="text-sm text-gray-500">50 minutter</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">100 kr. rabat for unge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Samme kvalitet som voksne</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Forståelse for ungeudfordringer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Forældre kan kontakte os</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Parental Guidance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                    👨‍👩‍👧‍👦
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    Forældresparring
                  </h3>
                  <p className="text-gray-600">Vejledning til forældre</p>
                </div>
                
                <div className="mb-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-orange-500">1.250,-</div>
                  <div className="text-sm text-gray-500">75 minutter</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Længere sessioner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">PPR-erfaring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Fokus på barnets trivsel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-700">Praktiske redskaber</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <h2 className="mb-0">Tilskud</h2>
            <p>
              Vi kan desværre ikke modtage klienter med henvisning fra egen
              læge, men hvis du er medlem af Sygeforsikringen&nbsp;“danmark”,
              kan du få tilskud til psykologsamtaler. Unge mellem 18 og 25 år
              kan få op til 450 kr. i tilskud, andre aldersgrupper kan få op til
              300 kr. i tilskud. Vi anbefaler, at du kontakter ”danmark” for at
              høre om dine muligheder for tilskud. Vi sørger for en ugentlig
              indberetning til Sygeforsikringen “danmark”. Såfremt du ønsker
              tilskud fra ”danmark”, bedes du gøre opmærksom på det i
              forbindelse med første samtale.
            </p>

            <h2 className="mb-0">Betaling</h2>
            <p>
              Betaling foregår via MobilePay eller bankoverførsel efter hver
              samtale.
            </p>
            <h2 className="mb-0">Afbud</h2>
            <p>
              Afbud meldes i så god tid som muligt på sms eller mail, og senest
              24 timer før aftalen.{" "}
            </p>
            <p>Ved udeblivelse eller for sent afbud opkræves halv takst.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
