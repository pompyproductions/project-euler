import re

f = open("input.html")

txt = ""
for line in f:
    txt += line

f.close()

txt = re.sub("\s", "", txt)
txt = re.sub("<br\/>", "", txt)

txt = re.search(r"<pc.*>(\d+)<\/p>", txt)
txt = txt.group(1)

f = open("input-parsed.js", "w")
f.write("const PROBLEM_INPUT = " + txt + ";")