import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative mt-20 h-[600px] w-screen overflow-hidden bg-gray-400 sm:mt-0">
        <Image
          src="/assets/Gruppefoto-logo.jpg"
          alt="Gruppefoto af Psykologtid Vejle team"
          className="z-10 h-full w-full object-cover opacity-70"
          width={1000}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:justify-start sm:px-28">
          <div className="z-20 max-w-2xl rounded-lg bg-white/95 p-8 shadow-xl backdrop-blur-sm">
            <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
              Autoriseret psykolog med kort ventetid i Vejle
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Book tid til en samtale med <strong>psykolog Kamilla Nansen</strong> eller{" "}
              <strong>psykolog Thea Dahl Vemmelund</strong> og få en tid snarest.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-block rounded-full bg-black px-6 py-3 text-center font-semibold text-white transition-all hover:scale-105 hover:bg-orange-600"
              >
                Bestil tid nu
              </Link>
              <Link
                href="/om-os"
                className="inline-block rounded-full border-2 border-black px-6 py-3 text-center font-semibold text-black transition-all hover:bg-black hover:text-white"
              >
                Læs om os
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 sm:text-4xl">
              Hvad kan man tale med en psykolog om?
            </h2>
            <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                <strong>Det korte svar er alt.</strong> Intet er for stort eller for småt. 
                I samtaleterapi hos os har vi fokus på det, der er vigtigt for dig.
              </p>
              <p className="mb-4">
                Hvem du er, og hvad der har formet dig gennem livet, har betydning for 
                hvad du vælger at gøre her og nu. En samtale handler ofte om, hvordan 
                man kan bryde vaner og skabe forandring.
              </p>
              <p className="mb-6">
                Du skal ikke passe ind i en kategori for at tale med en psykolog. 
                Vi oplever dog alligevel, at det for mange er rart at mærke, de ikke 
                er alene med det, de oplever.
              </p>
              <Link 
                href="/genkender-du"
                className="inline-block rounded-full bg-orange-400 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-500"
              >
                Genkender du disse udfordringer? →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview Section */}
      <section className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Områder vi ofte arbejder med
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg bg-gray-700/50 p-6 transition-all hover:bg-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-orange-400">
                Angst
              </h3>
              <p className="leading-relaxed text-gray-300">
                Har du <span className="text-orange-400 font-semibold">angst</span>, kan det have 
                store konsekvenser for, hvordan du lever dit liv. Du kan blive begrænset i at 
                leve, som du gerne vil, og det kan føles som en fuldstændig umulig opgave at 
                tage kontrollen tilbage.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-700/50 p-6 transition-all hover:bg-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-orange-400">
                Stress
              </h3>
              <p className="leading-relaxed text-gray-300">
                Ordet <span className="text-orange-400 font-semibold">stress</span> bruges ofte til at 
                beskrive almindelig travlhed. Er du én af dem som faktisk har oplevet hvad rigtig 
                stress er, så er du ikke i tvivl. Stress er alvorligt, og det kan være svært at 
                skrue ned for tempoet.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-700/50 p-6 transition-all hover:bg-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-orange-400">
                Depression
              </h3>
              <p className="leading-relaxed text-gray-300">
                Lever du et liv med <span className="text-orange-400 font-semibold">depression</span>, 
                der kommer og går i perioder? Livet vil byde på dyk, men du har brug for også at 
                mærke, at der findes en vej ud af mørket igen. Vi er klar til at tage varmt imod dig.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-700/50 p-6 transition-all hover:bg-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-orange-400">
                Liv med diagnose
              </h3>
              <p className="leading-relaxed text-gray-300">
                At få stillet en diagnose er for mange en lettelse, men kan også medføre nye 
                spørgsmål. Hvem er jeg med min diagnose? Uanset om du har autisme, ADHD, ADD 
                eller andet, kan det føles som om, man skal lære sig selv at kende på en ny måde.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/genkender-du"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Læs mere om alle områder →
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Vores tilgang
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <blockquote className="text-lg italic leading-relaxed text-gray-700">
                  "Vi træder oftest på de stier, som vi kender allerbedst, så det at 
                  turde gå en ny vej kan være svært. For mange kan det slet ikke lade 
                  sig gøre at få øje på nye stier. Dem kan vi sammen finde."
                </blockquote>
                <footer className="mt-4 text-right">
                  <cite className="font-semibold text-orange-600">– Kamilla</cite>
                </footer>
              </div>
              
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <blockquote className="text-lg italic leading-relaxed text-gray-700">
                  "Det kræver ofte tilløb og mod at starte i terapi, og jeg vil 
                  tage omsorgsfuldt imod dig."
                </blockquote>
                <footer className="mt-4 text-right">
                  <cite className="font-semibold text-orange-600">– Thea</cite>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Services for Young People */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="/assets/pexels-maryia-plashchynskaya-3393793.jpg"
                  alt="Ung person i samtale"
                  className="h-80 w-full rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Til dig, som er ung
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Som ung kan du opleve, at der er mange krav og forventninger til dig, 
                  både fra omgivelserne og fra dig selv. Det kan handle om alt fra 
                  skolearbejde, venner, kærester og forældre, til ensomhed, angst, 
                  konflikter, vrede og tristhed.
                </p>
                <p className="text-gray-600">
                  Det kan være svært at navigere i på egen hånd, og det kan derfor være 
                  rart at tale med nogen om det, du står i. Vi tilbyder samtaler til unge 
                  fra 18 år med særlige priser for studerende.
                </p>
                <Link 
                  href="/vi-tilbyder#til-dig-som-er-ung"
                  className="inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Læs mere om samtaler for unge →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Parental Support */}
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-6 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-800">
                  Forældresparring
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Vi tilbyder sparring til forældre, der ønsker at forstå og hjælpe 
                  deres børn til bedre trivsel og balance i en måske hektisk hverdag.
                </p>
                <p className="text-gray-600">
                  Har dit barn en diagnose, fx autisme, ADHD, ADD eller angst, kan det 
                  påvirke hele jeres familie. Det kan være hjælpsomt at snakke med nogen 
                  om det og få nye perspektiver eller konkrete redskaber. Vi har flere 
                  års erfaring med dette fra PPR.
                </p>
                <Link 
                  href="/vi-tilbyder#forældresparring"
                  className="inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Læs mere om forældresparring →
                </Link>
              </div>
              
              <div className="relative lg:order-1">
                <Image
                  src="/assets/pexels-kindel-media-8550841.jpg"
                  alt="Familie i samtale"
                  className="h-80 w-full rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="bg-gray-800 py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Klar til at tage det første skridt?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Vi har kort ventetid og er klar til at hjælpe dig videre
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-block rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-orange-600"
              >
                Bestil tid nu
              </Link>
              <Link
                href="/priser"
                className="inline-block rounded-full border-2 border-white px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-white hover:text-gray-800"
              >
                Se priser
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Vi holder til i Andkærhus, Vejle &nbsp;·&nbsp; Kort ventetid &nbsp;·&nbsp; Autoriserede psykologer
            </p>
          </div>
        </div>
    </main>
  );
}
