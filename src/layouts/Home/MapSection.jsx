// src/components/WorkMapSection.jsx
import * as React from "react";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Add your project pins here.
 * - lat/lng are numbers
 * - label shows in the list + tooltip
 */
const PINS = [
  { id: "p1", label: "Hartenbos Landgoed – Mossel Bay", lat: -34.113216754079076, lng: 22.11737480262755 },
  { id: "p2", label: "Dana Bay Development", lat: -34.1919556439398, lng: 22.048265243302723 },
  { id: "p3", label: "Nautilus Bay Residence", lat: -34.21356989129585, lng: 21.97173712078047 }, 
  { id: "p4", label: "Hersham Luxury Homes", lat: -34.05345985961307, lng: 22.24988225543243 },
  { id: "p5", label: "Village on Sea", lat: -34.1970797619802, lng: 22.117796411526957}, 
  { id: "p6", label: "Fancourt Lodge 822 Alteration", lat: -33.95475845530564, lng: 22.407250118265864 }, 
];

function toEmbedUrl({ lat, lng, zoom = 11 }) {
  // Works without an API key, but shows a generic map + pin if you open a specific place.
  // For best results, set "q=lat,lng" and "z=zoom".
  const q = `${lat},${lng}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`;
}

function toDirectionsUrl({ lat, lng }) {
  const q = `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
}

export default function WorkMapSection() {
  const [activeId, setActiveId] = React.useState(PINS[0]?.id);
  const active = React.useMemo(() => PINS.find((p) => p.id === activeId) ?? PINS[0], [activeId]);

  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            Our footprint
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Places we’ve built — <span className="text-teal-600">see our work area</span>.
          </h3>

          <p className="mt-2 max-w-2xl text-muted-foreground">
            Browse the pins to view where we’ve completed projects. Add as many coordinates as you like —
            we’ll display them as selectable locations with a live map preview.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left: locations list */}
          <div className="lg:col-span-4">
            <Card className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Project locations</div>
                  <div className="text-xs text-muted-foreground">{PINS.length} pins</div>
                </div>

                <div className="mt-4 space-y-2">
                  {PINS.map((p) => {
                    const isActive = p.id === activeId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActiveId(p.id)}
                        className={[
                          "w-full rounded-xl border px-3 py-3 text-left transition",
                          isActive
                            ? "border-teal-600 bg-teal-500/10"
                            : "bg-background hover:bg-muted/40",
                        ].join(" ")}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10">
                            <MapPin className="h-4 w-4 text-teal-700" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold">{p.label}</div>
                            <div className="mt-1 truncate text-xs text-muted-foreground">
                              {p.lat.toFixed(5)}, {p.lng.toFixed(5)}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {active ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={toDirectionsUrl(active)} target="_blank" rel="noreferrer">
                        Get directions
                      </a>
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      onClick={() => {
                        const text = `${active.lat},${active.lng}`;
                        if (navigator?.clipboard?.writeText) navigator.clipboard.writeText(text);
                      }}
                    >
                      Copy coordinates
                    </Button>
                  </div>
                ) : null}

                <p className="mt-4 text-xs text-muted-foreground">
                  These markers highlight some of the areas where we’ve completed projects across the Garden Route.
                  Select a location to view it on the map and get directions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right: map preview */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border bg-background">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="text-sm font-semibold">Map preview</div>
                <div className="text-xs text-muted-foreground">
                  {active ? active.label : "Select a pin"}
                </div>
              </div>

              <div className="aspect-[16/10] w-full">
                {active ? (
                  <iframe
                    key={active.id}
                    title={`Map - ${active.label}`}
                    src={toEmbedUrl(active)}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                    Add pins to show locations.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 text-xs text-muted-foreground">
              Our projects span multiple locations across the region. Explore the pins to see where our
              team has delivered quality construction and development work.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
