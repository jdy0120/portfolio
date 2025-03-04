# #!/bin/bash

# # PostgreSQL 설정 파일 경로
# PG_CONF="$PGDATA/postgresql.conf"
# HBA_CONF="$PGDATA/pg_hba.conf"

# # 외부 접속 허용 설정
# echo "listen_addresses = '*'" >> "$PG_CONF"
# echo "host all all 0.0.0.0/0 md5" >> "$HBA_CONF"