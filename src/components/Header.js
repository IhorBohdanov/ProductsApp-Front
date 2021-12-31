import { Link } from "react-router-dom";

export const Header = ({ links }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="container">
          <ul className="header__links list list_direction_row">
            {Boolean(links?.length) &&
              links.map((link, index) => (
                <li className="list__item" key={index}>
                  <Link to={link.to}>{link.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
