import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Black Veterans Project",
  description:
    "Learn about the Black Veterans Project's commitment to digital accessibility. We strive to meet WCAG 2.1 Level AA standards.",
  openGraph: {
    title: "Accessibility Statement | Black Veterans Project",
    description:
      "Our commitment to digital accessibility for people with disabilities.",
    url: "https://blackveteransproject.org/accessibility",
    siteName: "Black Veterans Project",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Accessibility Statement | Black Veterans Project",
    description:
      "Our commitment to digital accessibility for people with disabilities.",
  },
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
