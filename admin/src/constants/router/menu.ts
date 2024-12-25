interface MENUType {
  name: string;
  path: string;
  children?: MENUType[];
}

const MENU: MENUType[] = [
  {
    name: "Dashboards",
    path: "/dashboards",
    children: [
      {
        name: "Overview",
        path: "/dashboards/overview",
      },
      {
        name: "Projects",
        path: "/dashboards/projects",
      },
    ],
  },
  {
    name: "Pages",
    path: "/pages",
    children: [
      {
        name: "User Profile",
        path: "/pages/user-profile",
      },
      {
        name: "Blog",
        path: "/pages/blog",
      },
    ],
  },
];

export default MENU;

export type { MENUType };
