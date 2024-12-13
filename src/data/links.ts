interface LinkType {
  name: string;
  path: string;
  type: "internal" | "external";
}

const links: LinkType[] = [
  { name: "HOME", path: "/", type: "external" },
  { name: "ABOUT US", path: "/aboutus", type: "external" },
  // { name: "LATEST WORK", path: "#latestworks", type: "internal" },
  { name: "VLOGS", path: "/vlogs", type: "external" },
  { name: "COUPONS", path: "/coupons", type: "external" },
  { name: "CONTACT US", path: "#contactus", type: "internal" },
];

export default links;
