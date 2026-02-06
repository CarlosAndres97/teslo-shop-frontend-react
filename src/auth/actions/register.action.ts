import { tesloApi } from "@/api/tesoApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (
  email: string,
  password: string,
  fullname: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      email,
      password,
      fullname
    },{
      headers: { Authorization: undefined }
    });
    return data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};