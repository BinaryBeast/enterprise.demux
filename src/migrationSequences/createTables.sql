CREATE TABLE IF NOT EXISTS "${schema^}"."match_type" (
    "id" CHAR(64) PRIMARY KEY,
    "type" VARCHAR NOT NULL,
    "max_opponents" INTEGER NOT NULL
);