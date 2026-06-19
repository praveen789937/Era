/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HistorySynthesis, SavedLesson } from "../types";

/**
 * Cleanly generates a beautifully styled .doc file (using MS-Word compatible HTML/XML)
 * that fully supports South Indian Telugu, Tamil, Malayalam, and Kannada scripts.
 */
export function exportToWord(data: HistorySynthesis | SavedLesson) {
  const filename = `${data.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_chronicle.doc`;

  const timelineHtml = data.timeline
    .map(
      (evt) => `
    <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px dashed #dddddd;">
      <h3 style="font-family: Arial, sans-serif; font-size: 14pt; color: #8c5b30; margin: 0 0 5px 0;">
        ${evt.date} &mdash; ${evt.title}
      </h3>
      ${evt.location ? `<p style="font-size: 10pt; color: #666666; margin: 0 0 10px 0; font-style: italic;">Location: ${evt.location}</p>` : ""}
      <p style="font-family: Arial, sans-serif; font-size: 11pt; color: #333333; margin: 0 0 8px 0; line-height: 1.5;">
        ${evt.description}
      </p>
      ${evt.importance ? `
      <div style="background-color: #fcf8f2; border-left: 3px solid #8c5b30; padding: 10px; margin-top: 8px;">
        <p style="font-family: Arial, sans-serif; font-size: 10pt; font-weight: bold; color: #8c5b30; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 1px;">
          Historical Lesson / Impact:
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 10pt; font-style: italic; color: #555555; margin: 0;">
          ${evt.importance}
        </p>
      </div>` : ""}
    </div>
  `
    )
    .join("");

  const lessonsHtml = data.lessons
    .map(
      (lsn, idx) => `
    <div style="margin-bottom: 15px; background-color: #f9f9f9; padding: 15px; border: 1px solid #e2e2e2; border-radius: 6px;">
      <h3 style="font-family: Georgia, serif; font-size: 12pt; color: #111111; margin: 0 0 5px 0;">
        Takeaway ${idx + 1}: ${lsn.title}
      </h3>
      <p style="font-family: Arial, sans-serif; font-size: 11pt; color: #444444; margin: 0; line-height: 1.5;">
        ${lsn.content}
      </p>
    </div>
  `
    )
    .join("");

  const userNotesHtml = (data as SavedLesson).userNotes
    ? `
    <div style="margin-top: 40px; border-top: 2px solid #8c5b30; padding-top: 20px;">
      <h2 style="font-family: Georgia, serif; font-size: 16pt; color: #333333; margin: 0 0 15px 0;">
        My Study Annotations & Reflections
      </h2>
      <div style="background-color: #fafafa; border: 1px solid #dddddd; padding: 15px; font-family: monospace; font-size: 10.5pt; color: #333333; line-height: 1.6; white-space: pre-wrap;">
        ${(data as SavedLesson).userNotes}
      </div>
    </div>
  `
    : "";

  // Complete HTML document wrapped in Office XML structures
  const docContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>${data.title}</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page {
          size: 8.5in 11in;
          margin: 1.0in 1.0in 1.0in 1.0in;
        }
        body {
          font-family: "Segoe UI", "Arial", sans-serif;
          font-size: 11pt;
          line-height: 1.6;
          color: #333333;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #8c5b30;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .title {
          font-family: Georgia, serif;
          font-size: 24pt;
          font-weight: bold;
          color: #111111;
          margin: 0;
        }
        .subtitle {
          font-family: Georgia, serif;
          font-size: 18pt;
          color: #8c5b30;
          margin: 5px 0 0 0;
        }
        .era-tag {
          font-family: "Courier New", monospace;
          font-size: 10pt;
          font-weight: bold;
          color: #666666;
          margin-top: 10px;
          text-transform: uppercase;
        }
        .summary-box {
          background-color: #fdfaf6;
          border-left: 4px solid #8c5b30;
          padding: 15px;
          margin-bottom: 30px;
          font-style: italic;
          color: #444444;
        }
        .section-title {
          font-family: Georgia, serif;
          font-size: 18pt;
          color: #222222;
          border-bottom: 1px solid #8c5b30;
          padding-bottom: 5px;
          margin-top: 40px;
          margin-bottom: 20px;
        }
      </style>
 head>
    <body>
      <div class="header">
        <h1 class="title">${data.title}</h1>
        ${data.nativeTitle ? `<h2 class="subtitle">${data.nativeTitle}</h2>` : ""}
        <div class="era-tag">Chronological Epoch: ${data.era}</div>
      </div>

      <div class="summary-box">
        <p style="margin: 0; font-size: 11.5pt; line-height: 1.6;">
          ${data.summary}
        </p>
      </div>

      <h2 class="section-title">The Chronological Map Timeline</h2>
      <div>
        ${timelineHtml}
      </div>

      <h2 class="section-title">Strategic Core Lessons</h2>
      <div>
        ${lessonsHtml}
      </div>

      ${userNotesHtml}

      <div style="margin-top: 60px; text-align: center; border-top: 1px solid #eeeeee; padding-top: 15px; font-size: 9pt; color: #999999; font-family: sans-serif;">
        Generated by ERA Multilingual AI Historical Engine (Local Time: ${new Date().toLocaleDateString()})
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([docContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Creates high-fidelity, parchment-styled printing format that exports cleanly to PDF.
 * Uses a sandboxed iframe to trigger native browser printing beautifully.
 */
export function exportToPDF(data: HistorySynthesis | SavedLesson) {
  const printFrame = document.createElement("iframe");
  printFrame.style.position = "fixed";
  printFrame.style.right = "0";
  printFrame.style.bottom = "0";
  printFrame.style.width = "0";
  printFrame.style.height = "0";
  printFrame.style.border = "none";
  document.body.appendChild(printFrame);

  const doc = printFrame.contentDocument || printFrame.contentWindow?.document;
  if (!doc) return;

  const timelineHtml = data.timeline
    .map(
      (evt) => `
    <div class="event-card">
      <div class="event-header">
        <div class="event-year">${evt.date}</div>
        <div class="event-title">${evt.title}</div>
      </div>
      ${evt.location ? `<div class="event-meta">📍 &nbsp; ${evt.location}</div>` : ""}
      <div class="event-description">${evt.description}</div>
      ${evt.importance ? `
      <div class="event-impact">
        <div class="impact-label">Ripple Effect / Importance</div>
        <div class="impact-text">${evt.importance}</div>
      </div>` : ""}
    </div>
  `
    )
    .join("");

  const lessonsHtml = data.lessons
    .map(
      (lsn, idx) => `
    <div class="lesson-card">
      <div class="lesson-num">${idx + 1}</div>
      <div class="lesson-body">
        <div class="lesson-title">${lsn.title}</div>
        <div class="lesson-content">${lsn.content}</div>
      </div>
    </div>
  `
    )
    .join("");

  const notesHtml = (data as SavedLesson).userNotes
    ? `
    <div class="section-divider"></div>
    <div class="notebook-section">
      <h2 class="section-title">My Reflections & Notebook Study Notes</h2>
      <div class="notes-content">${(data as SavedLesson).userNotes.replace(/\n/g, "<br>")}</div>
    </div>
  `
    : "";

  const frameHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${data.title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
          color: #2D251E;
          background-color: #FAF8F5; /* Warm parchment look */
          margin: 0;
          padding: 40px;
          line-height: 1.6;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        @media print {
          body {
            background-color: #FFFFFF;
            padding: 0;
          }
        }
        .parchment {
          max-width: 800px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E6DEC9;
          border-radius: 12px;
          padding: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        @media print {
          .parchment {
            border: none;
            box-shadow: none;
            padding: 0;
          }
        }
        header {
          text-align: center;
          border-bottom: 2px solid #8C5B30;
          padding-bottom: 25px;
          margin-bottom: 35px;
        }
        .era {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          background: #F3EFE0;
          color: #8C5B30;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 12px;
        }
        h1 {
          font-family: 'Lora', Georgia, serif;
          font-size: 28px;
          color: #1F1914;
          margin: 0 0 10px 0;
          font-weight: 700;
          line-height: 1.25;
        }
        .native-title {
          font-family: 'Lora', Georgia, serif;
          font-size: 20px;
          color: #8C5B30;
          margin: 0;
          font-weight: 500;
        }
        .summary-block {
          background-color: #FCFBF7;
          border-left: 4px solid #8C5B30;
          padding: 20px;
          font-family: 'Lora', Georgia, serif;
          font-size: 15px;
          line-height: 1.7;
          color: #4C3C30;
          font-style: italic;
          margin-bottom: 40px;
          border-radius: 0 8px 8px 0;
        }
        .section-title {
          font-family: 'Lora', Georgia, serif;
          font-size: 20px;
          color: #1F1914;
          border-bottom: 1px solid #E6DEC9;
          padding-bottom: 8px;
          margin-top: 40px;
          margin-bottom: 25px;
          font-weight: 750;
        }
        .timeline {
          border-left: 2px solid rgba(140, 91, 48, 0.2);
          margin-left: 20px;
          padding-left: 25px;
        }
        .event-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #ECE7D9;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .event-card::before {
          content: "";
          position: absolute;
          left: -32px;
          top: 22px;
          width: 12px;
          height: 12px;
          background: #8C5B30;
          border-radius: 50%;
          border: 3px solid #FAF8F5;
        }
        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .event-year {
          font-family: monospace;
          background: #FAF8F5;
          border: 1px solid #ECE7D9;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          color: #8C5B30;
        }
        .event-title {
          font-family: 'Lora', Georgia, serif;
          font-weight: 700;
          font-size: 16px;
          color: #1F1914;
        }
        .event-meta {
          font-size: 12px;
          color: #6C5D50;
          margin-bottom: 10px;
          font-weight: 500;
        }
        .event-description {
          font-size: 13.5px;
          color: #4C3C30;
          line-height: 1.6;
        }
        .event-impact {
          background: #FCFBF7;
          border-left: 3px solid #8C5B30;
          padding: 12px;
          margin-top: 15px;
          border-radius: 0 6px 6px 0;
        }
        .impact-label {
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 700;
          color: #8C5B30;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .impact-text {
          font-family: 'Lora', Georgia, serif;
          font-size: 12.5px;
          font-style: italic;
          color: #4C3C30;
        }
        .lessons-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .lesson-card {
          display: flex;
          gap: 15px;
          background: #FAF8F5;
          border: 1px solid #ECE7D9;
          border-radius: 10px;
          padding: 20px;
          page-break-inside: avoid;
        }
        .lesson-num {
          width: 32px;
          height: 32px;
          background: #8C5B30;
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .lesson-title {
          font-family: 'Lora', Georgia, serif;
          font-weight: 700;
          font-size: 15px;
          color: #1F1914;
          margin-bottom: 6px;
        }
        .lesson-content {
          font-size: 13px;
          color: #4C3C30;
          line-height: 1.6;
        }
        .notes-content {
          background: #FAF9F6;
          border: 1px solid #ECE7D9;
          padding: 20px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.65;
          white-space: pre-wrap;
          font-family: monospace;
          color: #2D251E;
        }
        .footer {
          margin-top: 50px;
          text-align: center;
          border-top: 1px solid #E6DEC9;
          padding-top: 20px;
          font-size: 11px;
          color: #8C7C6D;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="parchment">
        <header>
          <div class="era">Chronical Epoch: ${data.era}</div>
          <h1>${data.title}</h1>
          ${data.nativeTitle ? `<h2 class="native-title">${data.nativeTitle}</h2>` : ""}
        </header>

        <div class="summary-block">
          ${data.summary}
        </div>

        <h2 class="section-title">Timeline of Milestones</h2>
        <div class="timeline">
          ${timelineHtml}
        </div>

        <h2 class="section-title">Actionable Lessons Derived</h2>
        <div class="lessons-grid">
          ${lessonsHtml}
        </div>

        ${notesHtml}

        <div class="footer">
          Generated via ERA Multilingual Historical Scriptorium &bull; All scripts preserved
        </div>
      </div>
    </body>
    </html>
  `;

  doc.open();
  doc.write(frameHtml);
  doc.close();

  printFrame.onload = () => {
    setTimeout(() => {
      printFrame.contentWindow?.focus();
      printFrame.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(printFrame);
      }, 1000);
    }, 500);
  };
}
