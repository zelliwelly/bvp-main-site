import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Black Veterans Project",
  description:
    "Frequently asked questions about the Black Veterans Project, our mission, membership, and the fight for reparative justice for Black veterans.",
  openGraph: {
    title: "Frequently Asked Questions | Black Veterans Project",
    description:
      "Get answers to common questions about BVP's mission, membership, and advocacy work.",
    url: "https://blackveteransproject.org/faq",
    siteName: "Black Veterans Project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Black Veterans Project",
    description:
      "Get answers to common questions about BVP's mission, membership, and advocacy work.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
