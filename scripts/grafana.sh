#!/bin/bash

sudo apt update
sleep1

sudo apt upgrade
sleep1

# Add grafana package key
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sleep1

# Using key, safely add Grafana repo
echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sleep1

# update package list changes
sudo apt update
sleep1

sudo apt install grafana
sleep1