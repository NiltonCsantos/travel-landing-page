import {CiMenuFries} from "react-icons/ci"

import "./menu.css"

export default () => {
  return (
    <div className="menu">
      <CiMenuFries
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
            FLY.<span>Go</span>
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
        <li> <span>Principal</span> </li>
        <li>Sobre</li>
        <li>Destinos</li>
        <li>Preços</li>
      </ul>
        </div>
      </div>
    </div>
  );
};
