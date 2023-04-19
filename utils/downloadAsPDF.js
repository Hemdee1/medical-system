import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const downloadAsPDF = () => {
  const input = document.getElementById("print");

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 40, 40);
    pdf.save("appointmenet-slip.pdf");
  });
};

export default downloadAsPDF;
