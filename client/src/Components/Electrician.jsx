import React, { useEffect, useState } from "react";
import Home from "./Home";
import { getElectricianData, getSiteData } from "../services/General";
const Electrician = () => {
  const [siteData, setSiteData] = useState([]);
  const [electricianData,setElectricianData] = useState([]);
  const getData = () => {
    getSiteData((res) => {
      if (res?.status === 200) {
        setSiteData(res?.data);
      } else {
        alert("Failed to fetch data");
      }
    });
  };

  const getElectrician = () => {
    getElectricianData((res) => {
      setElectricianData(res?.data)
    });
  };

  useEffect(() => {
    getData();
    getElectrician();
  }, []);
  return (
    <>
      <Home />
      <main className="main" id="main">
        <div className="mt-3 ">
          <table className="table table-light table-hover">
            <thead>
              <tr>
                <th scope="col"> S.No</th>
                <th scope="col"> Name</th>
                <th scope="col">Mobile Number </th>
                <th scope="col"> City</th>
                <th scope="col">Installation Date</th>
                <th scope="col">Grievance/General</th>
                <th scope="col">Assign Electricians</th>
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
                      <td>{item.grievance === true ? "Grievance": "General"}</td>
                      <td>{item?.grievance === true ?
                    
                    electricianData?.map((item)=>item?.grievanceElectrician === true ? `${item?.name},` : null)
                    :
                    electricianData?.map((item)=>item?.grievanceElectrician=== false ? `${item?.name},` : null)

                      }</td>
                  
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

export default Electrician;
