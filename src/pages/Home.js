import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export function Home() {
    const [topics, setTopics] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [news, setNews] = useState([]);
    const [filteredNewsByDate, setFilteredNewsByDate] = useState([]);
    const [filterDate, setFilterDate] = useState(new Date());
    const [isFilteredByDate, setIsFilteredByDate] = useState(false);
    // const [isFilteredByAuthor]
    const [authorId, setAuthorId] = useState(null);
    useEffect(() => {
        getTopics();
        getAuthors();
        getNews();
    }, []);

    useEffect(() => {
        filterByDateAt();
    });

    const getTopics = async () => {
        const topics = await axios.get("http://127.0.0.1:8000/api/topics");
        setTopics(topics.data.topics);
    }

    const getAuthors = async () => {
        const authors = await axios.get("http://127.0.0.1:8000/api/authors");
        setAuthors(authors.data);
    }

    const getNews = async () => {
        await axios.get("http://127.0.0.1:8000/api/news").then(response => {
            setNews(response.data);
        });
    }

    const handleDateChange = (date) => {
        setFilterDate(date);
        console.log(date);
    }

    const filterByDateAt = () => {
        news.slice().sort((a, b) => {
            const created_at_1 = a.added_at;
            const created_at_2 = b.added_at;
            const updated_at_1 = b.updated_at;
            const updated_at_2 = b.updated_at;
            const radioButtons = document.querySelectorAll(".filterd-by-date");
            for (let i = 0; i < radioButtons.length; i++) {
                radioButtons[i].addEventListener("change", function (param) {
                    if (param.target) {
                        setIsFilteredByDate(true);
                    }
                    if (param.target.value == "created_at") {

                    }
                    if (param.target.value == "updated_at") {

                    }
                });
            }
        });
    }
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "5px", marginBottom: "5px", width: "100%" }}>
                    <h5 className="center-auto">News Table</h5>
                </div>
                <div className="row-custom background-aliceblue">
                    <div className="col-custom-4 flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom">
                        <label>Filter By Date</label>
                        <div className="flex flex-justify-content-start margin-left-1 flex-column align-items-baseline">
                            <DatePicker selected={filterDate} onChange={handleDateChange} />
                            <div className="flex flex-justify-content-around flex-column align-items-start">
                                <label><input type={"radio"} value="created_at" name="filtered-by-date" className="filterd-by-date" />Created At</label>
                                <label><input type={"radio"} value="updated_at" name="filtered-by-date" className="filterd-by-date" />Updated At</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-custom-4 flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom">
                        <label>Filter By Author</label>
                        <select className="form-control-custom width-70 cursor-pointer">
                            <option className="" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>Choose an Author </option>
                            {
                                authors.map((data, key) => {
                                    return (
                                        <>
                                            <option className="" value={data.name} key={key}>{data.name} </option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-custom-4 flex-custom flex-justify-content-around-custom flex-column-custom">
                        <label>Filter By Keywords</label>
                        <input type="text" className="form-control-custom" />
                    </div>
                    <div className="flex-custom flex-justify-content-around-custom margin-bottom-1">
                        <button className="btn-custom btn-custom-white center-auto">Confirm Filter</button>
                    </div>
                </div>
                <div className="row-custom h-75hv-w-90">
                    {
                        news.map((data, key) => {
                            let element_updatedat;
                            if (data.updated_at === null) {
                                element_updatedat = "";
                            } else {
                                element_updatedat = <>{data.updated_at}</>
                            }
                            return (
                                <div className="col-custom-4 background-grey-1" style={{ border: "1px solid white" }}>
                                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-center-custom margin-bottom-2">
                                        <img width={50} height={50} className="rounded-circle" src={data.photo_profile_link} />
                                        <h5 className="margin-left-1">{data.name}</h5>
                                    </div>
                                    <img style={{ width: "75%", height: "150px" }} src={data.news_picture_link} />
                                    {/* <p>{data.author}</p> */}
                                    <a href="#" className="link-h5"><span>{data.news_title}</span></a>
                                    <p>{new Date(data.added_at).toString()}</p>
                                    {element_updatedat}
                                    <p className="font-body-content">{data.news_content}</p>
                                    <button className="btn-custom btn-custom-white" style={{ display: "inline-block" }}>
                                        Update
                                    </button>
                                    <button className="btn-custom btn-custom-red" style={{ display: "inline-block", marginLeft: "10px" }}>
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Topic Table</h5></div>
                <button className="btn-custom btn-custom-red margin-left-2">Add Topic</button>
                <table className="table margin-left-3 width-80 margin-top-1">
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">Topic ID</th>
                            <th className="th">Topic</th>
                            <th className="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            topics.map((data, key) => {
                                return (
                                    <>
                                        <tr className="tr" key={key}>
                                            <td className="td">{data.id}</td>
                                            <td className="td">{data.topic_title}</td>
                                            <td className="td"><NavLink to={`/topic/update/${data.topic_slug}`} className="action-button">Update</NavLink>/<NavLink to="#" className="action-button">Delete</NavLink></td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}>
                    <h5 className="center-auto">Sub Topic Table</h5>
                </div>
                <button className="btn-custom btn-custom-emerald margin-left-3">Add Sub Topic</button>
                <table className="table margin-left-3 width-80 margin-top-1">
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
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}>
                    <h5 className="center-auto">Admin Approval</h5>
                </div>
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
            </div>
        </>
    )

}
