import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFile } from "fs/promises";
import { resolve } from "path";

const server = createServer(async (req, res) => {
  const path = (req.url === "/" ? "/resume.html" : req.url) || "/resume.html";
  try {
    const file = await readFile(resolve("public", "." + path));
    const ext = path.endsWith(".html") ? "text/html" : "application/octet-stream";
    res.writeHead(200, { "Content-Type": ext });
    res.end(file);
  } catch (e) {
    res.writeHead(404); res.end("Not found");
  }
});

server.listen(4321, async () => {
  console.log("Static server at http://localhost:4321");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("http://localhost:4321/resume.html", { waitUntil: "networkidle0" });
  await page.pdf({ path: "public/Archie_Crawford_Resume.pdf", format: "Letter", printBackground: true, margin: { top: "0.4in", right: "0.5in", bottom: "0.4in", left: "0.5in" } });
  await browser.close();
  server.close();
  console.log("✅ Generated public/Archie_Crawford_Resume.pdf");
});
