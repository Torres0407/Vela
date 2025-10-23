import { BrowserRouter, Route, Routes } from "react-router";

import About from "./CustomerPages/About";
import CustomerLayout from "./CustomerPages/CLayout";
import Contact from "./CustomerPages/Contact";
import Homepage from "./CustomerPages/Homepage";
import Shop from "./CustomerPages/Shop";
import VAnalytics from "./VendorPages/VAnalytics";
import VDashboard from "./VendorPages/VDashboard";
import VEarnings from "./VendorPages/VEarnings";
import VLayout from "./VendorPages/VLayout";
import VMessages from "./VendorPages/VMessages";
import VOrders from "./VendorPages/VOrders";
import VProducts from "./VendorPages/VProducts";
import VProfile from "./VendorPages/VProfile";
import VPromotions from "./VendorPages/VPromotions";
import VReviews from "./VendorPages/VReviews";
import VSupport from "./VendorPages/VSupport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Homepage />} />
        </Route>

        {/* Vendor Routes */}
        <Route path="/vendor" element={<VLayout />}>
          <Route index element={<VDashboard />} />
          <Route path="/vendor/dashboard" element={<VDashboard />} />
          <Route path="/vendor/products" element={<VProducts />} />
          <Route path="/vendor/orders" element={<VOrders/>} />
          <Route path="/vendor/messages" element={<VMessages />} />
          <Route path="/vendor/profile" element={<VProfile />} />
          <Route path="/vendor/earnings" element={<VEarnings />} />
          <Route path="/vendor/analytics" element={<VAnalytics />} />
          <Route path="/vendor/reviews" element={<VReviews />} />
           <Route path="/vendor/promotions" element={<VPromotions />} />
          <Route path="/vendor/support" element={<VSupport />} />

          

          
          {/* Add other vendor pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
