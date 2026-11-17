import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./config/api";

const TOKEN_KEY = "adminToken";
const USER_KEY = "adminUser";

function readStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

async function apiRequest(path, { method = "GET", token, body } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: {
          email: form.email.trim(),
          password: form.password,
          role: "admin",
        },
      });

      if (data.user?.role !== "admin" || !data.token) {
        throw new Error("This account does not have admin access.");
      }

      localStorage.setItem(TOKEN_KEY, data.token);
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login">
      <form className="admin-card" onSubmit={handleSubmit}>
        <p className="admin-kicker">Broget Agriculture</p>
        <h1>Admin sign in</h1>
        <p className="admin-muted">
          Use an admin account to manage services and farmer enquiries.
        </p>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="admin-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}

function DashboardPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_KEY);
  const user = readStoredUser();
  const [services, setServices] = useState([]);
  const [messages, setMessages] = useState([]);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [serviceForm, setServiceForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    duration: "",
  });

  useEffect(() => {
    if (!token) return;

    let ignore = false;

    async function load() {
      try {
        const [serviceData, messageData] = await Promise.all([
          apiRequest("/api/services"),
          apiRequest("/api/contact", { token }),
        ]);

        if (ignore) return;
        setServices(serviceData.services || []);
        setMessages(messageData.messages || []);
      } catch (err) {
        if (!ignore) setError(err.message);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [token]);

  if (!token || user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    navigate("/", { replace: true });
  };

  const handleServiceChange = (event) => {
    const { name, value } = event.target;
    setServiceForm((current) => ({ ...current, [name]: value }));
  };

  const addService = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    try {
      const data = await apiRequest("/api/services", {
        method: "POST",
        token,
        body: {
          title: serviceForm.title,
          category: serviceForm.category,
          description: serviceForm.description,
          price: serviceForm.price === "" ? 0 : Number(serviceForm.price),
          duration: serviceForm.duration,
        },
      });

      setServices((current) => [data.service, ...current]);
      setServiceForm({
        title: "",
        category: "",
        description: "",
        price: "",
        duration: "",
      });
      setNotice(data.message || "Service added.");
    } catch (err) {
      setError(err.message);
    }
  };

  const markRead = async (id) => {
    setError("");
    try {
      const data = await apiRequest(`/api/contact/${id}/read`, {
        method: "PATCH",
        token,
      });
      setMessages((current) =>
        current.map((item) => (item._id === id ? data.enquiry : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Broget Agriculture</p>
          <h1>Admin</h1>
        </div>
        <div className="admin-topbar-actions">
          <span>{user?.name || user?.email}</span>
          <button type="button" onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      {error && <p className="admin-error admin-banner">{error}</p>}
      {notice && <p className="admin-success admin-banner">{notice}</p>}

      <section className="admin-panel">
        <h2>Add service</h2>
        <form className="admin-grid" onSubmit={addService}>
          <input
            name="title"
            placeholder="Title"
            value={serviceForm.title}
            onChange={handleServiceChange}
            required
          />
          <input
            name="category"
            placeholder="Category"
            value={serviceForm.category}
            onChange={handleServiceChange}
            required
          />
          <input
            name="price"
            type="number"
            min="0"
            placeholder="Price"
            value={serviceForm.price}
            onChange={handleServiceChange}
          />
          <input
            name="duration"
            placeholder="Duration"
            value={serviceForm.duration}
            onChange={handleServiceChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={serviceForm.description}
            onChange={handleServiceChange}
            required
          />
          <button type="submit">Save service</button>
        </form>

        <ul className="admin-list">
          {services.length === 0 && <li>No active services yet.</li>}
          {services.map((service) => (
            <li key={service._id}>
              <strong>{service.title}</strong>
              <span>{service.category}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="admin-panel">
        <h2>Farmer enquiries</h2>
        <ul className="admin-list">
          {messages.length === 0 && <li>No enquiries yet.</li>}
          {messages.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong>
              <span>
                {item.email} · {item.phone} · {item.status}
              </span>
              <p>{item.message}</p>
              {item.status !== "read" && (
                <button type="button" onClick={() => markRead(item._id)}>
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
