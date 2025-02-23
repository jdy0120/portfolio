interface MENUType {
  key: string;
  name: string;
  path: string;
  children?: MENUType[];
}

const MENU: MENUType[] = [
  {
    key: "dashboards",
    name: "Dashboards",
    path: "/dashboards",
    children: [
      {
        key: "overview",
        name: "Overview",
        path: "/dashboards/overview",
      },
      {
        key: "projects",
        name: "Projects",
        path: "/dashboards/projects",
      },
    ],
  },
  {
    key: "pages",
    name: "Pages",
    path: "/pages",
    children: [
      {
        key: "user-profile",
        name: "User Profile",
        path: "/pages/user-profile",
      },
      {
        key: "blog",
        name: "Blog",
        path: "/pages/blog",
      },
    ],
  },
];

export default MENU;

export type { MENUType };
