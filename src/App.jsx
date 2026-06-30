import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Submit from "./pages/Submit";
import OwnerLogin from "./pages/OwnerLogin";
import Dashboard from "./pages/Dashboard";
import WidgetPreview from "./pages/WidgetPreview";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Analytics from "./pages/Analytics";
import Testimonials from "./pages/Testimonials";
import Widgets from "./pages/Widgets";
import WidgetCustomizer from "./pages/WidgetCustomizer";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/login" element={<OwnerLogin />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        <Route path="/widget" element={<WidgetPreview />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <Analytics />
    </ProtectedRoute>
  }
/>
        <Route
  path="/testimonials"
  element={
    <ProtectedRoute>
      <Testimonials />
    </ProtectedRoute>
  }
/>
        <Route
  path="/widgets"
  element={
    <ProtectedRoute>
      <Widgets />
    </ProtectedRoute>
  }
/>
        <Route
  path="/widgets/:type"
  element={
    <ProtectedRoute>
      <WidgetCustomizer />
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;