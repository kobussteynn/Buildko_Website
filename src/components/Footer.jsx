// src/components/Footer.jsx
import * as React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const COMPANY = {
  name: "Buildko",
  area: "Mossel Bay – George, South Africa",
  email: "kobussteyn24@gmail.com",
  phone: "0815864848",
  whatsappE164NoPlus: "27815864848",
};

function formatTelForHref(localNumber) {
  const trimmed = String(localNumber || "").replace(/\s+/g, "");
  if (trimmed.startsWith("0") && trimmed.length >= 10) return `+27${trimmed.slice(1)}`;
  if (trimmed.startsWith("+")) return trimmed;
  return trimmed;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const telHref = `tel:${formatTelForHref(COMPANY.phone)}`;
  const mailHref = `mailto:${COMPANY.email}`;
  const waHref = `https://wa.me/${COMPANY.whatsappE164NoPlus}`;
  const quoteHref = "/contact?reason=quote";

  return (
    <footer className="mt-auto border-t bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded bg-teal-500" />
              <span className="text-lg font-semibold tracking-tight truncate">
                {COMPANY.name}
              </span>
            </div>

            <p className="mt-3 text-sm text-zinc-300">
              Complete builds with solid finishes — from planning to handover.
            </p>

            {/* Mobile-first CTA layout (stack on xs, inline on sm+) */}
            <div className="mt-5 grid gap-2 sm:flex sm:flex-wrap sm:items-center">
              <Button asChild className="rounded-2xl sm:rounded-full bg-teal-500 text-white hover:bg-teal-600 h-11">
                <a href={quoteHref} className="inline-flex items-center justify-center gap-2 font-semibold w-full">
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl sm:rounded-full border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 h-11"
              >
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Small helper line (mobile polish) */}
            <div className="mt-3 text-[11px] text-zinc-400">
              Free quotes • Fast response on WhatsApp
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </div>

            {/* Turn into “cards” on mobile, simple list on md+ */}
            <div className="mt-4 grid gap-2">
              <div className="rounded-2xl md:rounded-none md:bg-transparent md:border-0 border border-zinc-800 bg-zinc-900/40 p-4 md:p-0">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <MapPin className="mt-0.5 h-4 w-4 text-zinc-400 shrink-0" />
                  <span className="leading-snug">{COMPANY.area}</span>
                </div>
              </div>

              <a
                href={telHref}
                className="rounded-2xl md:rounded-none border border-zinc-800 bg-zinc-900/40 p-4 md:p-0 md:border-0 md:bg-transparent flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition"
              >
                <Phone className="h-4 w-4 text-zinc-400 shrink-0" />
                <span className="truncate">{COMPANY.phone}</span>
              </a>

              <a
                href={mailHref}
                className="rounded-2xl md:rounded-none border border-zinc-800 bg-zinc-900/40 p-4 md:p-0 md:border-0 md:bg-transparent flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition min-w-0"
              >
                <Mail className="h-4 w-4 text-zinc-400 shrink-0" />
                <span className="truncate">{COMPANY.email}</span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl md:rounded-none border border-zinc-800 bg-zinc-900/40 p-4 md:p-0 md:border-0 md:bg-transparent flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition"
              >
                <MessageCircle className="h-4 w-4 text-zinc-400 shrink-0" />
                Fast response on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Quick Links
            </div>

            {/* 2-column links on mobile, 1-column on md+ */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
              <a href="/" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 md:p-0 md:border-0 md:bg-transparent text-zinc-300 hover:text-white transition">
                Home
              </a>
              <a href="/about" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 md:p-0 md:border-0 md:bg-transparent text-zinc-300 hover:text-white transition">
                About
              </a>
              <a href="/contact" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 md:p-0 md:border-0 md:bg-transparent text-zinc-300 hover:text-white transition">
                Contact
              </a>
              <a href={quoteHref} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 md:p-0 md:border-0 md:bg-transparent text-zinc-300 hover:text-white transition">
                Get a Quote
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <div className="text-sm font-semibold">Service Area</div>
              <p className="mt-1 text-sm text-zinc-300">
                Mossel Bay, George, and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-zinc-400">
            © {year} {COMPANY.name}. All rights reserved.
          </div>
          <div className="text-xs text-zinc-400">
            Built with care • Professional workmanship • Free quotes
          </div>
        </div>
      </div>
    </footer>
  );
}
