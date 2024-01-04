#!/bin/bash

# Set variables
REGISTRY="ghcr.io"
IMAGE_NAME="aiyaxcom/chatbot-ui"
TAG="main"

# Build Docker image
docker build -t $REGISTRY/$IMAGE_NAME:$TAG .