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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/login" element={<OwnerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/widget" element={<WidgetPreview />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route
  path="/widgets/:type"
  element={<WidgetCustomizer />}
/>
<Route
  path="/settings"
  element={<Settings />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;