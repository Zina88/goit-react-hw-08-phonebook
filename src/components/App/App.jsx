import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "components/Header";
import css from "./App.module.css";
import Loader from "components/Loader";

const ContactsPage = lazy(() => import("pages/ContactsPage"));

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <Header />
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ContactsPage />} />

          <Route path="*" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
