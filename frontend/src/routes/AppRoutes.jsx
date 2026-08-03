import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Candidates from "../pages/Candidates/Candidates";
import Resume from "../pages/Resume/Resume";
import Evaluation from "../pages/Evaluation/Evaluation";
import Interview from "../pages/Interview/Interview";
import Jobs from "../pages/Jobs/Jobs";
import Chat from "../pages/Chat/Chat";
import Copilot from "../pages/Copilot/Copilot";
export default function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Dashboard />}
            />

            <Route
                path="/candidates"
                element={<Candidates />}
            />

            {/* Future Pages */}

            <Route
                path="/jobs"
                element={<Jobs />}
            />

            <Route
                path="/resume"
                element={<Resume />}
            />

            <Route
                path="/evaluation"
                element={<Evaluation />}
            />

            <Route
                path="/interview"
                element={<Interview />}
            />

            <Route
                path="/skill-gap"
                element={<h1 style={{ color: "white", margin: 40 }}>Skill Gap</h1>}
            />

            <Route
                path="/chat"
                element={<Chat />}
            />

            <Route
                path="/copilot"
                element={<Copilot />}
            />

            <Route
                path="/settings"
                element={<h1 style={{ color: "white", margin: 40 }}>Settings</h1>}
            />

        </Routes>

    );

}