import {CiMenuFries} from "react-icons/ci"

import "./menu.css"
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="menu">
      <CiMenuFries
      className="btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      />
       

      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">
            FLY.<span>GO</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
        <ul>
        <li> <Link to={"/"}><span>Principal</span></Link> </li>
        <li><a href="#customers">Depoimentos</a></li>
        <li><Link to={"/destiny"}>Destinos</Link></li>
        <li><a href="#pricing">Preços</a></li>
      </ul>
        </div>
      </div>
    </div>
  );
};
