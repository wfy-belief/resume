export interface PhotoConfig {
  width: number;
  height: number;
  aspectRatio: "1:1" | "4:3" | "3:4" | "16:9" | "custom";
  borderRadius: "none" | "medium" | "full" | "custom";
  customBorderRadius: number;
  visible?: boolean;
}

export const DEFAULT_CONFIG: PhotoConfig = {
  width: 96,
  height: 96,
  aspectRatio: "1:1",
  borderRadius: "none",
  customBorderRadius: 0,
  visible: true
};

// 助手函数
export const getRatioMultiplier = (ratio: PhotoConfig["aspectRatio"]) => {
  switch (ratio) {
    case "4:3":
      return 3 / 4;
    case "3:4":
      return 4 / 3;
    case "16:9":
      return 9 / 16;
    default:
      return 1;
  }
};

export const getBorderRadiusValue = (config?: PhotoConfig) => {
  if (!config) return "0";

  switch (config.borderRadius) {
    case "medium":
      return "0.5rem";
    case "full":
      return "9999px";
    case "custom":
      return `${config.customBorderRadius}px`;
    default:
      return "0";
  }
};

export interface BasicFieldType {
  id: string;
  key: keyof BasicInfo;
  label: string;
  type?: "date" | "textarea" | "text" | "editor";
  visible: boolean;
}

export interface CustomFieldType {
  id: string;
  label: string;
  value: string;
  icon: string;
  visible?: boolean;
}
export interface BasicInfo {
  birthDate: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  icons: Record<string, string>;
  employementStatus: string;
  photo: string;
  photoConfig: PhotoConfig;
  fieldOrder?: BasicFieldType[]; // 新增字段排序
  customFields: Array<{
    id: string;
    label: string;
    value: string;
    icon: string;
    visible?: boolean;
  }>;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  date: string;
  details: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  date: string;
  details: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  date: string;
  description: string;
  technologies: string;
  responsibilities: string;
  achievements: string;
  visible: boolean;
}

export type GlobalSettings = {
  theme?: "light" | "dark" | undefined;
  themeColor?: string | undefined;
  fontFamily?: string | undefined;
  baseFontSize?: number | undefined;
  pagePadding?: number | undefined;
  paragraphSpacing?: number | undefined;
  lineHeight?: number | undefined;
  sectionSpacing?: number | undefined;
  headerSize?: number | undefined;
  subheaderSize?: number | undefined;
  useIconMode?: boolean | undefined;
};

export interface ResumeTheme {
  id: string;
  name: string;
  color: string;
}

export const THEME_COLORS = [
  "#2563eb",
  "#059669",
  "#7c3aed",
  "#e11d48",
  "#d97706",
  "#0891b2",
  "#4f46e5",
  "#0d9488",
  "#0284c7",
  "#6d28d9",
  "#c026d3",
  "#ea580c",
  "#65a30d",
  "#475569",
  "#dc2626"
];
