import { getSettings } from "@/lib/get-settings";
import { Nav } from "./nav";

export const Header = async () => {
  const settings = await getSettings();
  return <Nav settings={settings} />;
};
