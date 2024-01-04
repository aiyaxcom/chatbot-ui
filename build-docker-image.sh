#!/bin/bash

# Set variables
REGISTRY="ghcr.io"
IMAGE_NAME="aiyaxcom/chatbot-ui"
TAG="main"

# Set up QEMU
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes

# Setup Docker buildx
docker buildx create --use

# Build Docker image
docker buildx build --platform linux/amd64,linux/arm64 -t $REGISTRY/$IMAGE_NAME:$TAG .