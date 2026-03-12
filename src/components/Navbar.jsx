// src/components/Navbar.jsx
import * as React from "react";
import { Menu, Phone, Mail, MapPin, MessageCircle, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import logo from "@/assets/Picture.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const PROJECTS = [
  { label: "Residential", href: "/#projects" },
  { label: "Commercial", href: "/#projects" },
  { label: "Before & After", href: "/#projects" },
];

const COMPANY = {
  name: "Buildko",
  area: "Mossel Bay – George, South Africa",
  email: "kobussteyn24@gmail.com",
  phone: "0815864848",
  whatsappE164NoPlus: "27815864848",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatTelForHref(localNumber) {
  const trimmed = String(localNumber || "").replace(/\s+/g, "");
  if (trimmed.startsWith("0") && trimmed.length >= 10) return `+27${trimmed.slice(1)}`;
  if (trimmed.startsWith("+")) return trimmed;
  return trimmed;
}

function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

function TopUtilityBar() {
  const telHref = `tel:${formatTelForHref(COMPANY.phone)}`;
  const mailHref = `mailto:${COMPANY.email}`;

  return (
    <div className="hidden lg:block border-b bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-2 lg:px-6">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="h-4 w-4 text-zinc-400" />
            <span>{COMPANY.area}</span>
            <span className="ml-3 inline-flex items-center rounded-full bg-teal-400/15 px-2 py-0.5 font-medium text-teal-200 ring-1 ring-teal-400/25">
              Complete Builds
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition"
            >
              <Phone className="h-4 w-4 text-zinc-400" />
              {COMPANY.phone}
            </a>
            <a
              href={mailHref}
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition"
            >
              <Mail className="h-4 w-4 text-zinc-400" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="hidden md:flex items-center gap-2 lg:gap-3">
      {/* Tablet: simple links */}
      <div className="flex lg:hidden items-center gap-1 rounded-full border bg-background/60 p-1 shadow-sm backdrop-blur">
        {NAV.map((item) => {
          const active = currentPath === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-full px-3 py-2 text-sm font-medium transition whitespace-nowrap",
                active
                  ? "bg-foreground text-background shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="/#projects"
          className="rounded-full px-3 py-2 text-sm font-medium transition whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          Projects
        </a>
      </div>

      {/* Desktop: pill + dropdown */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex items-center rounded-full border bg-background/60 p-1 shadow-sm backdrop-blur">
          {NAV.map((item) => {
            const active = currentPath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-foreground text-background shadow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <NavigationMenu className="block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-full">Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[320px] p-4">
                  <div className="text-sm font-semibold">Projects</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A glimpse of our work and finishes.
                  </p>
                  <div className="mt-3 grid gap-2">
                    {PROJECTS.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        className="rounded-lg border bg-muted/20 px-3 py-2 text-sm hover:bg-muted transition"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

function MobileBottomBar({ telHref, waHref, quoteHref }) {
  return (
    <div
      className={cx(
        "md:hidden fixed bottom-0 left-0 right-0 z-[60]",
        "border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/65"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="grid grid-cols-5 gap-2">
          <Button asChild variant="outline" className="col-span-1 rounded-2xl h-11 px-0">
            <a href={telHref} className="inline-flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </a>
          </Button>

          <Button asChild variant="outline" className="col-span-1 rounded-2xl h-11 px-0">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            className="col-span-3 rounded-2xl h-11 bg-teal-500 text-white hover:bg-teal-600"
          >
            <a href={quoteHref} className="inline-flex items-center justify-center gap-2 font-semibold">
              Get a Quote
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-2 text-[11px] text-muted-foreground text-center">
          Free quotes • Fast response on WhatsApp
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const telHref = `tel:${formatTelForHref(COMPANY.phone)}`;
  const mailHref = `mailto:${COMPANY.email}`;
  const waHref = `https://wa.me/${COMPANY.whatsappE164NoPlus}`;
  const quoteHref = "/contact?reason=quote";
  const scrolled = useScrolled(6);

  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <TopUtilityBar />

        <div
          className={cx(
            "border-b",
            "backdrop-blur supports-[backdrop-filter]:bg-background/65",
            scrolled ? "bg-background/92 shadow-sm" : "bg-background/80"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-6">
            {/* Brand */}
            <a href="/" className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className="h-10 w-10 overflow-hidden rounded-2xl border bg-white shadow-sm">
                  <img
                    src={logo}
                    alt={`${COMPANY.name} logo`}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <div className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 rounded-xl bg-teal-500 shadow" />
              </div>

              <div className="min-w-0">
                <div className="text-sm font-semibold tracking-tight leading-none truncate">
                  {COMPANY.name}
                </div>
                <div className="text-[11px] text-muted-foreground leading-snug truncate sm:hidden">
                  {COMPANY.area}
                </div>
                <div className="hidden sm:block text-xs text-muted-foreground">
                  Quality builds. Solid finishes.
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <DesktopNav />

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="outline" className="rounded-full">
                <a href={telHref} className="gap-2 inline-flex items-center">
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <a href={waHref} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>

              <Button asChild className="rounded-full bg-teal-500 text-white hover:bg-teal-600">
                <a href={quoteHref} className="gap-2 inline-flex items-center font-semibold">
                  Get a Quote
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile actions: Quote + Menu */}
            <div className="md:hidden flex items-center gap-2 shrink-0">
              <Button
                asChild
                className="rounded-2xl h-11 bg-teal-500 text-white hover:bg-teal-600 px-4"
              >
                <a href={quoteHref} className="inline-flex items-center gap-2 font-semibold">
                  Quote
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-2xl h-11 w-11"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                {/* ✅ UPDATED: scrollable nav area */}
                <SheetContent side="right" className="w-[92vw] max-w-[420px] p-0 flex flex-col">
                  {/* Sticky header */}
                  <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
                    <div className="p-5">
                      <SheetHeader>
                        <SheetTitle className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-10 w-10 overflow-hidden rounded-2xl border bg-white shrink-0">
                              <img
                                src={logo}
                                alt={`${COMPANY.name} logo`}
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-semibold leading-none truncate">{COMPANY.name}</div>
                              <div className="text-xs text-muted-foreground truncate">{COMPANY.area}</div>
                            </div>
                          </div>

                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-xl"
                            aria-label="Close"
                            onClick={close}
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </SheetTitle>
                      </SheetHeader>
                    </div>
                  </div>

                  {/* Scrollable content */}
                  <div className="flex-1 overflow-y-auto p-5 pb-28">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Pages
                    </div>

                    <div className="mt-3 grid gap-2">
                      {NAV.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={close}
                          className="flex items-center justify-between rounded-2xl border bg-muted/20 px-4 py-4 text-base font-semibold hover:bg-muted transition"
                        >
                          {item.label}
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </a>
                      ))}

                      <a
                        href="/#projects"
                        onClick={close}
                        className="flex items-center justify-between rounded-2xl border bg-muted/20 px-4 py-4 text-base font-semibold hover:bg-muted transition"
                      >
                        Projects
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </a>

                      <div className="grid gap-2 pl-1">
                        {PROJECTS.map((p) => (
                          <a
                            key={p.label}
                            href={p.href}
                            onClick={close}
                            className="rounded-2xl border bg-background px-4 py-3 text-sm text-muted-foreground hover:bg-muted transition"
                          >
                            {p.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Contact
                    </div>

                    <div className="mt-3 grid gap-2">
                      <a
                        href={telHref}
                        onClick={close}
                        className="rounded-2xl border px-4 py-4 hover:bg-muted transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold">Call us</div>
                            <div className="text-xs text-muted-foreground">{COMPANY.phone}</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href={waHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={close}
                        className="rounded-2xl border px-4 py-4 hover:bg-muted transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                            <MessageCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold">WhatsApp</div>
                            <div className="text-xs text-muted-foreground">Fast response</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href={mailHref}
                        onClick={close}
                        className="rounded-2xl border px-4 py-4 hover:bg-muted transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold">Email</div>
                            <div className="text-xs text-muted-foreground truncate">{COMPANY.email}</div>
                          </div>
                        </div>
                      </a>

                      <Button asChild className="rounded-2xl h-12 bg-teal-500 text-white hover:bg-teal-600">
                        <a href={quoteHref} onClick={close} className="gap-2 inline-flex items-center font-semibold">
                          Get a Quote
                          <ChevronRight className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>

                    <p className="mt-4 text-xs text-muted-foreground">
                      Serving Mossel Bay, George, and surrounding areas.
                    </p>
                  </div>

                  {/* Sticky footer */}
                  <div className="shrink-0 border-t bg-zinc-950 px-6 py-4 text-zinc-100">
                    <div className="text-xs text-zinc-300">
                      Free quotes • Fast response on WhatsApp • Professional workmanship
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-teal-500/70 to-transparent" />
        </div>
      </header>

      {/* Space so page content isn't hidden behind bottom bar */}
      <div className="md:hidden h-[96px]" />

      <MobileBottomBar telHref={telHref} waHref={waHref} quoteHref={quoteHref} />
    </>
  );
}
