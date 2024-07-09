import { NextResponse } from "next/server";
import { Parser } from "xml2js";
import { normalizePersonioJobData } from "@/utils/normalize-personio-data";

export async function GET() {
  const url = "https://edenspiekermann.jobs.personio.de/xml?language=de";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/xml",
        "X-Company-ID": `${process.env.PERSONIO_COMPANY_ID}`,
      },
    })
      .then((res) => res.text())
      .catch((err) => console.error("Error parsing XML:", err));

    const parser = new Parser({
      explicitCharkey: true, // Preserve the text in CDATA
      trim: true, // Trim the whitespace from text nodes
      normalizeTags: true, // Lowercases tags
      explicitRoot: false, // Remove the root node
      charkey: "text", // Key for text and CDATA content
      mergeAttrs: true, // Merge attributes directly into containing object
    });

    // Parse the XML again to remove the CDATA tags and change to beautified JSON
    const parsedData = await new Promise((resolve, reject) => {
      parser.parseString(response as string, (err, result) => {
        if (err) {
          reject(new Error("Error parsing XML: " + err));
        } else {
          resolve(result);
        }
      });
    });

    const normalizedData = normalizePersonioJobData(parsedData as Object);

    return NextResponse.json({ data: normalizedData }, { status: 200 });
  } catch (error) {
    console.error("preInit error: ", error);
  }
}
