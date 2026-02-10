import { tesloApi } from "@/api/tesoApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (
  email: string,
  password: string,
  fullName: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      email,
      password,
      fullName,
    },{
      headers: {'Content-Type': 'application/json'}
    });
    return data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};