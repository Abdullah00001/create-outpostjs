#!/bin/bash

echo "Syncing generated Prisma client to running Docker services..."

# Sync scheduler container
echo "Syncing {{PROJECT_NAME}}-scheduler..."
docker exec {{PROJECT_NAME}}-scheduler npx prisma generate

# Sync worker container
echo "Syncing {{PROJECT_NAME}}-worker..."
docker exec {{PROJECT_NAME}}-worker npx prisma generate

# Sync server container
echo "Syncing {{PROJECT_NAME}}-server..."
docker exec {{PROJECT_NAME}}-server npx prisma generate

echo "Prisma sync complete!"
