import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
<<<<<<< HEAD
import { API_BASE } from "../api/client";
=======
>>>>>>> f97d87f8dce02737794187fb19e67f7d7827a941
import "../components/dashboard/StatCard.css";
import "../components/dashboard/Sidebar.css";
import "../components/dashboard/ProfileCard.css";
import "../components/dashboard/OrdersPreview.css";
import "../components/dashboard/SavedShopsPreview.css";

import StatCard from "../components/dashboard/StatCard";
import Sidebar from "../components/dashboard/Sidebar";
import ProfileCard from "../components/dashboard/ProfileCard";
import OrdersPreview from "../components/dashboard/OrdersPreview";
import SavedShopsPreview from "../components/dashboard/SavedShopsPreview";

const CustomerDashboard = () => {
  const { user, login } = useAuth();
  useEffect(() => {
    // On mount, fetch user if not present (for OAuth redirect)
    if (!user) {
      const token = localStorage.getItem("token");
      if (token) {
<<<<<<< HEAD
        axios.get(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
=======
        axios.get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
>>>>>>> f97d87f8dce02737794187fb19e67f7d7827a941
          .then(res => {
            if (res.data && res.data.loggedIn && res.data.customer) {
              login(res.data.customer, token);
            }
          });
      }
    }
  }, [user, login]);
    return (
      <div className="dashboard-container" style={{ display: 'flex', minHeight: '80vh', background: '#f8f9fa' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem', marginLeft: '250px' }}>
        <h2>Welcome to your Dashboard!</h2>
        {/* Search bar for shopping */}
        <div style={{ margin: '24px 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search for products, varieties..."
            style={{ padding: 8, fontSize: 16, width: 320, marginRight: 12 }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.location.href = `/browse?q=${encodeURIComponent(e.target.value)}`;
              }
            }}
          />
          <button
            style={{ padding: '8px 18px', fontSize: 16 }}
            onClick={e => {
              const input = e.target.previousSibling;
              if (input && input.value) {
                window.location.href = `/browse?q=${encodeURIComponent(input.value)}`;
              }
            }}
          >
            🔍 Search
          </button>
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
          <StatCard title="Orders" value={12} />
          <StatCard title="Saved Shops" value={5} />
          <StatCard title="Profile Complete" value="80%" />
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <OrdersPreview />
          <SavedShopsPreview />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <ProfileCard />
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
