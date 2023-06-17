import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import ArticlePage from "./ArticlePage";
import NotFoundPage from "./NotFoundPage";
import ContactPage from "./ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
