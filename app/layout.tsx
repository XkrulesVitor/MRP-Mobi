import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convite.mrpmobi.com.br"),
  title: "MRP Mobi | Cadastre-se, Economize em Viagens e Ganhe Renda Recorrente",
  description:
    "Descubra a revolução da mobilidade urbana. Economize em suas viagens e receba comissões vitalícias por todas as pessoas que indicar para a MRP Mobi. Cadastro 100% gratuito!",
  keywords: [
    "MRP Mobi",
    "MRP Mobi cadastro",
    "aplicativo de mobilidade",
    "renda recorrente motorista",
    "indique e ganhe viagens",
    "desconto corrida",
    "renda extra vitalícia",
  ],
  authors: [{ name: "MRP Mobi" }],
  openGraph: {
    title: "MRP Mobi | Economize em Viagens e Ganhe Renda Recorrente",
    description:
      "Faça seu cadastro gratuito e descubra como economizar em corridas e gerar renda vitalícia indicando passageiros e motoristas.",
    url: "https://convite.mrpmobi.com.br/register/1062",
    siteName: "MRP Mobi Indicação",
    images: [
      {
        url: "/MRP-Mobi-Completo-Laranja-preto-2048x726.png",
        width: 1200,
        height: 630,
        alt: "MRP Mobi Oportunidade de Economia e Renda",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRP Mobi | Economize e Ganhe Renda Recorrente",
    description:
      "Cadastre-se gratuitamente e receba comissões vitalícias pelas viagens dos seus indicados na MRP Mobi.",
    images: ["/MRP-Mobi-Completo-Laranja-preto-2048x726.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MRP Mobi",
    applicationCategory: "TravelApplication",
    operatingSystem: "Android, iOS",
    description:
      "Aplicativo de mobilidade urbana com economia em viagens para passageiros, tarifa justa de 21% para motoristas e comissões vitalícias por indicação.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#090A0F] text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
