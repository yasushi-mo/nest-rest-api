# Use the official MySQL image as the base image
FROM mysql:8.3.0

# Set environment variables for MySQL configuration
ENV MYSQL_DATABASE="nest_app" \
    MYSQL_USER="root" \
    MYSQL_PASSWORD="password"
