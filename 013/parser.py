import re

f = open("input-raw.html")

inputArr = []

for line in f:
    # strip unnecessary stuff
    line = re.sub(r"<\/?.+?>", "", line) # made non-greedy with "+?"
    line = re.sub(r"\n", "", line)
    
    if re.match(r"^\d\d \d\d", line):
        def castInt(x):
            return int(x)
        inputArr.append(list(map(castInt, line.split(" "))))

f.close()

# convert each row (array) into string ("[a, b, c]")
for i in range(len(inputArr)):
    inputArr[i] = ", ".join(list(map(lambda x: str(x), inputArr[i])))
    inputArr[i] = "[" + inputArr[i] + "]"

f = open("input-parsed.js", "w")

f.write("const PROBLEM_INPUT = [\n")
for row in inputArr:
    f.write("    " + row + ",\n")
f.write("]")

f.close()