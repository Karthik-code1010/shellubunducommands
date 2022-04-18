#! /bin/bash
#
#
echo "Hello $LOGNAME"
echo "Welcome to Innoart"
echo "The host name is `hostname`"
echo "your present working directory is `pwd`"
echo "Thank you"
echo $1
echo $2
docker cp C:\Users\Innoart\Documents\username.csv flsrvr_cntnr:/home
#docker images