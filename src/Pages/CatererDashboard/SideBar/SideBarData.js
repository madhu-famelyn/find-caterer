import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaImages,
  FaListAlt,
  FaMapMarkerAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: FaHome,
    path: "/caterer/dashboard",
  },
  {
    label: "Enquiries",
    icon: FaEnvelope,
    path: "/caterer/enquiries",
  },
  {
    label: "My Profile",
    icon: FaUser,
    path: "/caterer/profile",
  },
  {
    label: "Gallery",
    icon: FaImages,
    path: "/caterer/gallery",
  },
  {
    label: "Services & Pricing",
    icon: FaListAlt,
    path: "/caterer/services",
  },
  {
    label: "Availability & Areas",
    icon: FaMapMarkerAlt,
    path: "/caterer/availability",
  },
  {
    label: "Profile Settings",
    icon: FaCog,
    path: "/caterer/settings",
  },
  {
    label: "Logout",
    icon: FaSignOutAlt,
    path: "/logout",
    isLogout: true,
  },
];
