import re

f1 = open("input-raw.html")
f2 = open("input-parsed.js", "w")

f2.write("const PROBLEM_INPUT = [\n")

inputArr = []

for line in f1:
    
    numbersMatch = re.search(r"^(\d\d( \d\d)*)", line)
    if numbersMatch:
        f2.write("    [")
        arr = numbersMatch.groups()[0].split(" ")
        f2.write(arr.pop(0))
        for str in arr:
            f2.write(", " + str)
        f2.write("],\n")

    

f1.close()

f2.write("]")
f2.close()