// route/AppRouter.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Home, About, Controls, Contact ,Signup, Login} from '../Pages/index.js';  // Assuming Pages are in the correct directory
import Layout from '../Layout/Layout.jsx';  // Assuming Layout is in the correct directory
import AdminDashboard from '../Pages/Admin/AdminDashboard.jsx';
import PlayerControls from '../Pages/Admin/PlayerControls.jsx';
import AdminLogin from '../Pages/Admin/AdminLogin.jsx';

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="controls" element={<Controls />} />
    </Route>

    {/* routing for login and signup */}
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>

    {/* admin controls */}
    <Route path="/admin" element={<AdminLogin />} />
    <Route path="/admindashboard" element={<AdminDashboard />} />
    <Route path="/player-controls/:playerId" element={<PlayerControls />} />
    </>
  )
);

export default AppRouter;
