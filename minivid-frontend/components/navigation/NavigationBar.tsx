import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggleButton";

function NavigationButton({ href, name }: { href: string; name: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href}>{name}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationButton href="/" name="Home" />
        <NavigationButton href="/edit" name="Edit Video" />
        <NavigationButton href="/about" name="About us" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function TopBar() {
  return (
    <div className="flex flex-row w-screen justify-center items-center min-h-fit pt-5 gap-10">
      <NavigationBar />
      <ModeToggle />
    </div>
  );
}
