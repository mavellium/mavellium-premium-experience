"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function MaintenanceLandingPage() {
  const maintenanceEndDate = new Date(2025, 10, 1, 0, 0, 0); // 01/11/2025 00:00:00

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const diff = maintenanceEndDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimeLeft();
    const intervalId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, [maintenanceEndDate]);

  return (
    <div className="min-h-screen bg-[#041526] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-border backdrop-blur supports-[backdrop-filter]:bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/logo-mavellium.svg"
                alt="Logo Mavellium"
                className="h-8 sm:h-10"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="https://wa.me/5514991779502?text=Ol%C3%A1%21%20Vi%20que%20o%20site%20est%C3%A1%20em%20manuten%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20solu%C3%A7%C3%B5es%20para%20meu%20projeto.%20Podemos%20falar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#008E52] px-3 py-2 text-white text-base font-medium shadow-lg shadow-primary/20 hover:bg-[#017346] transition-colors"
              >
                <img
                  src="/src/assets/ic_baseline-whatsapp.svg"
                  alt="whatsapp"
                  className="w-6"
                />
                Fale com a gente
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text and timer */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5em] font-bold tracking-tight text-[#04A15E]">
                  Voltamos em breve
                </h1>
                <h2 className="text-xl sm:text-2xl text-white font-medium">
                  Estamos fazendo melhorias. O site ficará em manutenção até dia
                  01/11/2025.
                </h2>
                <p className="text-base sm:text-lg text-[#D4D4D4] max-w-xl mx-auto lg:mx-0">
                  Estamos aprimorando nossa plataforma de desenvolvimento web para
                  entregar soluções digitais ainda mais inovadoras. Em breve,
                  voltaremos com novidades incríveis para transformar sua presença
                  online.
                </p>
              </div>

              {/* Timer Card */}
              <Card className="bg-[#04A15E]/10 border-[#04A15E]/20 max-w-md mx-auto lg:mx-0">
                <CardContent className="py-6">
                  <div className="flex flex-row text-[20px] sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#04A15E] font-heading font-bold">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl">{timeLeft.days}</div>
                      <div className="text-sm sm:text-base mt-1">Dias</div>
                    </div>
                    <div className="text-2xl hidden sm:block">:</div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-sm sm:text-base mt-1">Horas</div>
                    </div>
                    <div className="text-2xl hidden sm:block">:</div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-sm sm:text-base mt-1">Min</div>
                    </div>
                    <div className="text-2xl hidden sm:block">:</div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-sm sm:text-base mt-1">Seg</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <a
                  href="https://wa.me/5514991779502?text=Ol%C3%A1%21%20Vi%20que%20o%20site%20est%C3%A1%20em%20manuten%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20solu%C3%A7%C3%B5es%20para%20meu%20projeto.%20Podemos%20falar%3F"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#008E52] px-4 py-3 text-white text-lg font-medium shadow-lg shadow-primary/20 hover:bg-[#017346] transition-colors w-full sm:w-auto"
                >
                  <img
                    src="/src/assets/ic_baseline-whatsapp.svg"
                    alt="whatsapp"
                    className="w-6"
                  />
                  Fale com a gente
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="relative hidden lg:block max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[primary]/10 via-transparent to-secondary/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="relative">
                  <img
                    alt="Desenvolvimento web moderno"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
                    className="rounded-3xl shadow-2xl shadow-primary/20 w-full h-auto max-w-md"
                  />
                  <div className="absolute -top-4 -right-4 size-8 bg-primary rounded-full opacity-60 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 size-12 bg-secondary/20 rounded-full opacity-40 animate-pulse delay-75" />
                  <div className="absolute top-1/2 -right-8 size-6 bg-accent rounded-full opacity-50 animate-pulse delay-150" />
                </div>
              </div>
              <div className="absolute top-10 left-10 size-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-20 right-10 size-32 border-2 border-secondary/10 rounded-full" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#008E52] bg-[#030F1B] mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <img
                src="/src/assets/logo-mavellium-menor.svg"
                alt="Logo Mavellium"
              />
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap justify-center md:justify-start">
              <a href="#" className="hover:text-[#008E52] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#008E52] transition-colors">
                Termos de Uso
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="size-9 p-1 rounded-full hover:bg-[#008E52]"
              >
                <a
                  href="https://www.instagram.com/mavellium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/src/assets/mdi_instagram.svg" alt="Instagram" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-9 p-1 rounded-full hover:bg-[#008E52]"
              >
                <a
                  href="https://wa.me/5514991779502?text=Ol%C3%A1%21%20Vi%20que%20o%20site%20est%C3%A1%20em%20manuten%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20solu%C3%A7%C3%B5es%20para%20meu%20projeto.%20Podemos%20falar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/ic_baseline-whatsapp.svg"
                    alt="Whatsapp"
                    className="w-[32px] sm:w-[65px]"
                  />
                </a>
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-[#008E52]" />
          <div className="text-center text-sm text-[#008E52]">
            © 2025 Mavellium — Voltamos em breve.
          </div>
        </div>
      </footer>
    </div>
  );
}
