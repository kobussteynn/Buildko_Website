// src/layouts/Home/FirstSection.jsx
import * as React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const COMPANY = {
  area: "Mossel Bay - George, South Africa",
  whatsappE164NoPlus: "27815864848",
};

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "End-to-end builds",
    desc: "We take care of the full build - from planning and scheduling to final handover.",
  },
  {
    icon: CheckCircle2,
    title: "Quality workmanship",
    desc: "Sharp finishes, trusted materials, and detail you can see in the end result.",
  },
  {
    icon: Clock,
    title: "On time & on budget",
    desc: "Clear milestones, regular updates, and pricing that stays transparent.",
  },
];

const CHECKS = [
  "Apartment blocks & estates",
  "New houses (turnkey builds)",
  "Light commercial projects",
  "Free quotes and site visits",
];

export default function HomeIntroSection() {
  const waHref = `https://wa.me/${COMPANY.whatsappE164NoPlus}`;
  const quoteHref = "/contact?reason=quote";

  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              Serving {COMPANY.area}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Build once, build right - <span className="text-teal-600">new builds</span> with solid finishes.
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Planning a new build? We deliver apartment blocks, estates, and houses with hands-on
              project management, neat workmanship, and finishes that last - so the build runs smoothly
              from start to sign-off.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-teal-500 text-white hover:bg-teal-600">
                <Link to={quoteHref} className="inline-flex items-center gap-2 font-semibold">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {CHECKS.map((c) => (
                <div key={c} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                  <span className="text-muted-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {HIGHLIGHTS.map((h) => {
                const Icon = h.icon;
                return (
                  <Card key={h.title} className="rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
                          <Icon className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <div className="text-base font-semibold">{h.title}</div>
                          <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="rounded-2xl border bg-muted/10 p-5">
                <div className="text-sm font-semibold">Fast quote turnaround</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send your plans, BOQ, or a short brief on WhatsApp - we will review it and come back with
                  clear next steps and a straight quote.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="rounded-full">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Message us now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
