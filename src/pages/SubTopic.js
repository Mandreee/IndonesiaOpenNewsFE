import React from "react";
export function SubTopicPage() {
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Sub Topic Table</h5></div>
                <div className="flex-custom flex-justify-content-start-custom flex-column-custom align-items-start-custom width-100">
                    <button className="btn-custom btn-custom-red margin-left-3 margin-bottom-1">Add Topic</button>
                    <table className="table margin-left-3 width-80">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Sub Topic ID</th>
                                <th className="th">Sub Topic</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr">
                                <td className="td">Test 1</td>
                                <td className="td">Test</td>
                                <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                            </tr>
                            <tr className="tr">
                                <td className="td">Test 1</td>
                                <td className="td">Test</td>
                                <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                            </tr>
                            <tr className="tr">
                                <td className="td">Test 1</td>
                                <td className="td">Test</td>
                                <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                            </tr>
                            <tr className="tr">
                                <td className="td">Test 1</td>
                                <td className="td">Test</td>
                                <td className="td"><a href="#" className="action-button">Update</a>/<a href="#" className="action-button">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export function AddSubTopic() {
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Add Sub Topic Form</h5></div>
                <form className="form-group-custom flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom margin-top-5">
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="sub-topic">Sub Topic</label>
                        <input type={"text"} className="form-control-custom width-75 margin-left-2" id="sub-topic" />
                    </div>
                    <div className="flex-custom flex-justify-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="topic">Topic</label>
                        <select type={"text"} className="form-control-custom width-75 margin-left-4" id="topic">
                            <option>Choose Topic</option>
                        </select>

                    </div>
                    <button className="btn-custom btn-custom-sky margin-left-7">Add Sub Topic</button>
                </form>
            </div>
        </>
    );

}

export function UpdateSubTopic() {
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "30px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Update Sub Topic Form</h5></div>
                <form className="form-group-custom flex flex-justify-content-around flex-column width-100 margin-top-1">
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-75 margin-left-3 margin-top-2">
                        <label htmlFor="news-title">News Title</label>
                        <input type={"text"} className="form-control-custom margin-left-3 width-80" id="news-title" />
                    </div>
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-100  margin-left-3" style={{ alignSelf: "center" }}>
                        <label> Added At  </label>
                        <p className="form-control-custom-no-border margin-left-3">Joshua Theo Kurniawan Siregar</p>
                    </div>
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-100 margin-left-3" style={{ alignSelf: "center" }}>
                        <label> Updated At  </label>
                        <p className="form-control-custom-no-border margin-left-2">Joshua Theo Kurniawan Siregar</p>
                    </div>
                    <button className="btn-custom btn-custom-emerald center-auto color-white">Update Sub Topic</button>
                </form>
            </div>
        </>
    );

}