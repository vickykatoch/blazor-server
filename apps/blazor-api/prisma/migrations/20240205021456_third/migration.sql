-- CreateTable
CREATE TABLE "amps_connections" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "connectionTimeout" INTEGER,
    "connectionAttempts" INTEGER,
    "keepAlive" BOOLEAN,

    CONSTRAINT "amps_connections_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "amps_queries" (
    "id" SERIAL NOT NULL,
    "commandType" TEXT NOT NULL,
    "filter" TEXT NOT NULL,
    "options" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "connectionName" TEXT NOT NULL,

    CONSTRAINT "amps_queries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "amps_queries" ADD CONSTRAINT "amps_queries_connectionName_fkey" FOREIGN KEY ("connectionName") REFERENCES "amps_connections"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
