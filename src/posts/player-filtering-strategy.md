---
title: Player filtering strategy
date: 2019-01-10T20:20:59.187Z
tag: nba-lineup-optimizer
path: /posts/nba-lineup-optimizer/01-10-19-player-filtering-strategy
---
Let's cover some basic rules from DraftKings.

Each line up has to contain the following:

1. PG, SG, SF, PF, C
2. G (PG, SG), F (SF, PF)
3. Util (All 5)

So in total, we can have a total combination of **8** players with a maximum salary of **$50,000**.

Now at the moment, the website can generate the line up using the **0-1 knapsack problem**. However, it ignores DraftKings rules and results in having more than 2 positions:

![null](/../images/assets/01-10-19-players-filtering-strategy.png)

This would be a harder problem to solve, so for the time being we'll just check if each player in the line up has **a unique position**.

```
if (
```

```
		newValue >= lastValue &&
```

```
		lastSubSolution.subset.length <= maxPlayers &&
```

```
		lastItem.status !== 'O' &&
```

```
		!lastSubSolution.subset.some((player) => {
```

```
			return player.position === lastItem.position;
```

```
		})
```

```
	)
```

As a result, we've generated:

![null](/../images/assets/01-10-19-players-filtering-strategy-2.png)

However, this now creates a new problem: we've reached max salary and we only have 7 players.

Unfortunately, I also have no good way to solve this. Let's edit the line up manually to satisfy DraftKings' rules.

Our line up now looks like this:

![null](/../images/assets/01-10-19-players-filtering-strategy-3.png)

Perfect. I've submitted the roster into a free 200 person contest so as long as we don't end up dead last and ATLEAST top 75, I'd call this a success.

Will report stats tomorrow!
