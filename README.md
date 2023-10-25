# Docker walkthrough

## This is a blog that reflects how I learn Docker and implement it

+ `docker run -it ubuntu` :: This command runs/download-then-run an image(ubuntu) in the local environment.
+ `-it` :: "interactive terminal". This flags helps us communicate with the container as if it is a terminal environment.
+ `docker images` :: lists all images available locally.
+ `docker container ls` :: lists all running containers.
+ `docker container ls -a` :: lists all containers.
+ `docker start/stop container_name` :: start/stop a container.
+ `docker run -it -p target_port_in_machine:target_port_in_container container_name` :: to host a container on a machine instead of just a container
+ `docker run -it -e key1=value1 -e key2=value2 container_name` :: environmental variables
+ 