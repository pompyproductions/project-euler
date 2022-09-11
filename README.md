# Project Euler exercises

Repository where I solve and (hopefully) prepare visualisations for the exercises in Project Euler.  
Once I get this going, I'll post the Live Preview link here too.

Here's the link to the original website where the problems are posted:
https://projecteuler.net/

Also, here's a quote from that page which I will particularly abide by:  
> "The motivation for starting Project Euler, and its continuation, is to provide a platform for the inquiring mind to delve into unfamiliar areas and **learn new concepts in a fun and recreational context.**"


## Approach

I will first solve these questions through JavaScript alone, probably some of them less elegantly than others.  
My main goal is not to achieve the fastest execution time possible, but to make them with visualisation and eventual spin-offs in mind.

As an example, I might add HTML inputs that _default to the original question_ yet which can be modified.

I'll be updating my approach and goals as I solve along.


## Devlog


### 2022-09-11: Boilerplate Generator

I started off by manually creating a folder structure for each problem: a root folder ### with index.html and script.js loaded in it.

It shouldn't come as a surprise that this endeavor turned out to be quite the drag, which is why I decided to play around with python a little more and create a script that automatically does that for me.

I can now head over to the templates folder and run the following: 
```
$ ./generator.py ###
```

This creates the two files, but there's no dynamically placed elements yet. I'm thinking of adding "stops" inside the template files, change their extension (.template), and add a conditional in the "for line of file" loop to watch out for them and fill the values in. This way I can load more than one script (for inputs) etc.


### 2022-09-08: Generator Sandbox

I had, among others, two expectations when I started to solve these problems.

One of them was that, although it might take time to implement them, **I would be able to solve them using the knowledge that I already have.** That turned out to be half-true: I definitely _could_ solve them with my current "toolbelt", but curiosity got the better of me, already at the first problem. As I divided my problems into little subproblems and decided to dig deeper into them, I found myself running after red herrings that are not necessarily fundamental to the problem itself, but that felt like opportunities to change up my style of writing and thinking code.

It is then that I found out about generator functions that I had once cast aside, but *before I knew it, this project became almost like a "generator sandbox".* I found generator functions to be incredibly helpful and fun to play around with, and so I find myself reaching for it every time I can. Adding little tweaks here and there.

Same with array functions: *this was a perfect chance to do some array cardio* and build precious muscle memory for .map(), .filter(), .reduce() and such. They use callbacks, so I got a bit more confident with callbacks. And then those callbacks went back into the generators.

The other expectation was that I would eventually run into efficiency issues (I'm looking at you, prime numbers), but until then I would be able to write messy, brutish, yet functional code to blaze through the questions. That also was half-correct: I definitely did not squeeze out all the micro-optimization I could, yet I kept wanting to get a "structurally sound" system for every question. Rather than making them work for the exact question, I made them slightly more abstract and generic so I could change inputs or even the criteria.

This aside, in a small personal roadmap, I decided I'd solve _at least_ 3 problems a day until I reach _at least_ 50. Or do an amount of work equivalent to those 3 problems.
