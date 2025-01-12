---
title: 'Book Notes - The Art of Doing Science and Engineering'
excerpt: 'A collection of notes and ideas from “The Art of Doing Science and Engineering” by Richard W. Hamming'
date: 'Jan 12 2025'
---

_A collection of notes and ideas from “[The Art of Doing Science and Engineering](https://press.stripe.com/the-art-of-doing-science-and-engineering)” by Richard W. Hamming._

---

## General

> "Focus on fundamentals"

> "When you successfully use a computer, you usually do an equivalent job, not the same one"

New paradigms require re-approaching from first-principles. It will be easier to solve the problem the same way, but there's probably a novel solution that wasn't possible before.

Information <-> Surprise

## Creativity

Use analogies.

Bring unrelated things together in new ways.

> "Try to saturate the subconscious with the problem. Try not to think of anything else deeply for hours, days, weeks"

## Communication & Meaning

Information can be encoded to communicate meaning.

Encodings can be more or less efficient. (high-level programming languages, communication protocols, words & phrases)

Efficiency <-> Leverage. Communicating meaning precisely & efficiency means getting more done + faster + with more accuracy.

Channel capacity. Every channel has a capacity that limits the maximum amount of information that can be sent.

Always up against noise. Encodings need to be tuned for the channel. At odds with efficiency and channel capacity.

In some cases we control both encoding & decoding (communications protocols).
In others we only control the encoding (programming languages <> programmers, written & spoken languages).

Example parallels:

- Languages encode meaning.
- Programming languages are sets of symbols that represent information. Higher level languages can be thought of as different encodings for the same underlying information/instructions.
- One can tune their choice of language for an audience, but the meaning received is still out of their control. It's highly dependant on how the audience 1) derives meaning from what is received and 2) combines it with their existing worldview
- This blog post, attempting to communicate meaning from the book

## Design

> "Design problems take place in n-dimensional space"

The optimal design will likely push one or more parameters to their extreme.

Think about "field" installation and maintenance

Build in error correction. A solution can self-correct for bad inputs & unreliable channels.

> "Good error correction means we can build systems with unreliable parts and still have a reliable machine"

## Simulations

Watch out for system stability (effects of small changes in inputs or parameters on outcomes) when trying to build a model or simulation.

Take time to develop a "feel" as you try to build a model. Start simple, get insights, try to capture the main effects, and evolve the model into something more complex as you learn more.

"Scenarios" as a way to deal with ambiguity

Helpful to include both experts and amateurs when designing a simulation. The experts know the tradeoffs with including or excluding details, and amateurs see new things and ask basic (good) questions.

Be careful assuming that a simulation represents reality.

> "Why should anyone believe this simulation is relevant?"

## Systems Engineering

> "The attempt to keep at all times the larger goals in mind and to translate local actions into global results"

> "Trying to solve the right problems perhaps a little wrongly. But the realization that the design is temporary, and later on during the next round of designs, these faults can be caught provided insight has been obtained."

Determining where the boundaries are in 'the larger picture' is arbitrary. They're typically elastic: Neighbourhood <-> Universe. One Purchase <-> Global Economy. Etc.

Optimize for learning and iteration. The natural state of systems is continuous evolution and change. A solution will need to be adaptive. It should always prepare for the next round.

Avoid solving symptoms or existing problems. Instead:

- Develop methods for solving problems
- Expand the range of what can be done
- Educate others about what you've learned

Easy to "talk to talk". Need to measure on results.

Optimizing components will likely ruin the system performance

- "What is the total problem in which this part is to fit?"
- Decent service requires all parts to interconnect and be reliable

Design for changes so they can be gracefully made

- Flexibility must be built in
- Things will be upgraded any way you cannot know

The closer you meet specifications the worst the performance will be when overloaded

- Good systems include graceful degradation of service / performance

Best done with teams of specialists brought together occasionally

## Direction & Advice

> "Must have a vision for the future"

Not having a vision is like a "random walk" through life

Dedicate time to think about the long term, about trends and possible futures. Plan for the future.

Try to avoid the expert trap.

Learn to tolerate ambiguity.

Believe that you can do important things, and follow through. Most people spend their time on things they deem as not-important.

## Other

Computers are great at producing training (how). Education (what, when, why) is more difficult/unclear (simulations). Lots of room in the middle.

With more compute and automation: "What should we do?" > "What can we do?"

> The instrument you use to measure something affects what you see.

> "Small samples carefully taken are better than large samples poorly done"
