import logo from '../images/huron.png';
import userLogo from '../images/user.png';
import notificationLogo from '../images/notification.png';

function Header() {
    return (
        <>
            <header>
                <div class="logo-holder">
                    <div class="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <h2>User Access Management</h2>
                <nav>
                    <ul>
                        <li class="active">
                            <a href="#">User Management</a>
                        </li>
                        <li>
                            <a href="#">User Authorization</a>
                        </li>
                        <li>
                            <a href="#">Reports</a>
                        </li>
                    </ul>
                </nav>
                <div class="notification">
                    <img src={notificationLogo} alt="Notification" />
                </div>
                <div class="user">
                    <div class="details">
                        <span class="name">John Doe</span>
                        <span class="des">CXO</span>
                    </div>
                    <div class="info">
                        <img src={userLogo} alt="User Info" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;