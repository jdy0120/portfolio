FROM postgres:15.1-alpine

LABEL version="1.0.0"
LABEL maintainer="Doyeonism"

WORKDIR /.

ADD ./postgres.d/init.sql /docker-entrypoint-initdb.d/
# ADD ./postgres.d/pg_conf.sh /docker-entrypoint-initdb.d/

RUN chmod 755 /docker-entrypoint-initdb.d/init.sql
# RUN chmod +x /docker-entrypoint-initdb.d/pg_conf.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["sh", "-c", "postgres -c port=${POSTGRES_PORT}"]