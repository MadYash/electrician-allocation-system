import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      {/* <!-- ======= Sidebar ======= --> */}
      <div className={props.open ? "toggle-sidebar " : "sidebar "}>
        <aside id="sidebar" class="sidebar">
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <Link class="nav-link " to="/">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            {/* <!-- End Components Nav --> */}

            {/* <!-- End Forms Nav --> */}

            {/* <!-- End Tables Nav --> */}

            {/* <!-- End Charts Nav --> */}

            {/* <!-- End Icons Nav --> */}

            <li class="nav-heading">Pages</li>

            <li class="nav-item">
              <Link class="nav-link collapsed" to="/site">
                <i class="bi bi-person"></i>
                <span>Site Table</span>
              </Link>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            {/* <!-- End F.A.Q Page Nav --> */}

            {/* <!-- End Contact Page Nav --> */}

            {/* <!-- End Register Page Nav --> */}

            {/* <!-- End Login Page Nav --> */}

            <li class="nav-item">
              <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
              </a>
            </li>
            {/* <!-- End Error 404 Page Nav --> */}

            {/* <!-- End Blank Page Nav --> */}
          </ul>
        </aside>
        {/* <!-- End Sidebar--> */}
      </div>
    </>
  );
};

export default Sidebar;
