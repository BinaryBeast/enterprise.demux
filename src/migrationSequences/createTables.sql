CREATE TABLE IF NOT EXISTS "${schema^}"."match_type" (
    "id" CHAR(64) PRIMARY KEY,
    "type" VARCHAR NOT NULL,
    "max_opponents" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "${schema^}"."match" (
    "id" CHAR(64) NOT NULL,
    "match_type_id" CHAR(64),
    "title" VARCHAR NOT NULL,
    "owner" VARCHAR NOT NULL,
    "created" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY (id, match_type_id),
    FOREIGN KEY (match_type_id) REFERENCES match_type(id)
);

CREATE TABLE IF NOT EXISTS "${schema^}"."match_opponent" (
    "id" CHAR(64) NOT NULL,
    "match_id" CHAR(64),
    "type" VARCHAR NOT NULL,
    "max_opponents" INTEGER NOT NULL,
    PRIMARY KEY (id, match_type_id),
    FOREIGN KEY (match_type_id) REFERENCES match_type(id)
);