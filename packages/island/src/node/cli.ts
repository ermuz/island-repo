import cac from "cac";
import { resolve } from "path";

// import { createDevServer } from "./dev";
import { build } from "./build";

const cli = cac("island").version("0.0.1").help();

cli.command("dev [root]", "start dev server").action(async (root: string) => {
  root = resolve(root);
  console.log("dev", root);

  const createServer = async () => {
    const { createDevServer } = await import("./dev");
    const server = await createDevServer(root, async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
});

cli
  .command("build [root]", "build in production")
  .action(async (root: string) => {
    root = resolve(root);
    await build(root);
  });

cli.parse();
