import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function AdminApproval() {
    const [adminApprovals, setAdminApprovals] = useState([]);
    // const [adminApprovalId, setadminApprovalId] = useState("");

    const getAdminApprovals = async () => {
        await axios.get("http://127.0.0.1:8000/api/adminapproval/news").then(res => {
            setAdminApprovals(res.data.admin_news_approval)
        })
    };

    const RejectAdminApproval = async (id) => {
        // let formdata = new FormData()
        // formdata.append("adminApproval_title", adminApprovalTitle)
        // formdata.append("adminApproval_id", adminApprovalId)
        await axios.post("http://127.0.0.1:8000/api/adminapproval/news/reject/" + id).then(res => { })
        alert('rejected')
        getAdminApprovals();
    }
    const ApproveAdminApproval = async (id) => {
        // let formdata = new FormData()
        // formdata.append("adminApproval_title", adminApprovalTitle)
        // formdata.append("adminApproval_id", adminApprovalId)
        await axios.post("http://127.0.0.1:8000/api/adminapproval/news/approve/" + id).then(res => { })
        alert('approved')
        getAdminApprovals();
    }

    useEffect(() => {
        getAdminApprovals();
    }, []);

    return (
        <>
            <table className="table margin-left-3 width-80 margin-top-1">
                <thead className="thead">
                    <tr className="tr">
                        <th className="th">Admin Approval ID</th>
                        <th className="th">Author Title</th>
                        <th className="th">Author Name</th>
                        <th className="th">News Content</th>
                        <th className="th">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminApprovals.map((data, key) => {
                            return (
                                <tr key={key}>
                                    <td className="td">
                                        {data.id}
                                    </td>
                                    <td className="td"  >
                                        {data.news_title}
                                    </td>
                                    <td className="td"  >
                                        {data.name}
                                    </td>
                                    <td className="td"  >
                                        {data.news_content}
                                    </td>
                                    <td  >
                                        <button onClick={() => ApproveAdminApproval(data.id)} className="action-button">Approve</button>/
                                        <button onClick={() => RejectAdminApproval(data.id)} className="action-button">Rejected</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>)
}
