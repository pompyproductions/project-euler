import re

f1 = open("p022_names.txt")
f2 = open("input-parsed.js", "w")

f2.write("const PROBLEM_INPUT = [")

for line in f1:
    f2.write(line)
    
f1.close()

f2.write("]")
f2.close()