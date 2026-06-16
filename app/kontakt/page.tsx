"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      // Sign up free at formspree.io, create a form, and replace YOUR_FORM_ID below
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl">
            Kontakt os
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Tag det første skridt. Udfyld formularen nedenfor, og vi vender
            tilbage snarest muligt.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl bg-white p-12 text-center shadow-xl">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    Tak for din besked!
                  </h2>
                  <p className="text-gray-600">
                    Vi vender tilbage til dig hurtigst muligt — typisk inden for
                    1–2 hverdage.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800">
                    Send os en besked
                  </h2>
                  <p className="mb-6 text-gray-500">
                    Du vil få tilbudt en tid snarest muligt efter din
                    henvendelse.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        className="mb-1 block text-sm font-semibold text-gray-700"
                        htmlFor="name"
                      >
                        Navn *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        placeholder="Dit fulde navn"
                      />
                    </div>

                    <div>
                      <label
                        className="mb-1 block text-sm font-semibold text-gray-700"
                        htmlFor="email"
                      >
                        E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        placeholder="din@email.dk"
                      />
                    </div>

                    <div>
                      <label
                        className="mb-1 block text-sm font-semibold text-gray-700"
                        htmlFor="phone"
                      >
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        placeholder="+45 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label
                        className="mb-1 block text-sm font-semibold text-gray-700"
                        htmlFor="message"
                      >
                        Besked *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        placeholder="Fortæl os kort om hvad du ønsker hjælp til, eller stil et spørgsmål..."
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                        Noget gik galt. Prøv igen eller kontakt os direkte på
                        telefon.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sender..." : "Send besked"}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Dine oplysninger behandles fortroligt og deles ikke med
                      tredjepart.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="rounded-2xl bg-orange-500 p-8 text-white shadow-lg">
                <h2 className="mb-6 text-2xl font-bold">Kontaktoplysninger</h2>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                      Telefon
                    </p>
                    <a
                      href="tel:25331100"
                      className="mt-1 block text-lg hover:text-orange-200"
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
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                      Adresse
                    </p>
                    <p className="mt-1 text-orange-50">
                      Andkærhus, Andkærvej 19
                      <br />
                      7100 Vejle
                    </p>
                  </div>
                </div>
              </div>

              {/* Referral info */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Ingen henvisning nødvendig
                </h3>
                <p className="mb-3 leading-relaxed text-gray-700">
                  Hos Psykologtid Vejle kan du ikke benytte en henvisning fra
                  egen læge. Har du en henvisning, skal du kontakte en psykolog
                  med ydernummer — du kan finde en liste på{" "}
                  <a
                    href="https://www.sundhed.dk/"
                    className="font-medium text-orange-500 hover:text-orange-600"
                  >
                    sundhed.dk
                  </a>
                  .
                </p>
                <p className="leading-relaxed text-gray-700">
                  Typisk vil du opleve, at der er nogle måneders ventetid på
                  psykologer med ydernummer. Har du brug for at starte et
                  forløb op inden da, er du meget velkommen til at kontakte os.
                </p>
              </div>

              {/* Insurance info */}
              <div className="rounded-2xl bg-orange-50 p-8 ring-1 ring-orange-200">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Tilskud via forsikring
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Er du medlem af Sygeforsikringen "danmark", kan du få
                    tilskud til psykologsamtaler hos os.
                  </p>
                  <p>
                    En sundhedsforsikring (privat eller via din arbejdsgiver)
                    giver også sommetider tilskud. Undersøg om din forsikring
                    lader dig selv vælge din psykolog, da de typisk har et
                    netværk.
                  </p>
                  <div className="mt-3 rounded-lg bg-orange-100 px-4 py-3 text-sm font-medium text-orange-800">
                    Inden første samtale: send din bevilling fra
                    forsikringsselskabet til os på skrift.
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/praktisk"
                  className="inline-block rounded-full border-2 border-gray-800 px-6 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-800 hover:text-white"
                >
                  Se hvordan du finder os &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
