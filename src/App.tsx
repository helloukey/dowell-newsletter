import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscribers from "./pages/Subscribers";
import AddSubscriber from "./pages/AddSubscriber";
import SendNewsletter from "./pages/SendNewsletter";

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <div className="w-full h-full min-h-full flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/add" element={<AddSubscriber />} />
          <Route path="/send" element={<SendNewsletter />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
