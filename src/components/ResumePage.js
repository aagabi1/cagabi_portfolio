import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/resume.pdf";

function ResumePage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <div>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumePage;
