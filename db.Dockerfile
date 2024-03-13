# Use the official MySQL image as the base image
FROM mysql:8.3.0

# Set environment variables for MySQL configuration
ENV MYSQL_DATABASE=nest_app \
    MYSQL_ROOT_PASSWORD=password

# Expose the MySQL port
EXPOSE 3306
