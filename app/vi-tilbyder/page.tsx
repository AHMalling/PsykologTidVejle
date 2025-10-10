import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function viTilbyder() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Vi tilbyder
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Professionel psykologisk hjælp tilpasset dine behov og livssituation
          </p>
          
          {/* Quick Navigation */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#samtaleterapi"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-gray-800 shadow-md transition-all hover:bg-orange-500 hover:text-white">
              🗣️ Samtaleterapi
            </Link>
            <Link href="#til-dig-som-er-ung"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-gray-800 shadow-md transition-all hover:bg-orange-500 hover:text-white">
              👥 Til unge
            </Link>
            <Link href="#forældresparring"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-gray-800 shadow-md transition-all hover:bg-orange-500 hover:text-white">
              👨‍👩‍👧‍👦 Forældresparring
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Er du klar til forandring?
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <p className="text-gray-700">Har dit liv taget en uventet drejning?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <p className="text-gray-700">Udvikler dit liv sig ikke i den retning, du ønsker?</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🧠</span>
                    <p className="text-gray-700">Føler du ikke, du er i kontrol over dine tanker?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💪</span>
                    <p className="text-gray-700">Ønsker du at arbejde med dig selv og udvikle dig?</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-lg bg-orange-50 p-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Psykologtid Vejle</strong> er for dig, som ønsker at arbejde med dig selv 
                  og få øje på de vinkler, som kan være svære at finde og udvikle på alene. 
                  Hos os oplever du nysgerrighed på din livshistorie og fokus på, hvad du 
                  ønsker for dig selv fremadrettet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Samtaleterapi Section */}
      <section
        id="samtaleterapi"
        className="scroll-mt-12 bg-white py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  🗣️ Samtaleterapi
                </h2>
                <p className="text-lg text-orange-600">
                  Professionel terapeutisk støtte i et trygt rum
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Hvad kan du forvente?
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Når du vælger samtaleterapi hos os, bliver du budt velkommen i et rum, 
                  hvor vi arbejder med det, du tager op. Vi sørger for, at du får mulighed 
                  for at bringe de emner i spil, som er vigtige for dig.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Hvornår kan samtaleterapi være relevant?
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">💔</span>
                    <span className="text-gray-700">Brud med partner</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">😢</span>
                    <span className="text-gray-700">Sorg og tab</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">💼</span>
                    <span className="text-gray-700">Arbejdsrelaterede problemer</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🏥</span>
                    <span className="text-gray-700">Sygdom (dig selv eller pårørende)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">❓</span>
                    <span className="text-gray-700">Når noget ikke føles rigtigt</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🔄</span>
                    <span className="text-gray-700">Ønsket om personlig udvikling</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Sådan foregår det
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">1</span>
                    <p className="text-gray-700">Ved første samtale afstemmer vi dine håb og forventninger</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">2</span>
                    <p className="text-gray-700">Vi arbejder i dit tempo med de emner, du bringer op</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">3</span>
                    <p className="text-gray-700">Sammen finder vi nye vinkler og udvikling</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-orange-500 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  ✨ Vores løfte til dig
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span>🔒</span>
                    <span>Fuld tavshedspligt</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>🤝</span>
                    <span>Møde i øjenhøjde med respekt</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>⏰</span>
                    <span>Fleksible intervaller mellem samtaler</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>🎯</span>
                    <span>Tilpasset til lige netop dig</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link 
                  href="/kontakt"
                  className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Book en samtale
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Til unge Section */}
      <section
        id="til-dig-som-er-ung"
        className="scroll-mt-12 bg-orange-50 py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative lg:order-2">
              <Image
                src="/assets/pexels-maryia-plashchynskaya-3393793.jpg"
                alt="Ung person i reflektion"
                className="h-96 w-full rounded-lg object-cover shadow-lg"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="space-y-6 lg:order-1">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  👥 Til dig, som er ung (18+)
                </h2>
                <p className="text-lg text-orange-600">
                  Særlige priser og fokus for unge mennesker
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Genkender du dette?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🎯</span>
                    <p className="text-gray-700">Mange krav om at gøre det "rigtige" med sit liv</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🤔</span>
                    <p className="text-gray-700">Svært at navigere i, hvem man selv er</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">📚</span>
                    <p className="text-gray-700">Forventninger om uddannelse og fremtid</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">💭</span>
                    <p className="text-gray-700">Spørgsmål om selvværd og selvtillid</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Vi forstår udfordringerne
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Hos Psykologtid Vejle har vi talt med mange unge, som synes det er svært 
                  at finde ud af, hvem de er. Det kan være ekstra udfordrende, hvis du har 
                  haft en svær opvækst eller oplevet grænseoverskridende situationer.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
                  "Man kan ikke ændre på sin fortid, men vi kan have fokus på, hvad du 
                  ønsker for dig selv i fremtiden."
                </blockquote>
              </div>

              <div className="rounded-lg bg-orange-500 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  Særligt for unge
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span>💰</span>
                    <div>
                      <p className="font-semibold">Særpris for studerende</p>
                      <p className="text-sm text-orange-100">950 kr. for unge under 25 år (normalpris 1050 kr.)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span>🛡️</span>
                    <div>
                      <p className="font-semibold">Sikkerhed først</p>
                      <p className="text-sm text-orange-100">Vi har pligt til at sørge for din sikkerhed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span>👨‍👩‍👧‍👦</span>
                    <div>
                      <p className="font-semibold">Forældre velkommen</p>
                      <p className="text-sm text-orange-100">Forældre kan altid kontakte os med spørgsmål</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/kontakt"
                  className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Kontakt os som ung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forældresparring Section */}
      <section
        id="forældresparring"
        className="scroll-mt-12 bg-white py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="/assets/pexels-kindel-media-8550841.jpg"
                alt="Familie i samtale"
                className="h-96 w-full rounded-lg object-cover shadow-lg"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  👨‍👩‍👧‍👦 Forældresparring
                </h2>
                <p className="text-lg text-orange-600">
                  Professionel vejledning til forældre med fokus på barnets trivsel
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Hvornår kan forældresparring være relevant?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🤔</span>
                    <p className="text-gray-700">Når du føler dig fastlåst i forældreskabet</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">📉</span>
                    <p className="text-gray-700">Nedadgående trivsel hos dit barn</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">🧩</span>
                    <p className="text-gray-700">Dit barn har en diagnose (autisme, ADHD, ADD, angst)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500">❓</span>
                    <p className="text-gray-700">Usikkerhed om næste skridt</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Vores tilgang
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Vi har et andet fokus end traditionel familierådgivning. Vi har erfaret, 
                  at ønsket udvikling ofte sker, når voksne bliver bevidste om egne handlinger 
                  og foretager nødvendige justeringer i hverdagen.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
                  "Det er ikke børnene, der i udgangspunktet skal ændre på noget, 
                  men i stedet de voksne omkring dem, der skal arbejde med rammerne."
                </blockquote>
              </div>

              <div className="rounded-lg bg-orange-500 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  Vores erfaring
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span>🏫</span>
                    <div>
                      <p className="font-semibold">PPR-erfaring</p>
                      <p className="text-sm text-orange-100">Flere års erfaring fra Pædagogisk Psykologisk Rådgivning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span>👥</span>
                    <div>
                      <p className="font-semibold">Tværfagligt samarbejde</p>
                      <p className="text-sm text-orange-100">Erfaring med skoler, dagtilbud og familier</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span>🎯</span>
                    <div>
                      <p className="font-semibold">Fokus på trivsel</p>
                      <p className="text-sm text-orange-100">Barnets udvikling og handlemuligheder i centrum</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/kontakt"
                  className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Book forældresparring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Vil du vide mere om vores tilbud?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Vi har kort ventetid og er klar til at hjælpe dig videre
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Kontakt os
            </Link>
            <Link
              href="/priser"
              className="inline-block rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-gray-800"
            >
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}