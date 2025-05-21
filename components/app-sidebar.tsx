"use client"

import { useState } from "react"
import {
  FileText,
  Layers,
  Link,
  Search,
  Puzzle,
  CreditCard,
  BadgeDollarSign,
  HelpCircle,
  RefreshCw,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  User, // Import the User icon for the profile
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter, // Assuming you have a SidebarFooter component or will create one
} from "@/components/ui/sidebar" // Make sure SidebarFooter is exported from here

// Icon mapping by title
const iconMap: Record<string, React.ElementType> = {
  "Articles": FileText,
  "Auto Blog": Layers,
  "Internal Links": Link,
  "Free Backlinks": Search,
  "Integrations": Puzzle,
  "Subscription": CreditCard,
  "Affiliate Program": BadgeDollarSign,
  "Help Center": HelpCircle,
  "Updates": RefreshCw,
  "Live Chat Support": MessageCircle,
}

// Sidebar items
const items = [
  {
    title: "Articles",
    subItems: [
      { title: "Create Article", url: "#" },
      { title: "Generated Article", url: "#" },
      { title: "Keyword Projects", url: "#" },
      { title: "AI Keyword to Article", url: "#" },
      { title: "Steal Competitor Keyword", url: "#" },
      { title: "Import Keyword from GSC", url: "#" },
      { title: "Manual Keyword to Article", url: "#" },
      { title: "Bulk keyword to Article", url: "#" },
      { title: "Article Settings", url: "#" },
    ],
  },
  { title: "Auto Blog", url: "#" },
  { title: "Internal Links", url: "#" },
  { title: "Free Backlinks", url: "#" },
  { title: "Integrations", url: "#" },
  { title: "Subscription", url: "#" },
  { title: "Affiliate Program", url: "#" },
  { title: "Help Center", url: "#" },
  { title: "Updates", url: "#" },
  { title: "Live Chat Support", url: "#" },
]

export function AppSidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openAmazonDropdown, setOpenAmazonDropdown] = useState(false);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  const toggleAmazonDropdown = () => {
    setOpenAmazonDropdown(!openAmazonDropdown);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* Modified SidebarGroupLabel for the dropdown */}
          <SidebarGroupLabel
            onClick={toggleAmazonDropdown}
            className="cursor-pointer flex justify-between items-center border border-gray-300 rounded-md p-2 hover:bg-gray-50" // Added border and rounded-md for outline, flex for alignment
          >
            <span>Amazon.com</span>
            {openAmazonDropdown ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </SidebarGroupLabel>
          {openAmazonDropdown && (
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#" // You can set a real URL here if needed
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                Google.com
              </a>
            </div>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = iconMap[item.title] || FileText

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <SidebarMenuButton onClick={() => toggleDropdown(item.title)}>
                          <Icon />
                          <span>{item.title}</span>
                          {openDropdown === item.title ? (
                            <ChevronUp className="ml-auto" />
                          ) : (
                            <ChevronDown className="ml-auto" />
                          )}
                        </SidebarMenuButton>
                        {openDropdown === item.title && (
                          <div className="ml-6 mt-1 space-y-1">
                            {item.subItems.map((sub) => (
                              <a
                                key={sub.title}
                                href={sub.url}
                                className="block text-sm text-muted-foreground hover:text-foreground"
                              >
                                {sub.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="border-t pt-4 pb-2"> {/* Added border-t for a separator */}
        <SidebarMenuButton asChild>
          <a href="#" className="flex items-center gap-2"> {/* Add a link to the profile page if desired */}
            <User className="h-5 w-5" /> {/* Profile icon */}
            <span>Profile</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}