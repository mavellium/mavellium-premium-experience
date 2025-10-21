"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function MaintenanceLandingPage() {
  return (
    <div className="min-h-screen bg-[#041526] flex flex-col">
      <header className="w-full border-b border-border bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              fill="none"
              width="140"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 140 32"
            >
              <rect rx="6" fill="#04A15E" width="32" height="32" />
              <path d="M16 8L24 20H8L16 8Z" fill="white" />
              <text
                x="40"
                y="22"
                fill="#132334"
                fontSize="18"
                fontFamily="Inter, system-ui"
                fontWeight="700"
              >
                Mavellium
              </text>
            </svg>
          </div>
          <Button size="sm" variant="ghost" className="gap-2">
            <Icon icon="ic:baseline-chat" className="size-4" />
            <span className="hidden sm:inline">Fale com a gente</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#04A15E]">
                  Voltamos em breve
                </h1>
                <h2 className="text-xl sm:text-2xl text-white font-medium">
                  Estamos fazendo melhorias. O site ficará em manutenção pelos próximos 7 dias.
                </h2>
                <p className="text-base sm:text-lg text-[#D4D4D4] max-w-xl mx-auto lg:mx-0">
                  Estamos aprimorando nossa plataforma de desenvolvimento web para entregar soluções
                  digitais ainda mais inovadoras. Em breve, voltaremos com novidades incríveis para
                  transformar sua presença online.
                </p>
              </div>
              <Card className="bg-[#04A15E]/10 border-[#04A15E]/20">
                <CardContent className="py-6">
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-[#04A15E] font-heading">
                        7
                      </div>
                      <div className="text-sm text-[#04A15E] mt-1">Dias</div>
                    </div>
                    <div className="text-2xl text-[#04A15E]">:</div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-[#04A15E] font-heading">
                        00
                      </div>
                      <div className="text-sm text-[#04A15E] mt-1">Horas</div>
                    </div>
                    <div className="text-2xl text-[#04A15E]">:</div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-[#04A15E] font-heading">
                        00
                      </div>
                      <div className="text-sm text-[#04A15E] mt-1">Min</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/20 bg-gradient-to-br from-[#04A15E] to-[#04A15E]/90"
                >
                  <Icon icon="ic:baseline-whatsapp" className="size-5" />
                  Falar no WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-white/50 border-white text-white hover:bg-white hover:text-muted-foreground">
                  <Icon icon="ic:baseline-email" className="size-5" />
                  Receber aviso por e-mail
                </Button>
              </div>
              <Card className="max-w-xl mx-auto lg:mx-0 bg-[#030F1B]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#04A15E]">Seja avisado quando voltarmos</CardTitle>
                  <CardDescription className="text-white">
                    Receba em primeira mão o lançamento da nossa nova plataforma e conteúdos
                    exclusivos sobre desenvolvimento web.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input type="email" className="flex-1" placeholder="seu@email.com" />
                    <Button className="shadow-lg shadow-[#04A15E]/20 bg-[#04A15E] hover:bg-[#1215E]">Enviar</Button>
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" className="mt-1 bg-white/40 border-white" />
                    <Label
                      htmlFor="consent"
                      className="text-xs text-white leading-relaxed cursor-pointer"
                    >
                      Ao assinar, concordo em receber comunicações e reconheço a Política de
                      Privacidade.
                    </Label>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-3 pt-4">
                <p className="text-sm text-white">
                  Tem um projeto urgente? Fale conosco:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
                  <Button size="sm" variant="secondary" className="gap-2 bg-[#132334] text-white hover:text-muted-foreground">
                    <Icon icon="ic:baseline-whatsapp" className="size-4" />
                    WhatsApp
                  </Button>
                  <span className="text-sm text-white">ou</span>
                  <a
                    href="mailto:contato@mavellium.com.br"
                    className="text-sm text-[#04A15E] hover:underline font-medium"
                  >
                    contato@mavellium.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
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
        </div>
      </main>
      <footer className="border-t border-border bg-[#030F1B] mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <svg
                fill="none"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 120 28"
              >
                <rect rx="5" fill="#04A15E" width="28" height="28" />
                <path d="M14 7L21 17.5H7L14 7Z" fill="white" />
                <text
                  x="35"
                  y="19"
                  fill="#ffffffff"
                  fontSize="15"
                  fontFamily="Inter, system-ui"
                  fontWeight="600"
                >
                  Mavellium
                </text>
              </svg>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" className="size-9">
                <Icon icon="ic:baseline-facebook" className="size-5" />
              </Button>
              <Button size="icon" variant="ghost" className="size-9">
                <Icon icon="ic:baseline-instagram" className="size-5" />
              </Button>
              <Button size="icon" variant="ghost" className="size-9">
                <Icon icon="ic:baseline-whatsapp" className="size-5" />
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Mavellium — Voltamos em breve.
          </div>
        </div>
      </footer>
    </div>
  );
}
