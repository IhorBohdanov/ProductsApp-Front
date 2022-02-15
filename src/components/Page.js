import { useEffect } from "react";

export const Page = ({ pageTitle, children, suffix, wide }) => {
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title title title_size_main">{pageTitle}</h1>
        {suffix}
      </div>
      <section className={`page__body ${wide && 'page__body_wide'}`}>{children}</section>
    </div>
  );
};
