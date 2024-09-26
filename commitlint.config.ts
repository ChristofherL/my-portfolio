const config = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-atom",
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "always", "."],
    "subject-max-length": [2, "always", 50],
  },
};

export default config;
