import nextVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  {
    ignores: ["_archived/**", "out/**", ".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
