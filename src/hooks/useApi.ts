import api from "@/lib/api";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useApi = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        // Берем токен, который мы прокинули в callbacks в auth.ts
        const token = (session as any)?.accessToken;
        if (token && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
    };
  }, [session]);

  return api;
};