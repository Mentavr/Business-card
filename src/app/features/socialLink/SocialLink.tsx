import { ReactNode } from "react";

type SocialType = "email" | "phone" | "telegram" | "linkedin" | "github" | "instagram" | "custom";

interface ISocialItem {
  icon: ReactNode;
  type: SocialType;
  value: string;
}

const SocialLink = ({ icon, type, value }: ISocialItem) => {
  let href = "#";

  switch (type) {
    case "email":
      href = `mailto:${value}`;
      break;
    case "phone":
      href = `tel:${value}`;
      break;
    case "telegram":
      href = value.startsWith("http")
        ? value
        : `https://t.me/${value.replace("@", "")}`;
      break;
    case "linkedin":
      href = value.startsWith("http")
        ? value
        : `https://linkedin.com/in/${value}`;
      break;
    case "github":
      href = value.startsWith("http")
        ? value
        : `https://github.com/${value}`;
      break;
    case "instagram":
      href = value.startsWith("http")
        ? value
        : `https://instagram.com/${value.replace("@", "")}`;
      break;
    case "custom":
      href = value;
      break;
  }

  return (
    <a
      href={href}
      target={type === "email" || type === "phone" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="block h-[2.5rem] w-[2.5rem] rounded-full bg-light-black flex justify-center items-center desktop:hover:bg-main transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
