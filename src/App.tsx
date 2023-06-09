import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Main,
  Footer,
  Layout,
  Navbar,
  Container,
  Footerbar,
} from "./components/layouts";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import PageOne from "./pages/PageOne";
import NotFoundPage from "./pages/NotFoundPage";
import SendEmail from "./pages/SendEmail";
import "./App.scss";
import MoshPage from "./pages/MoshPage";
import PageDaisyUI from "./pages/PageDaisyUI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header className={"bg-gray-100"}>
            <Container
              pageTitle="React TS Starter"
              FULL
              className={"flex justify-center"}
            >
              <Navbar className={"w-11/12 xl:w-4/5"} />
            </Container>
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/page-one" element={<PageDaisyUI />} />
              <Route path="/page-two" element={<MoshPage />} />
              <Route path="/send-mail" element={<SendEmail />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <Footer className={"bg-gray-200"}>
            <Footerbar />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
