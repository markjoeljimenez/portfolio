---
title: Player filtering strategy
date: 2019-01-10T20:20:59.187Z
tag: dk-lineup-optimizer
path: /posts/dk-lineup-optimizer/01-10-19-player-filtering-strategy
---
Let's cover some basic rules from DraftKings.

Each line up has to contain the following:

1. PG, SG, SF, PF, C
2. G (PG, SG), F (SF, PF)
3. Util (All 5)

So in total, we can have a total combination of **8** players with a maximum salary of **$50,000**.

Now at the moment, the website can generate the line up using the **0-1 knapsack problem**. However, it ignores DraftKings rules and results in having more than 2 positions:

![](/../images/assets/01-10-19-players-filtering-strategy.png)
