CREATE TABLE IF NOT EXISTS "${schema^}"."match_type" (
    "id" CHAR(64) PRIMARY KEY,
    "type" VARCHAR NOT NULL,
    "max_oppoonents" INTEGER NOT NULL
);