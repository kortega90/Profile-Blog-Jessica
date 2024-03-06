import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBlog } from "./routes/HomeBlog";
import BodyBlog from "./routes/HomeBlog/BodyBlog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeBlog />}>
            <Route index element={<BodyBlog />} />
            <Route path="home" element={<BodyBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
