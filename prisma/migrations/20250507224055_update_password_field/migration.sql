/*
  Warnings:

  - You are about to alter the column `senha` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "senha" SET DATA TYPE VARCHAR(255);
