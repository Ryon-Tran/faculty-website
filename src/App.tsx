import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AboutDetail from './pages/AboutDetail';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Admissions from './pages/Admissions';
import AdmissionsList from './pages/AdmissionsList';
import AdmissionsDetail from './pages/AdmissionsDetail';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import Notifications from './pages/Notifications';
import Departments from './pages/Departments';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import Documents from './pages/Documents';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Cooperation from './pages/Cooperation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Trang chủ */}
          <Route index element={<Home />} />

          {/* Giới thiệu */}
          <Route path="gioi-thieu" element={<About />} />
          <Route path="gioi-thieu/:slug" element={<AboutDetail />} />
          <Route path="khoa-bo-mon" element={<Departments />} />

          {/* Tin tức & Thông báo */}
          <Route path="tin-tuc" element={<NewsList />} />
          <Route path="tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="thong-bao" element={<Notifications />} />

          {/* Tuyển sinh */}
          <Route path="tuyen-sinh" element={<Admissions />} />
          <Route path="tuyen-sinh/danh-muc" element={<AdmissionsList />} />
          <Route path="tuyen-sinh/:slug" element={<AdmissionsDetail />} />

          {/* Đào tạo */}
          <Route path="dao-tao" element={<Education />} />
          <Route path="tai-lieu-bieu-mau" element={<Documents />} />

          {/* Hợp tác */}
          <Route path="hop-tac" element={<Cooperation />} />

          {/* Hoạt động sinh viên */}
          <Route path="hoat-dong" element={<Activities />} />

          {/* Liên hệ */}
          <Route path="lien-he" element={<Contact />} />

          {/* Tìm kiếm */}
          <Route path="tim-kiem" element={<Search />} />
          <Route path="ket-qua-tim-kiem" element={<SearchResults />} />

          {/* Thư viện */}
          <Route path="thu-vien-anh" element={<Gallery />} />
          <Route path="video" element={<Videos />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
