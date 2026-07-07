import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";
import "../styles/profile.css";

function Profile() {

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="profile-container">

                    <div className="profile-card">

                        <h2>👤 Business Profile</h2>

                        <hr />

                        <p><strong>🏢 Car Wash Name :</strong> Abhi Car Wash</p>

                        <p><strong>👨 Owner Name :</strong> Abhi</p>

                        <p><strong>📞 Phone :</strong> 9676545357</p>

                        <p><strong>📧 Email :</strong> nelliabhishek393@gmail.com</p>

                        <p>
                            <strong>📍 Address :</strong><br />
                            Opp. Padmavathi Function Hall,<br />
                            Gollapudi,<br />
                            Vijayawada,<br />
                            Andhra Pradesh - 521225
                        </p>

                        <p><strong>🕘 Working Hours :</strong> 8:00 AM - 8:00 PM</p>

                        <p><strong>📅 Established :</strong> 2026</p>

                        <p><strong>📝 Description :</strong> Professional Car Washing & Detailing Services</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;