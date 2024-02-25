import { NavLink } from "react-router-dom";

export default function SubMenu() {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li className="font-bold text-xl text-center text-primary pb-6">Menu</li>
      <li>
        <NavLink  className={({ isActive }) => isActive ? "active" : "" }
                  to={`/heros`} >
          Héros
       </NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => isActive ? "active" : "" }
                  to={`/sagas`} >
          Sagas
       </NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => isActive ? "active" : "" }
                  to={`/contact`} >
          Contact
       </NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => isActive ? "active" : "" }
                  to={`/about`} >
          A propos
       </NavLink>
      </li>

 {/*      <li>
        <details>
          <summary>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              to={`/heros`}
            >
              Héros
            </NavLink>
            
          </summary>
          <ul>
            <li>
              <Link to={`/heros/mario`}>Mario</Link>
            </li>
            <li>
            <Link to={`/heros/mario`} >Mario</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>
          <NavLink
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              to={`/sagas`}
            >
              Sagas
            </NavLink>

          </summary>
          <ul>
            <li>
            <Link to={`/sagas/mario`} >Mario</Link>
            </li>
            <li>
            <Link to={`/sagas/mario`} >Mario</Link>
            </li>
          </ul>
        </details>
      </li> */}

    </ul>
  );
}
