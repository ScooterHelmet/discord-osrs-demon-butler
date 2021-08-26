#!/bin/bash

# speedtest cli  on Raspberry Pi 

# gnupg1 package - used for securing communication between the Raspberry Pi and speedtest.net servers
# dirmngr package - used for handling the addition of the package repository to Raspberry Pi’s sources list
# apt-transport-https package - used to add support for the https protocol to the apt package manager

sudo apt install apt-transport-https dirmngr gnupg1
sleep1

wget -q -O - https://packagecloud.io/ookla/speedtest-cli/gpgkey | sudo apt-key add -
sleep1

echo "deb https://packagecloud.io/ookla/speedtest-cli/debian/ $(lsb_release -cs) main" | sudo tee  /etc/apt/sources.list.d/speedtest.list
sleep1

sudo apt update
sleep1

sudo apt install speedtest
sleep1

speedtest
