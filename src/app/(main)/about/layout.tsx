import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Black Veterans Project",
  description:
    "Learn about the Black Veterans Project's mission to advance reparative justice for Black veterans and military families through research, litigation, and mobilization.",
  openGraph: {
    title: "About Us | Black Veterans Project",
    description:
      "Learn about the Black Veterans Project's mission to advance reparative justice for Black veterans and military families.",
    url: "https://blackveteransproject.org/about",
    siteName: "Black Veterans Project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Black Veterans Project",
    description:
      "Learn about the Black Veterans Project's mission to advance reparative justice for Black veterans and military families.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
