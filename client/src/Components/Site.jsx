import React, { useEffect, useState } from "react";
import Home from "./Home";
import {  getSiteData } from "../services/General";
import { useNavigate } from "react-router-dom";
const Site = () => {
  const [siteData, setSiteData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    getSiteData((res) => {
      if (res?.status === 200) {
        setSiteData(res?.data);
      } else {
        alert("Failed to fetch data");
      }
    });
  };

  
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Home />
      <main className="main" id="main">
        <div className="mt-3 ">
          <button className="btn btn-primary" onClick={()=>navigate('/assign-electrician')}>Assign Electricians</button>
          <table className="table table-light table-hover">
            <thead>
              <tr>
                <th scope="col"> S.No</th>
                <th scope="col"> Name</th>
                <th scope="col">Mobile Number </th>
                <th scope="col"> City</th>
                <th scope="col">Installation Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {siteData.map((item, inx) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{inx + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.city}</td>
                      <td>{item.InstallationDate}</td>
                      <td>
                        <td>
                          {" "}
                          <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              localStorage.setItem(
                                "edit_date_id",
                                JSON.stringify(item._id)
                              );
                              localStorage.setItem(
                                "date",
                                JSON.stringify(item?.InstallationDate)
                              );
                              navigate("/edit-site");
                            }}
                          >
                            <i className="bi bi-pencil-fill"></i>{" "}
                          </button>
                        </td>
                        <td>
                          {/* <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() =>
                              localStorage.setItem(
                                "delete_contact_id",
                                JSON.stringify(item._id)
                              )
                            }
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button> */}
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </main>
    </>
  );
};

export default Site;
