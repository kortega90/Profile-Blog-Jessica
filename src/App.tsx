import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBlog } from "./routes/HomeBlog";
import BodyBlog from "./routes/HomeBlog/BodyBlog";
import Resume from "./routes/HomeBlog/Resume";
import Project from "./routes/HomeBlog/Projects";

import Contact from "./routes/HomeBlog/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeBlog />}>
            <Route index element={<BodyBlog />} />
            <Route path="home" element={<BodyBlog />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
