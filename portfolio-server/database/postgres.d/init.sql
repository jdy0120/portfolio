SELECT 'CREATE DATABASE portfolio_backend'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'portfolio_backend')\gexec
D