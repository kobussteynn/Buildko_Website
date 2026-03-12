// src/components/SecondSection.jsx
import * as React from "react";
import { Building2, Home, MapPin, ClipboardList, HardHat, CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    icon: Building2,
    title: "Apartment blocks",
    points: ["Groundworks to handover", "Multi-team coordination", "Consistent QC & reporting"],
  },
  {
    icon: MapPin,
    title: "Estates & developments",
    points: ["Phased delivery", "Programme-driven planning", "Reliable subcontractor management"],
  },
  {
    icon: Home,
    title: "New houses",
    points: ["Turnkey builds", "Neat finishes", "Strong on-site supervision"],
  },
];

const STEPS = [
  { icon: ClipboardList, title: "Scope & programme", desc: "Review plans/specs, confirm scope, set milestones." },
  { icon: HardHat, title: "Build management", desc: "Daily coordination, progress tracking, quality checks." },
  { icon: CheckCircle2, title: "Snag & handover", desc: "Final inspections, snag close-out, clean handover pack." },
];

export default function SecondSection() {
  const quoteHref = "/contact?reason=quote";

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Different layout: split panel with strong visual left side */}
        <div className="overflow-hidden rounded-3xl border bg-background">
          <div className="grid lg:grid-cols-12">
            {/* Left visual panel */}
            <div className="lg:col-span-5">
              <div className="h-full bg-gradient-to-br from-teal-600 to-teal-500 p-8 text-white md:p-10">
                <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                  New builds • Managed end-to-end
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Bigger projects, clean delivery.
                </h3>

                <p className="mt-3 max-w-md text-white/90">
                  From planning to final handover, we run the build with clear communication,
                  tight site management, and finishes you’ll be proud of.
                </p>

                {/* quick “tiles” (not cards) */}
                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <div className="text-xs text-white/80">Built for</div>
                    <div className="mt-1 text-sm font-semibold">Scale</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <div className="text-xs text-white/80">Focus</div>
                    <div className="mt-1 text-sm font-semibold">Quality</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <div className="text-xs text-white/80">Delivery</div>
                    <div className="mt-1 text-sm font-semibold">On track</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="rounded-full bg-white text-teal-700 hover:bg-white/90">
                    <a href={quoteHref} className="inline-flex items-center gap-2 font-semibold">
                      Request a Quote <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right content panel */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10">
                {/* Project types as rows */}
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">What we build</div>
                    <div className="mt-1 text-lg font-semibold">Project types</div>
                  </div>
                  <div className="hidden h-px flex-1 bg-border lg:block" />
                </div>

                <div className="mt-6 space-y-6">
                  {PROJECTS.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.title} className="grid gap-4 sm:grid-cols-12">
                        <div className="sm:col-span-2">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500/10">
                            <Icon className="h-5 w-5 text-teal-700" />
                          </div>
                        </div>

                        <div className="sm:col-span-10">
                          <div className="text-base font-semibold">{p.title}</div>
                          <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                            {p.points.map((pt) => (
                              <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Vertical timeline process */}
                <div className="mt-10">
                  <div className="text-xs font-medium text-muted-foreground">How we work</div>
                  <div className="mt-1 text-lg font-semibold">A simple process</div>

                  <div className="mt-6 space-y-5">
                    {STEPS.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.title} className="relative pl-10">
                          {idx < STEPS.length - 1 ? (
                            <div className="absolute left-[18px] top-9 h-[calc(100%-12px)] w-px bg-border" />
                          ) : null}

                          <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-2xl border bg-background">
                            <Icon className="h-4 w-4 text-teal-700" />
                          </div>

                          <div className="rounded-2xl border bg-muted/10 p-4">
                            <div className="text-sm font-semibold">
                              {idx + 1}. {s.title}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground">
                    Share your plans or a short brief — we’ll respond with next steps and a clear quote.
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
