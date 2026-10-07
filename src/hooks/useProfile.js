import { useMemo } from "react";
import { getProfile } from "../services/profileService";

export function useProfile() {
  return useMemo(() => getProfile(), []);
}
