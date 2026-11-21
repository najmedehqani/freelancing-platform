import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import { DarkModeProvier } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import FreelancerLayout from "./features/freelnacer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerProjectDetails from "./pages/OwnerProjectDetails";
import FreelancerProposals from "./pages/FreelancerProposals";
import FreelancerProjects from "./pages/FreelancerProjects";
import AdminUsers from "./pages/AdminUsers";
import AdminProjects from "./pages/AdminProjects";
import AdminProposals from "./pages/AdminProposals";
import AdminCreateCategory from "./pages/AdminCreateCategory";
import AdminCategories from "./pages/AdminCategories";
import CategoryDetails from "./pages/CategoryDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./ui/ScrollToTop";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import AdminEditCategory from "./pages/AdminEditCategories";
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvier>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/categories/:categoryId" element={<CategoryDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<OwnerProjects />} />
            <Route path="projects/:id" element={<OwnerProjectDetails />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<FreelancerProposals />} />
            <Route path="projects" element={<FreelancerProjects />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="proposals" element={<AdminProposals />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="categories/create" element={<AdminCreateCategory />} />
            <Route
              path="categories/:categoryId/edit"
              element={<AdminEditCategory />}
            />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvier>
  );
}

export default App;
