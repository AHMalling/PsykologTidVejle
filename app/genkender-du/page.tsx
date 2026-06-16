import React from "react";
import Link from "next/link";

const conditions = [
  {
    id: "stress",
    title: "Stress",
    questions: [
      "Er kalenderen altid fyldt op?",
      "Oplever du fysiske symptomer som søvnbesvær eller åndenød?",
      "Dukker opgaver op i baghovedet, når du burde holde fri?",
    ],
    paragraphs: [
      "Er kalenderen fyldt op med aftaler hele tiden? Kommer du aldrig i bund med dine opgaver på arbejdet eller de mange gøremål hjemme? Er det svært at overskue dagen for ikke at tale om en ny uge, der venter? Dukker der hele tiden opgaver op i baghovedet, når du egentlig burde holde fri? Oplever du fysiske symptomer som fx hovedpine, åndenød, svimmelhed, hjertebanken, søvnbesvær? Har du overvejet eller måske endda erkendt, at du kan have stress?",
      "Det kan være lettere sagt end gjort, at stoppe op før travlhed udvikler sig til egentlig stress. Og stress er ikke noget, man bare lægger bag sig, men noget man aktivt skal forholde sig til.",
      "Uanset hvad din stress har sin baggrund i, findes der måder at arbejde med det på. Ingen fortjener et liv med stress.",
    ],
  },
  {
    id: "depression",
    title: "Depression",
    questions: [
      "Har du svært ved at finde glæden ved ting, du tidligere nød?",
      "Foretrækker du at blive under dynen frem for at deltage i sociale ting?",
      "Er hverdagen mest grå og farveløs?",
    ],
    paragraphs: [
      "Har du svært ved at finde glæden ved ting, som du tidligere er blevet glad af? Har du i overvejende grad mere lyst til at blive hjemme under dynen end at deltage i sociale arrangementer? Er det svært at finde nuancerne i en hverdag, der måske mest af alt er grå? Er du træt og ofte trist?",
      "Livet går op og ned, og de fleste af os kan i perioder nikke genkendende til symptomer som dem ovenfor. For nogen nøjes symptomerne dog ikke med at være til stede i en kortere periode, og ingen bør have det sådan over lang tid.",
      "Måske genkender du, at symptomerne kan have mere styrke i nogle perioder end andre. Det er rart, når symptomerne letter, men også urimelig svært, når de lægger sig ned omkring dig igen. At have faste holdepunkter kan lette de svære faser og fungere som motivation til selv små ændringer.",
    ],
  },
  {
    id: "angst",
    title: "Angst",
    questions: [
      "Undgår du bevidst bestemte situationer af frygt?",
      "Forhindrer angsten dig i at leve, som du gerne vil?",
      "Har du pludselig fået angst efter en konkret hændelse?",
    ],
    paragraphs: [
      "Er du bange for at være alene eller måske bange for mørke? Døjer du med eksamensangst? Er du bange for at fejle? Er du bange, når du er blandt mange mennesker? Har du en konkret fobi? Forhindrer din angst dig i at gøre de ting, du gerne vil? Undgår du bevidst bestemte situationer af frygt for at få et angstanfald?",
      "Har du altid haft det sådan, eller har en eller flere konkrete hændelser udløst din angst?",
      "At kunne blive bange og handle på sin frygt er i sin helt rene form en overlevelsesmekanisme. Det er sundt at kunne handle på sin frygt, for det kan redde dit liv. Når du har angst, reagerer du ikke længere kun på situationer med reel fare. Du kommer til at reagere på ting og skærme dig selv fra situationer, hvor sandsynligheden for fare er meget lille. Det kan betyde, at du får svært ved at leve dit liv, som du gerne vil. Vi vil gerne hjælpe dig til at kunne gøre mere af det, du gerne vil.",
    ],
  },
  {
    id: "ocd",
    title: "OCD",
    questions: [
      "Har du rutiner, du er nødt til at gennemføre?",
      "Dobbelttjekker du om du fik slukket for ting?",
      "Føler du, at ritualer giver kontrol, men tager for meget tid?",
    ],
    paragraphs: [
      "Har du det bedst, når du har styr på alting? Kan du ikke lade være med at rette på ting, en anden har gjort anderledes end du ville have gjort det? Har du rutiner, du bliver nødt til at gennemføre i løbet af dagen eller før du tager hjemmefra? Har du nogen dage svært ved at tage hjemmefra, fordi noget er gået skævt og du bekymrer dig over, hvilke konsekvenser det kan få?",
      "Måske kan du genkende, at hvad der engang bare var uskyldige vaner er gået hen og blevet tidskrævende procedurer, hvor du skal dobbelttjekke om du fik slukket diverse ting, alt for hyppigt skal vaske hænder og gøre rent hele tiden. Måske har du dine helt egne tidskrævende procedurer, som hindrer dig i at slappe af og leve et liv uden bekymringer.",
      "Det giver formentlig en følelse af kontrol at udføre dine ritualer, men i virkeligheden har du ikke længere kontrollen over dit liv. Du har brug for at mærke en balance igen.",
    ],
  },
  {
    id: "identitet",
    title: "Identitetsspørgsmål",
    questions: [
      "Er du i tvivl om, hvad der er det rigtige valg for dig?",
      "Kan du mærke, at du har lyst til at gå en anden vej?",
      "Hvem er du, når alt omkring dig forandrer sig?",
    ],
    paragraphs: [
      "Vi lever i en tid, hvor alting foregår i et hurtigt tempo. Faktisk skal man foretage et aktivt valg, hvis man gerne vil skrue ned for det hurtige tempo i ens dagligdag. Det er alt for nemt at følge med i det høje gear, hverdagen og weekenderne indbyder til.",
      "Vi oplever, at mange unge, som står overfor at træffe afgørende valg i forhold til ungdomsuddannelse eller videregående uddannelse, nemt kan komme i tvivl om, hvad der er det rigtige at gøre. Den slags beslutninger kræver, at man kender sig selv og tør stole på, hvad man selv kan mærke er rigtigt.",
      'Vores identitet forbindes med den "jeg er". Vi formes af de mennesker, vi omgiver os med, og vi formes af det, vi beskæftiger os med. Hvad sker der, hvis din partner pludselig vil skilles? Hvad hvis du bliver opsagt fra dit arbejde? Hvem er du så uden?',
    ],
  },
  {
    id: "diagnose",
    title: "Et liv med en diagnose",
    questions: [
      "Har du som barn eller nyligt fået stillet en diagnose?",
      "Giver din diagnose anledning til nye spørgsmål om dig selv?",
      "Oplever du at blive begrænset af din diagnose?",
    ],
    paragraphs: [
      "Har du som barn eller for nyligt fået stillet en diagnose? Fx en angstdiagnose, en autismediagnose, en opmærksomhedsforstyrrelse (ADHD/ADD) eller andet? Måske har din diagnose medført en afklaring og dybere forståelse omkring, hvorfor du har det på bestemte måder.",
      "Nogen oplever dog, at en diagnose ud over at give svar også giver anledning til nye spørgsmål. For hvem er du med din diagnose? Føler du, at du bliver sat i bås? Oplever du, at du bliver begrænset af din diagnose?",
      "Hos Psykologtid Vejle har vi talt med mange, som lever med en diagnose. Vi ved, at der er begrænsede muligheder for egentlige forløb, efter en diagnose stilles i psykiatrien. Hos os er mulighederne åbne, og vi hjælper dig gerne på vej til et godt liv med din diagnose.",
    ],
  },
];

export default function GenkenderDu() {
  return (
    <div className="bg-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Genkender du dig selv?
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Ingen to mennesker er ens, men mange af os kan nikke genkendende til
            de udfordringer, vi beskriver her. Du behøver ikke passe ind i en
            kasse — det vigtigste er, at du har det godt.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {conditions.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-md transition-all hover:bg-orange-500 hover:text-white"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      {conditions.map((condition, index) => (
        <section
          key={condition.id}
          id={condition.id}
          className={`scroll-mt-16 py-16 ${index % 2 === 0 ? "bg-white" : "bg-orange-50"}`}
        >
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-10 w-1.5 rounded-full bg-orange-500"></div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {condition.title}
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 rounded-xl bg-orange-500 p-6 text-white">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-100">
                      Genkender du...?
                    </h3>
                    <ul className="space-y-3">
                      {condition.questions.map((q, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <span className="mt-0.5 font-bold text-orange-200">
                            &rarr;
                          </span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-5 lg:col-span-2">
                  {condition.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-gray-700">
                      {p}
                    </p>
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/kontakt"
                      className="inline-block rounded-full border-2 border-orange-500 px-6 py-2 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
                    >
                      Book en samtale &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Kender du dig igen i noget af det?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Det kræver mod at tage det første skridt. Vi er klar til at modtage
            dig.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-orange-600"
            >
              Book en samtale
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
