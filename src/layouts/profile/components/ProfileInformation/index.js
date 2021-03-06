/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

function ProfileInformation() {
  return (
    <ProfileInfoCard
      title="profile information"
      description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
      info={{
        fullName: "Alec M. Thompson",
        mobile: "(44) 123 1234 123",
        email: "alecthompson@mail.com",
        location: "USA",
      }}
      social={[
        {
          link: "https://www.facebook.com/CreativeTim/",
          icon: <FacebookIcon />,
          color: "facebook",
        },
        {
          link: "https://twitter.com/creativetim",
          icon: <TwitterIcon />,
          color: "twitter",
        },
        {
          link: "https://www.instagram.com/creativetimofficial/",
          icon: <InstagramIcon />,
          color: "instagram",
        },
      ]}
      action={{ route: "", tooltip: "Edit Profile" }}
    />
  );
}

export default ProfileInformation;
