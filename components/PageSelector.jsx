// components/PageSelector.js
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Editorial from '../pages/Editorial';
import EditorialTool from '../pages/EditorialTool';
import NewspaperA from '../pages/NewspaperA';
import NewspaperAnalysis from '../pages/NewspaperAnalysis';
import NotesTools from '../pages/NotesTools';
import Notes from '../pages/Notes';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SmartNotesTool from '../pages/SmartNotesTool';
import SmartNotes from '../pages/SmartNotes';
import SmartStudentool from '../pages/SmartStudentTool';
import SmartStudent from '../pages/SmartStudent';

export function getPageComponent(pathname) {
  switch (pathname) {
    case '/':
      return Home;
    case '/about':
      return AboutUs;
    case '/contact':
      return ContactUs;
    case '/editorial':
      return Editorial;
    case '/editorial-tool':
      return EditorialTool;
    case '/newspaper-a':
      return NewspaperA;
    case '/newspaper-analysis':
      return NewspaperAnalysis;
    case '/notes-tools':
      return NotesTools;
    case '/notes':
      return Notes;
    case '/privacy-policy':
      return PrivacyPolicy;
    case '/smart-notes-tool':
      return SmartNotesTool;
    case '/smart-notes':
      return SmartNotes;
    case '/smart-student-tool':
      return SmartStudentool;
    case '/smart-student':
      return SmartStudent;
    default:
      return null;
  }
}
