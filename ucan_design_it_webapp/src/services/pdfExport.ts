import jsPDF from "jspdf";

export const exportToPdf = () => {
  const doc = new jsPDF();

  doc.text("Ucan Design It Webapp - Report", 10, 10);
  doc.text("This is a sample report.", 10, 20);

  // Add more content here based on the application state
  // For example:
  // doc.text("Project: Project Alpha", 10, 30);
  // doc.text("Design Code: ACI", 10, 40);

  doc.save("report.pdf");
};
