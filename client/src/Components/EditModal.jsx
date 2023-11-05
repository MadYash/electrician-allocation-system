import React, { useState } from "react";
import { updateDate } from "../services/General";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
// import { useDispatch } from "react-redux";
// import { failed, success } from "../../components/toaster/Toastify";
// import { editTeacher, teacherListing } from "../../context/AdminSlice";

const EditModal = () => {
  //   const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem("edit_date_id"));
  const date = JSON.parse(localStorage.getItem("date"));
  const [editVal, setEditVal] = useState({
    InstallationDate: "",
  });
  const navigate = useNavigate()
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEditVal({ ...editVal, [name]: value });
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    updateDate(id,editVal,(res)=>{
      navigate("/site")
    })
  };
  return (
    <>
    <Home/>
    <main id="main" className="main">
      {/* <!-- Modal --> */}

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Installation Date
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                name="InstallationDate"
                id="floatingInput"
                // placeholder="Installation Date"
                placeholder={date}
                value={editVal.InstallationDate}
                onChange={handleChange}
              />
              <label for="floatingInput">Previous Installation Date - {date}</label>
            </div>

            {/* <input type="hidden" name="id" value={props.id.current} /> */}
          </div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={()=>navigate("/site")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEdit}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default EditModal;
