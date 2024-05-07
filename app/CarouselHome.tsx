import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type CarouselHomeProps = {
  titles: string[];
};

export function CarouselHome({ titles }: CarouselHomeProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {titles.map((_) => (
          <CarouselItem
            key={_.split(" ").join("")}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <Link href={`/${_.split(" ").join("").toLowerCase()}`}>
                  <CardContent className="flex-col aspect-square items-center justify-center p-4">
                    <div className="text-xl font-semibold">{_}</div>
                    {_ === "Hawker Centers" ? (
                      <div className="text-xs">(nearby)</div>
                    ) : (
                      <div></div>
                    )}
                  </CardContent>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
