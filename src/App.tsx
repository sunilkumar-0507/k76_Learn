import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Courses from '@/pages/Courses';
import Category from '@/pages/Category';
import CourseDetail from '@/pages/CourseDetail';
import CareerDevelopment from '@/pages/CareerDevelopment';
import WhyK76 from '@/pages/WhyK76';
import Fees from '@/pages/Fees';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// Pages are imported eagerly so every route can be prerendered to static HTML at build time.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:category" element={<Category />} />
        <Route path="courses/:category/:course" element={<CourseDetail />} />
        <Route path="career-development" element={<CareerDevelopment />} />
        <Route path="why-k76-learn" element={<WhyK76 />} />
        <Route path="fees" element={<Fees />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
