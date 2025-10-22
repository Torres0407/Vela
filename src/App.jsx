import { BrowserRouter, Route, Routes } from "react-router";

import About from "./CustomerPages/About";
import CustomerLayout from "./CustomerPages/CLayout";
import Contact from "./CustomerPages/Contact";
import Homepage from "./CustomerPages/Homepage";
import Shop from "./CustomerPages/Shop";
import VDashboard from "./VendorPages/VDashboard";
import VLayout from "./VendorPages/VLayout";
import VMessages from "./VendorPages/VMessages";
import VOrders from "./VendorPages/VOrders";
import VProducts from "./VendorPages/VProducts";

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
          {/* Add other vendor pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
