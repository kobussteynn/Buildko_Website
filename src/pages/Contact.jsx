// src/components/ContactHeroSection.jsx
import * as React from "react";
import { PhoneCall, MessageCircle, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const COMPANY = {
  area: "Mossel Bay – George, South Africa",
  whatsappE164NoPlus: "27815864848",
  phoneTel: "+27815864848",
  email: "kobussteyn24@gmail.com",
};

const REASONS = [
  { key: "quote", label: "Request a quote" },
  { key: "call", label: "Book a call" },
  { key: "site", label: "Site visit" },
  { key: "tender", label: "Tender / BOQ pricing" },
];

const EXPECT = [
  "Quick response on WhatsApp",
  "Clear next steps and timelines",
  "Straightforward quoting",
  "Professional site coordination",
];

export default function ContactHeroSection() {
  const waHref = `https://wa.me/${COMPANY.whatsappE164NoPlus}`;
  const telHref = `tel:${COMPANY.phoneTel}`;

  const mailHref = `mailto:${COMPANY.email}`;
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    COMPANY.email
  )}`;

  const params =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const defaultReason = params?.get("reason") || "quote";

  const [reason, setReason] = React.useState(defaultReason);

  const onEmailClick = () => {
    window.location.href = mailHref;
    window.setTimeout(() => {
      window.open(gmailComposeHref, "_blank", "noreferrer");
    }, 600);
  };

  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              Contact
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Let’s talk about your build —{" "}
              <span className="text-teal-600">get a fast, clear response</span>.
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Tell us what you’re building and where. Share plans or a brief and we’ll come back with the
              next steps and a straightforward quote.
            </p>

            {/* Contact methods */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Button
                asChild
                className="w-full rounded-2xl bg-teal-500 text-white hover:bg-teal-600"
              >
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 font-semibold"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full rounded-2xl">
                <a
                  href={telHref}
                  className="flex w-full items-center justify-center gap-2 font-semibold"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call
                </a>
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full rounded-2xl"
                onClick={onEmailClick}
              >
                <span className="flex w-full items-center justify-center gap-2 font-semibold">
                  <Mail className="h-5 w-5" />
                  Email
                </span>
              </Button>
            </div>

            {/* Expectations */}
            <div className="mt-8 rounded-3xl border bg-muted/10 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/10">
                  <MapPin className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Service area</div>
                  <p className="mt-1 text-sm text-muted-foreground">{COMPANY.area}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {EXPECT.map((e) => (
                  <div key={e} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    <span className="text-muted-foreground">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <Card className="rounded-3xl">
              <CardContent className="p-6 md:p-7">
                <div className="text-sm font-semibold">What do you need?</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick the closest option — it helps us route your request and respond faster.
                </p>

                <div className="mt-5 grid gap-2">
                  {REASONS.map((r) => {
                    const active = reason === r.key;
                    return (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => setReason(r.key)}
                        className={[
                          "w-full rounded-2xl border px-4 py-3 text-left transition",
                          active ? "border-teal-600 bg-teal-500/10" : "bg-background hover:bg-muted/40",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold">{r.label}</div>
                          <ArrowRight
                            className={active ? "h-4 w-4 text-teal-700" : "h-4 w-4 text-muted-foreground"}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border bg-muted/10 p-4">
                  <div className="text-sm font-semibold">Quick tip</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The fastest way to get a quote is to WhatsApp your plans/BOQ, location, and preferred start date.
                  </p>
                </div>

                <input type="hidden" name="reason" value={reason} readOnly />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
