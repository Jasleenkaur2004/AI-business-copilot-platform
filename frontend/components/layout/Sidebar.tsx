import Link from "next/link";
import { navigationItems } from "@/config/navigation";

export default function Sidebar() {
  return (
    <aside>
      <h2>AI Business Copilot</h2>

      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}