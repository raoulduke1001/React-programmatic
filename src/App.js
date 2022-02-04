import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./widgets";

import {
  AddCompany,
  Balance,
  Company,
  Counters,
  Finance,
  Profile,
  SignIn,
  SignUp,
  Statistics,
  BasicSettings,
  MediaPlan,
  Audience,
  Optimisation,
  Banners,
  Replenishment,
  BalanceHistory,
  ContactDetails,
  BankAudits,
  Settings,
} from "./modules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Company />} />

          <Route path="add-company" element={<AddCompany />}>
            <Route path="" element={<BasicSettings />} />
            <Route path="media-plan" element={<MediaPlan />} />
            <Route path="audience" element={<Audience />} />
            <Route path="optimisation" element={<Optimisation />} />
            <Route path="banners" element={<Banners />} />
          </Route>

          <Route path="statistics" element={<Statistics />} />

          <Route path="finance" element={<Finance />}>
            <Route path="replenishment" element={<Replenishment />} />
            <Route path="balance-history" element={<BalanceHistory />} />
          </Route>

          <Route path="counters" element={<Counters />} />

          <Route path="profile" element={<Profile />}>
            <Route path="contact-details" element={<ContactDetails />} />
            <Route path="bank-audits" element={<BankAudits />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="balance" element={<Balance />} />
        </Route>

        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
