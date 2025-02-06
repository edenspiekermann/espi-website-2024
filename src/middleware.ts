import { NextResponse, NextRequest } from "next/server";

// Define a list of EU language codes (adjust as needed)
const euLanguages = [
  "at",
  "be",
  "bg",
  "cy",
  "cz",
  "de",
  "dk",
  "ee",
  "es",
  "fi",
  "fr",
  "gr",
  "hr",
  "hu",
  "ie",
  "it",
  "lt",
  "lu",
  "lv",
  "mt",
  "nl",
  "pl",
  "pt",
  "ro",
  "se",
  "si",
  "sk",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only process if the request is exactly for "/" or "/work"
  if (pathname === "/" || pathname === "/work") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    // Check if any EU language is present (case-insensitive)
    const isEU = euLanguages.some((lang) =>
      acceptLanguage.toLowerCase().includes(lang),
    );
    const region = isEU ? "eu" : "us";

    // Prepare the new pathname based on what page is being requested:
    // For "/" redirect to "/us" or "/eu"
    // For "/work" redirect to "/work/us" or "/work/eu"
    let newPathname = "";
    if (pathname === "/") {
      newPathname = `/${region}`;
    } else if (pathname === "/work") {
      newPathname = `/work/${region}`;
    }
    // Clone the nextUrl so the origin is preserved
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Apply the middleware only to the two paths:
  matcher: ["/", "/work"],
};
