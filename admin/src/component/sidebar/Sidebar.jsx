import { AlignVerticalBottom, AttachMoney, Feedback, LineStyle, Mail, ManageAccounts, MessageSharp, Person, ProductionQuantityLimits, Report, Timeline, TrendingUp } from "@mui/icons-material";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcons" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              
              <Person className="sidebarIcons" />
              User
            </li>
            <li className="sidebarListItem">
              <ProductionQuantityLimits className="sidebarIcons" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AlignVerticalBottom className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageSharp className="sidebarIcons" />
              Message
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccounts className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
