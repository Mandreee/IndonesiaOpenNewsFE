import React from "react";

export class AdminApproval extends React.Component {
    render() {
        return (
            <>
                <table className="table margin-left-3 width-80 margin-top-1">
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">Admin Approval ID</th>
                            <th className="th">Author Name</th>
                            <th className="th">Author Description</th>
                            <th className="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr">
                            <td className="td">1</td>
                            <td className="td">Test</td>
                            <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                            <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </>)
    }
}