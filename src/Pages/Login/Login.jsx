import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    identifier: "", // Can be email or username
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.identifier || !form.password) {
      alert("Both fields are required!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black p-4 sm:p-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url('/img/gaming-bg.png')] bg-cover bg-center opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40" />

      <div className="login-card flex flex-col md:flex-row w-full max-w-4xl bg-white/10 backdrop-blur-md text-white shadow-2xl p-6 rounded-lg border border-white/20">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold">Login to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="block text-sm text-gray-300" htmlFor="identifier">Email or Username</label>
              <input id="identifier" name="identifier" placeholder="Email or Username" value={form.identifier} onChange={handleChange} required className="w-full p-3 bg-white/20 rounded focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300" />
            </div>
            <div>
              <label className="block text-sm text-gray-300" htmlFor="password">Password</label>
              <input id="password" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-3 bg-white/20 rounded focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300" />
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded transition-all duration-300 transform hover:scale-105" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">Don't have an account?
             <Link to="/signup">
              {/* <Button id='singup' title='login' ContainerClass='!bg-yellow-300 flex-center gap-1' /> */}
              <span className="text-cyan-400"> Sign Up</span>
            </Link>
          </p>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <img src="img/signup.png" alt="Illustration" className="w-full h-auto object-contain md:max-h-[500px]" />
        </div>
      </div>
    </div>
  );
}
