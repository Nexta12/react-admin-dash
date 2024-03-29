import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, TrendingDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <TrendingDown className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Credit
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Projects
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Income
              </li>
            </ul>
          </div>
          <div className="sidebarmenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Add Staff
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Payment
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Returns
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
