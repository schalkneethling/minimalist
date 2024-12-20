#!/usr/bin/env node
import { cp } from "node:fs/promises";
import { resolve } from "node:path";

import { cancel, isCancel, intro, text, outro } from "@clack/prompts";

import { logger } from "./utils/logger.js";

const main = async () => {
  console.clear();

  intro("Thank you for choosing minimalist! 🐳");

  const targetDir = await text({
    message: "Enter the target directory relative to the project root.",
    validate(value) {
      if (value.trim() === "") {
        return "Please enter a valid directory.";
      }
    },
  });

  try {
    logger.debug("resolving directories");
    const minimalistDir = resolve(import.meta.dirname, "./minimalist");
    const resolvedTargetDir = resolve(targetDir);

    await cp(minimalistDir, resolve(resolvedTargetDir, "minimalist"), {
      force: true,
      recursive: true,
    });
  } catch (error) {
    logger.error(error);
  }

  outro("All done! 🎉 Happy coding 👩‍💻");

  if (isCancel(targetDir)) {
    cancel("Setup cancelled 👋");
    process.exit(0);
  }
};

main().catch((error) => {
  logger.error(error);
});
