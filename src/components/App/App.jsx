// Modules
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useUser from "@/hooks/useUser";
import useVeterinary from "@/hooks/useVeterinary";

// Components partials
import Header from "@/components/partials/Header/Header";

// Components
import Register from "@/components/Register/Register";
import Home from "../Home/Home";
import Account from "../Account/Account";
import AccountEdit from "../AccountEdit/AccountEdit";
import Veterinary from "../Veterinary/Veterinary";
import VeterinaryEdit from "../VeterinaryEdit/VeterinaryEdit";
import AddCompanion from "../AddCompanion/AddCompanion";
import Companion from "../Companion/Companion";
import NewReminder from "../Reminders/NewReminders";
import Search from "../Search/Search";
import View404 from "../View404/View404";
import ViewRegistration from "../ViewRegistration/ViewRegistartion";
import ViewTeam from "../ViewTeam/ViewTeam";
import VeterinaryFavourite from "../VeterinaryFavourite/VeterinaryFavourite";

// Styles
import "./App.scss";

function App() {
  const user = useUser();
  const veterinary = useVeterinary();

  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }

  return (
    <div className="app">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<ViewTeam />} />

        {!user.isLogged() && <Route path="/register" element={<Register />} />}
        <Route path="/register/registration" element={<ViewRegistration />} />

        {user.isLogged() && (
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/account/edit" element={<AccountEdit />} />
            <Route path="/account/companion/new" element={<AddCompanion />} />
            <Route
              path="/account/companion/:companionId"
              element={<Companion />}
            />
            <Route path="/account/favorite" element={<VeterinaryFavourite />} />
            <Route path="/account/reminders/new" element={<NewReminder />} />
            <Route path="/account/search" element={<Search />} />
            {veterinary.roleVeterinary() && (
              <>
                <Route path="/veterinary" element={<Veterinary />} />
                <Route path="/veterinary/edit" element={<VeterinaryEdit />} />
              </>
            )}
          </>
        )}

        <Route path="*" element={<View404 />} />
      </Routes>
    </div>
  );
}

export default App;
