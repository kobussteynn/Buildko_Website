// src/components/AboutProcessSection.jsx
import * as React from "react";
import { ClipboardList, HardHat, CheckCircle2, LineChart, ShieldCheck, MessageSquare, BadgeCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    icon: ClipboardList,
    kicker: "Step 1",
    title: "Plan & scope",
    desc: "We review your drawings/specs and align on scope, programme, and key milestones.",
  },
  {
    icon: HardHat,
    kicker: "Step 2",
    title: "Build management",
    desc: "Tight coordination on site — scheduling, teams, suppliers, and day-to-day supervision.",
  },
  {
    icon: CheckCircle2,
    kicker: "Step 3",
    title: "Quality checks & handover",
    desc: "Snag list, final inspections, and a clean handover with everything signed off properly.",
  },
];

const PRINCIPLES = [
  {
    icon: BadgeCheck,
    title: "NHBRC aligned",
    desc: "Work is carried out in line with NHBRC requirements where applicable, with quality checks throughout.",
  },
  {
    icon: ShieldCheck,
    title: "Health & safety first",
    desc: "Structured site rules, PPE, and daily oversight to keep teams and clients protected.",
  },
  { icon: MessageSquare, title: "Clear updates", desc: "Simple communication, progress feedback, and quick answers." },
  { icon: LineChart, title: "Progress tracking", desc: "Milestones and planning that keep your timeline moving." },
];

export default function AboutProcessSection() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Center header + horizontal stepper */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            How we work
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            A clear process that keeps builds <span className="text-teal-600">on track</span>.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Good builds aren’t luck — they’re managed. Here’s how we keep timelines, quality, and communication
            steady from start to handover.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />

            <div className="grid gap-4 lg:grid-cols-3">
              {STEPS.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Card key={s.title} className="rounded-3xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium text-muted-foreground">{s.kicker}</div>
                        <div className="hidden text-xs text-muted-foreground lg:block">0{idx + 1}</div>
                      </div>

                      <div className="mt-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
                          <Icon className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <div className="text-base font-semibold">{s.title}</div>
                          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Principles strip */}
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border bg-muted/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
                    <Icon className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{p.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
