import re

f1 = open("input-raw.html")
f2 = open("input-parsed.js", "w")

# f2.write("const PROBLEM_INPUT = [\n")

inputArr = []

for line in f1:
    # strip unnecessary stuff
    # line = re.sub(r"<\/?.+?>", "", line) # made non-greedy with "+?"
    # line = re.sub(r"\n", "", line)
    
    num = re.match(r"^(\d.)", line)
    if num:
        print(num)
        # f2.write("    " + num.groups()[0] + ",\n")

f1.close()

# f2.write("]")
# f2.close()