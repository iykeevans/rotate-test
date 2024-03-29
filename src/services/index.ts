import axios from "axios";

const baseURL = "https://api.stg.withrotate.com/api";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

type User = {
  user_id: string;
  email: string;
  name: string;
  picture: any;
  email_verified: boolean;
  user_metadata: {
    role: number;
    org: any;
  };
  last_login: any;
  given_name: string | null;
  family_name: string | null;
  blocked: boolean;
};

type OrgData = {
  org_id: string;
  main_domain: string;
  unique_name: string;
  display_name: string;
  parent_org: null;
  organization_state: string;
  organization_type: string;
  onboarding_type: string;
  created_time: string;
  last_updated: string;
  _id: string;
  profile: {
    company_logo: string;
    contact_name: string;
    contact_email: string;
    industry: string;
  };
  information: {
    name: string;
    sector: null;
    employees: null;
    revenues: null;
  };
  children: any[];
  domains: any[];
  onboarding_data: {
    activeStep: number;
    complete: boolean;
    consented: boolean;
    form: any[];
  };
  lifecycle_events: any[];
};

export const getUsers = () => {
  return axiosInstance.get<User>("/user_management/list_users");
};

export const getOrgDetails = () => {
  return axiosInstance.get<OrgData>("/org_management/get_org_data");
};

export const updateOrgDetails = (data: any) => {
  return axiosInstance.put("/org_management/update_profile", data);
};
