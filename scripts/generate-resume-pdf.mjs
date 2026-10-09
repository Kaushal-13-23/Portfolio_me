import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'node:fs';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const crimson = rgb(0.85, 0.1, 0.18);
  const dark = rgb(0.1, 0.1, 0.1);
  const gray = rgb(0.35, 0.35, 0.35);
  const lineGray = rgb(0.85, 0.85, 0.85);

  let y = height - 42;
  const margin = 44;
  const contentWidth = width - margin * 2;

  // Name
  page.drawText('KAUSHAL KUMAR SINGH', {
    x: margin,
    y,
    size: 22,
    font: fontBold,
    color: dark,
  });
  y -= 18;

  // Subtitle
  page.drawText('Student Leader  |  Campus Community Builder  |  Event Coordinator', {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: crimson,
  });
  y -= 16;

  // Contact info
  const contactLine = 'Bengaluru, Karnataka  •  +91 8797786686  •  kaushalkumarsingh.7239@gmail.com';
  page.drawText(contactLine, {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: gray,
  });
  y -= 13;

  const contactLine2 = 'Presidency University (BCA)  •  LinkedIn: linkedin.com/in/kaushal-kr-singh  •  Instagram: @kaushhh25';
  page.drawText(contactLine2, {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: gray,
  });
  y -= 12;

  // Divider
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1.5,
    color: crimson,
  });
  y -= 16;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 10.5,
      font: fontBold,
      color: crimson,
    });
    y -= 5;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.8,
      color: lineGray,
    });
    y -= 12;
  }

  // Profile Summary
  drawSectionHeader('Profile Summary');
  const summaryText = 'Third-year Bachelor of Computer Applications student at Presidency University, Bengaluru, with strong experience in student leadership, campus engagement, event coordination, community building, and media activities. Currently serving as the President of CogniCore Club and Metaverse Society Club, with experience coordinating 30+ university events and 28+ NSS events. Experienced in working with student teams, engaging campus communities, supporting event execution, and contributing to media and communication initiatives.';
  
  // Wrap summary
  const words = summaryText.split(' ');
  let line = '';
  for (const w of words) {
    const testLine = line ? `${line} ${w}` : w;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9.5);
    if (testWidth > contentWidth) {
      page.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: dark });
      y -= 13;
      line = w;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: dark });
    y -= 16;
  }

  // Leadership Experience
  drawSectionHeader('Leadership Experience');

  const jobs = [
    {
      role: 'PRESIDENT — COGNICORE CLUB',
      org: 'Presidency School of Information Science, Presidency University, Bengaluru',
      date: 'August 2026 – Present',
      bullets: [
        'Lead the CogniCore Club and support student-focused initiatives within the School of Information Science.',
        'Coordinate with student members and teams to plan and execute club activities.',
        'Encourage student participation and engagement through club initiatives and events.',
      ],
    },
    {
      role: 'PRESIDENT — METAVERSE SOCIETY CLUB',
      org: 'Presidency School of Information Science, Presidency University, Bengaluru',
      date: 'January 2025 – Present',
      bullets: [
        'Lead the Metaverse Society Club and coordinate student activities and initiatives.',
        'Work with student teams to plan and execute club events and activities.',
        'Promote student participation and contribute to building an active campus community.',
      ],
    },
    {
      role: 'STUDENT COORDINATOR (30+ UNIVERSITY EVENTS)',
      org: 'Presidency School of Information Science, Presidency University, Bengaluru',
      date: 'Presidency University',
      bullets: [
        'Coordinated and supported the execution of 30+ university events.',
        'Worked with students and organizing teams to facilitate smooth event operations.',
        'Supported event planning, coordination, communication, and student engagement.',
      ],
    },
  ];

  for (const job of jobs) {
    page.drawText(job.role, { x: margin, y, size: 9.5, font: fontBold, color: dark });
    const dateWidth = fontBold.widthOfTextAtSize(job.date, 8.5);
    page.drawText(job.date, { x: width - margin - dateWidth, y, size: 8.5, font: fontBold, color: gray });
    y -= 12;

    page.drawText(job.org, { x: margin, y, size: 8.5, font: fontOblique, color: gray });
    y -= 11;

    for (const b of job.bullets) {
      page.drawCircle({ x: margin + 4, y: y + 3, size: 1.5, color: crimson });
      page.drawText(b, { x: margin + 12, y, size: 8.5, font: fontRegular, color: dark });
      y -= 11;
    }
    y -= 4;
  }

  // NSS Experience
  drawSectionHeader('NSS Experience');

  const nssJobs = [
    {
      role: 'STUDENT COORDINATOR — NSS (28+ EVENTS)',
      org: 'Presidency University, Bengaluru',
      date: 'August 2025 – Present',
      bullets: [
        'Worked as Student Coordinator for 28+ NSS events.',
        'Coordinated with student volunteers and teams during event planning and execution.',
        'Supported student participation, communication, and on-ground event coordination.',
      ],
    },
    {
      role: 'MEDIA HEAD — NSS',
      org: 'Presidency University, Bengaluru',
      date: 'November 2024 – August 2026',
      bullets: [
        'Served as the Media Head for NSS, directing media and communication activities for all events.',
        'Contributed to promoting and communicating student activities, awareness drives, and social welfare events.',
        'Collaborated with student teams on event-related media activities, documentation, and promotions.',
      ],
    },
  ];

  for (const job of nssJobs) {
    page.drawText(job.role, { x: margin, y, size: 9.5, font: fontBold, color: dark });
    const dateWidth = fontBold.widthOfTextAtSize(job.date, 8.5);
    page.drawText(job.date, { x: width - margin - dateWidth, y, size: 8.5, font: fontBold, color: gray });
    y -= 12;

    page.drawText(job.org, { x: margin, y, size: 8.5, font: fontOblique, color: gray });
    y -= 11;

    for (const b of job.bullets) {
      page.drawCircle({ x: margin + 4, y: y + 3, size: 1.5, color: crimson });
      page.drawText(b, { x: margin + 12, y, size: 8.5, font: fontRegular, color: dark });
      y -= 11;
    }
    y -= 4;
  }

  // Education
  drawSectionHeader('Education');
  page.drawText('BACHELOR OF COMPUTER APPLICATIONS (BCA)', { x: margin, y, size: 9.5, font: fontBold, color: dark });
  const gradText = 'Expected Graduation: 2027';
  const gradWidth = fontBold.widthOfTextAtSize(gradText, 8.5);
  page.drawText(gradText, { x: width - margin - gradWidth, y, size: 8.5, font: fontBold, color: gray });
  y -= 12;
  page.drawText('Presidency University, Bengaluru  •  Presidency School of Information Science  •  Third Year', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: gray,
  });
  y -= 16;

  // Leadership Highlights & Skills
  drawSectionHeader('Leadership Highlights & Core Skills');
  const highlights = [
    '• 2× Club President: CogniCore Club & Metaverse Society Club',
    '• 30+ University Events: Student Coordinator — Presidency School of Information Science',
    '• 28+ NSS Events: Student Coordinator — NSS Community Drives & Volunteer Mobilization',
    '• Media Leadership: Former Media Head — NSS (November 2024 – August 2026)',
  ];
  for (const h of highlights) {
    page.drawText(h, { x: margin, y, size: 8.5, font: fontRegular, color: dark });
    y -= 11;
  }
  y -= 3;

  page.drawText('Skills: Student Leadership • Team Coordination • Event Management • Community Building • Public Communication', {
    x: margin,
    y,
    size: 8.5,
    font: fontBold,
    color: dark,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/assets/Kaushal_Kumar_Singh_Resume.pdf', pdfBytes);
  console.log('Kaushal_Kumar_Singh_Resume.pdf successfully generated!');
}

createResume().catch(console.error);
