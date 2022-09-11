#!/usr/bin/python3

import os, sys

root = "../"
print(os.getcwd())
print(sys.argv[1])

name = sys.argv[1]

os.mkdir(root + name)
file = open(root + name + "/index.html", "w")

template = open("index-blank.html", "r")

# if (len(sys.argv) - 1):
#     for arg in sys.argv:
#         if arg == "input":
#             template = open("index-input.html", "r")
# else:
#     template = open("index-blank.html", "r")

for line in template.readlines():
    file.write(line)

template.close()
file.close()

file = open(root + name + "/script.js", "w")
template = open("script.js", "r")

for line in template.readlines():
    file.write(line)