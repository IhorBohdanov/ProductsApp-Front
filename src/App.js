import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Home,
  Products,
  SingleProduct,
  CreateProduct,
  EditProduct,
  Categories,
  CreateCategory,
  EditCategory,
} from "./pages";
import { Footer, Header, Main } from "./components";
import "./scss/styles.scss";

const headerLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Products",
    to: "/products",
  },
  {
    title: "Categories",
    to: "/categories",
  },
];

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/products/create",
    element: <CreateProduct />,
  },
  {
    path: "/products/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/create",
    element: <CreateCategory />
  },
  {
    path: "/categories/edit/:id",
    element: <EditCategory />
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header links={headerLinks} />
        <Main>
          <Routes>
            {Boolean(pages?.length) &&
              pages.map((page, index) => (
                <Route path={page.path} element={page.element} key={index} />
              ))}
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
