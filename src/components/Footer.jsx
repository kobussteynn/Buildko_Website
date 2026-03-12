// src/components/Footer.jsx
import * as React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const COMPANY = {
  name: "Buildko",
  area: "Mossel Bay - George, South Africa",
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
        <div className="grid gap-8 md:grid-cols-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded bg-teal-500" />
              <span className="text-lg font-semibold tracking-tight truncate">{COMPANY.name}</span>
            </div>

            <p className="mt-3 text-sm text-zinc-300">
              Complete builds with solid finishes - from planning to handover.
            </p>

            <div className="mt-5 grid gap-2 sm:flex sm:flex-wrap sm:items-center">
              <Button asChild className="h-11 rounded-2xl bg-teal-500 text-white hover:bg-teal-600 sm:rounded-full">
                <Link to={quoteHref} className="inline-flex w-full items-center justify-center gap-2 font-semibold">
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-2xl border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 sm:rounded-full"
              >
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-3 text-[11px] text-zinc-400">
              Free quotes - Fast response on WhatsApp
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </div>

            <div className="mt-4 grid gap-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                  <span className="leading-snug">{COMPANY.area}</span>
                </div>
              </div>

              <a
                href={telHref}
                className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300 transition hover:text-white md:rounded-none md:border-0 md:bg-transparent md:p-0"
              >
                <Phone className="h-4 w-4 shrink-0 text-zinc-400" />
                <span className="truncate">{COMPANY.phone}</span>
              </a>

              <a
                href={mailHref}
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300 transition hover:text-white md:rounded-none md:border-0 md:bg-transparent md:p-0"
              >
                <Mail className="h-4 w-4 shrink-0 text-zinc-400" />
                <span className="truncate">{COMPANY.email}</span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300 transition hover:text-white md:rounded-none md:border-0 md:bg-transparent md:p-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-zinc-400" />
                Fast response on WhatsApp
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Quick Links
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
              <Link to="/" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-300 transition hover:text-white md:border-0 md:bg-transparent md:p-0">
                Home
              </Link>
              <Link to="/about" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-300 transition hover:text-white md:border-0 md:bg-transparent md:p-0">
                About
              </Link>
              <Link to="/contact" className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-300 transition hover:text-white md:border-0 md:bg-transparent md:p-0">
                Contact
              </Link>
              <Link to={quoteHref} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-300 transition hover:text-white md:border-0 md:bg-transparent md:p-0">
                Get a Quote
              </Link>
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

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-zinc-400">
            Copyright {year} {COMPANY.name}. All rights reserved.
          </div>
          <div className="text-xs text-zinc-400">
            Built with care - Professional workmanship - Free quotes
          </div>
        </div>
      </div>
    </footer>
  );
}
