// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import { useRouter, usePathname } from "next/navigation";

type User = {
  name: string;
  email: string;
  picture: string;
};

type AuthContextType = {
  user: User | null;
  isLoadingUser: boolean;
  accessToken: string | null;
  login: (redirectUri: string) => void;
  logout: () => void;
  handleAuthCallback: (code: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const publicPaths = ["/auth", "/callback"];

  useEffect(() => {
    const fetchUser = async () => {
      console.log(pathname);
      try {
        const storedAccessToken = localStorage.getItem("accessToken");

        if (storedAccessToken) {
          setIsLoadingUser(true);
          setAccessToken(storedAccessToken);
          const userData = await verifyUser(storedAccessToken);
          setUser(userData);
        } else {
          if (!publicPaths.includes(pathname)) {
            router.push("/auth");
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoadingUser(false);
      }
    };

    fetchUser();
  }, []);

  const verifyUser = async (token: string) => {
    const verifyResponse = await axios.post<User>(
      `https://api.stg.withrotate.com/api/auth/verify`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return verifyResponse.data;
  };

  const login = async (redirectUri: string) => {
    try {
      const authUrl = `https://api.stg.withrotate.com/api/auth/oauth_authorize?redirect_uri=${redirectUri}`;
      window.location.href = authUrl;
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleAuthCallback = async (code: string) => {
    try {
      const response = await axios.post<{ access_token: string }>(
        `https://api.stg.withrotate.com/api/auth/oauth_token`,
        { code }
      );
      const { access_token } = response.data;

      localStorage.setItem("accessToken", access_token);

      const userData = await verifyUser(access_token);
      setUser(userData);
      setAccessToken(access_token);
    } catch (error: any) {
      console.error("Error during auth callback:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout,
        handleAuthCallback,
        isLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
