import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";
import { defineConfig as composer } from "@prisma/composer/config";
import { nodeBuild } from "@prisma/composer/node/control";
import { nextjsBuild } from "@prisma/composer/nextjs/control";
import { prismaCloud, prismaState } from "@prisma/composer-prisma-cloud/control";

export default definePrismaConfig({
  skills: {
    agents: [],
  },
  orm: ormConfig({
    contract: "./src/prisma/contract.prisma",
    db: {
      connection: 'postgresql://neondb_owner:npg_aO0uV1oEMQIT@ep-raspy-breeze-b50kp5u2-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    },
  }),
  composer: composer({
    entry: "./module.ts",
    extensions: [prismaCloud({ region: "us-east-1" }), nodeBuild(), nextjsBuild()],
    state: prismaState(),
  }),
});
