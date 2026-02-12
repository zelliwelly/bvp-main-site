import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Veterans Project",
  description:
    "Read the Black Veterans Project's privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Black Veterans Project",
    description:
      "Learn how Black Veterans Project collects, uses, and protects your personal information.",
    url: "https://blackveteransproject.org/privacy",
    siteName: "Black Veterans Project",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Black Veterans Project",
    description:
      "Learn how Black Veterans Project collects, uses, and protects your personal information.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
