import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SideNavigationBar } from "../layouts/SideNavBar";
import { AdminApproval } from "../pages/AdminApprovalPage";
import { Home } from "../pages/Home";
import { NewsPage } from "../pages/NewsPage";
import { SignIn } from "../pages/SignIn";
import { AddSubTopic, SubTopicPage, UpdateSubTopic } from "../pages/SubTopic";
import { TopicPage, AddTopic, UpdateTopic } from "../pages/TopicPage";
import { UpdateNewsPage } from "../pages/UpdateNewsPage";

export function NavigationLink() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            setTimeout(function () {
                navigate("/signin");
            }, 1);
        }
    }, []);
    return (
        <Routes>
            <Route path="/" element={<><SideNavigationBar /><Home /></>} />
            <Route path="/news">
                <Route index element={<><SideNavigationBar /><NewsPage /></>} />
                <Route path="update" element={<><SideNavigationBar /><UpdateNewsPage /></>} />
            </Route>
            <Route path="/topic">
                <Route index element={<><SideNavigationBar /><TopicPage /></>} />
                <Route path="add" element={<><SideNavigationBar /><AddTopic /></>} />
                <Route path="update/:topic_slug" element={<><SideNavigationBar /><UpdateTopic /></>} />
            </Route>
            <Route path="/subtopic">
                <Route index element={<><SideNavigationBar /><SubTopicPage /></>} />
                <Route path="add" element={<><SideNavigationBar /><AddSubTopic /></>} />
                <Route path="update" element={<><SideNavigationBar /><UpdateSubTopic /></>} />
            </Route>
            <Route path="/adminapproval">
                <Route index element={<><SideNavigationBar /><AdminApproval /></>} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" />
        </Routes>

    )

}