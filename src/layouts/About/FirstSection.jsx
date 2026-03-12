// src/layouts/About/FirstSection.jsx

import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Clock, Building2, Home, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const COMPANY = {
  area: "Mossel Bay - George, South Africa",
};

const STATS = [
  { label: "Service area", value: COMPANY.area, icon: MapPin },
  { label: "Project types", value: "Apartment blocks - Estates - Houses", icon: Building2 },
  { label: "Delivery", value: "End-to-end build management", icon: Clock },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Built properly",
    desc: "Solid planning, tidy sites, and strong supervision to keep quality consistent.",
  },
  {
    icon: CheckCircle2,
    title: "Clear communication",
    desc: "Simple updates, clear milestones, and quick answers when you need them.",
  },
  {
    icon: Home,
    title: "Finishes that last",
    desc: "Neat detailing and reliable materials - built for long-term value.",
  },
];

export default function AboutHeroSection() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              About us
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A build team you can rely on - <span className="text-teal-600">from first plan to final handover</span>.
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              We specialise in larger new-build projects across the Garden Route. Our approach is simple:
              plan properly, manage the site tightly, and deliver clean finishes - so your project stays
              on track and stress stays low.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-teal-500 text-white hover:bg-teal-600">
                <Link to="/contact?reason=quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10">
                        <Icon className="h-4 w-4 text-teal-700" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                        <div className="mt-1 text-sm font-semibold">{stat.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="rounded-3xl">
              <CardContent className="p-6 md:p-7">
                <div className="text-sm font-semibold">What we are known for</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The difference is in the planning and the details - our team keeps the build organised,
                  tidy, and moving forward.
                </p>

                <div className="mt-5 space-y-4">
                  {VALUES.map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="flex gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10">
                          <Icon className="h-4 w-4 text-teal-700" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{value.title}</div>
                          <p className="mt-1 text-sm text-muted-foreground">{value.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border bg-muted/10 p-4">
                  <div className="text-sm font-semibold">Want to build in our area?</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Send your plans or a short brief - we will advise on next steps and pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
