import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Features",
        url: "#features"
    },
    {
        text: "Our Team", // New route added
        url: "/team"      // Ensure this matches your src/app/team/page.tsx path
    },
    {
        text: "Pricing",
        url: "#pricing"
    },
    {
        text: "Testimonials",
        url: "#testimonials"
    }
];