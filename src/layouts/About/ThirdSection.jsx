// src/layouts/About/ThirdSection.jsx
import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, ClipboardCheck, ShieldCheck, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

const COMPANY = {
  whatsappE164NoPlus: "27815864848",
};

const SELL_POINTS = [
  {
    icon: ClipboardCheck,
    title: "Managed end-to-end",
    desc: "One team coordinating the full build - planning, scheduling, and on-site execution.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & compliance focused",
    desc: "Strong quality control with safety-first sites and NHBRC-aligned standards where applicable.",
  },
  {
    icon: Clock,
    title: "Delivery you can trust",
    desc: "Clear milestones, honest updates, and steady progress from start to handover.",
  },
];

const QUICK_BULLETS = [
  "Apartment blocks, estates & new houses",
  "Hands-on site supervision",
  "Structured health & safety on site",
  "Clear scope and straightforward quoting",
];

export default function AboutSellerSection() {
  const waHref = `https://wa.me/${COMPANY.whatsappE164NoPlus}`;
  const quoteHref = "/contact?reason=quote";

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="overflow-hidden rounded-3xl border bg-zinc-950 text-white">
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                Ready to build?
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                A reliable build partner for <span className="text-teal-300">bigger projects</span>.
              </h2>

              <p className="mt-3 max-w-xl text-white/80">
                If you want a team that keeps the site organised, the programme moving, and the finishes clean,
                let us talk. Share your plans or brief and we will come back with clear next steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-teal-500 text-white hover:bg-teal-600">
                  <Link to={quoteHref} className="inline-flex items-center gap-2 font-semibold">
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp us
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {QUICK_BULLETS.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white/5 p-6 md:p-7">
                <div className="text-sm font-semibold">Why clients choose us</div>
                <div className="mt-5 space-y-5">
                  {SELL_POINTS.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div key={point.title} className="flex gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500/15">
                          <Icon className="h-5 w-5 text-teal-300" />
                        </div>
                        <div>
                          <div className="text-base font-semibold">{point.title}</div>
                          <p className="mt-1 text-sm text-white/75">{point.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Simple next step</div>
                  <p className="mt-1 text-sm text-white/75">
                    Tell us what you are building and where - we will guide you on the fastest way to get a clear quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
