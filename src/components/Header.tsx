// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Text, Tabs } from "@radix-ui/themes";

const nav = [
  { label: "Main", href: "/", value: "main" },
  { label: "About", href: "/about", value: "about" },
  { label: "Contacts", href: "/contacts", value: "contacts" },
];

function getActiveValue(pathname: string) {
  if (pathname === "/") return "main";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contacts")) return "contacts";
  return "main";
}

export default function Header() {
  const pathname = usePathname();
  const active = getActiveValue(pathname);

  return (
    <Box
      asChild
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--gray-a6)",
        backdropFilter: "blur(10px)",
        background:
          "color-mix(in oklab, var(--color-background) 85%, transparent)",
      }}
    >
      <header>
        <Flex align="center" px="5" gap="5" wrap="wrap" justify="start">
          {/* Left: Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Text size="4" weight="bold">
              MyProject
            </Text>
          </Link>

          <Tabs.Root value={active}>
            <Tabs.List>
              {nav.map((item) => (
                <Tabs.Trigger
                  key={item.value}
                  value={item.value}
                  style={{ height: "64px" }}
                >
                  <Link
                    href={item.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </Link>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        </Flex>
      </header>
    </Box>
  );
}
