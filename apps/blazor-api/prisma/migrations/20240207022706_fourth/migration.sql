/*
  Warnings:

  - You are about to drop the column `connectionAttempts` on the `amps_connections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "amps_connections" DROP COLUMN "connectionAttempts",
ADD COLUMN     "reconnectAttempts" INTEGER;
