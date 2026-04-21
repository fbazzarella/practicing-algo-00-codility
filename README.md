# Codility Solutions

JavaScript solutions for [Codility](https://app.codility.com/programmers/) challenges. Each problem includes multiple solutions ranked from slowest to fastest, with automated tests and benchmarks.

## Challenges

47 problems solved across 15 Codility lessons — from Iterations to Dynamic Programming.

## Project Structure

```
src/                  # Solution files (one class per problem, multiple static methods)
__tests__/            # Jest test suites
__benchmarks__/       # jest-bench performance benchmarks
.cfft.templates/      # Scaffolding templates for new problems
```

Each solution file exports a class with up to three static methods:
- `firstSolution` — brute force (slowest)
- `secondSolution` — intermediate optimization
- `thirdSolution` — optimal approach (fastest)

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose

### Running Tests

```bash
docker compose run --rm lepus npx jest                          # all tests
docker compose run --rm lepus npx jest --testPathPattern=FibFrog # single problem
```

### Running Benchmarks

```bash
docker compose run --rm lepus npm run bench                                    # all benchmarks
docker compose run --rm lepus npm run bench -- --testPathPattern=FibFrog        # single problem
```

Benchmark output shows **mean time per iteration** and standard deviation — use this to compare solution performance.

### Scaffolding a New Problem

```bash
npm run new -- YourProblemName
```

This creates `src/`, `__tests__/`, and `__benchmarks__/` files from templates.

## Benchmark Results

> Measured on a MacBook Air M4 16 GB running macOS Tahoe, inside a Docker container (`node:22-alpine`).

| Problem | 1st Solution | 2nd Solution | 3rd Solution |
|---|---|---|---|
| AbsDistinct | 5.31 ms | 0.953 ms | 0.909 ms |
| BinaryGap | 0.368 μs | 0.383 μs | — |
| Brackets | 0.062 μs | — | — |
| ChocolatesByNumbers | 127.02 ms | 0.039 μs | 0.021 μs |
| CommonPrimeDivisors | 2.83 ms | 0.035 ms | 0.003 ms |
| CountDistinctSlices | 41.67 ms | 0.536 ms | 0.004 ms |
| CountDiv | 168.40 ms | 96.76 ms | 0.021 μs |
| CountFactors | 2.04 ms | 0.002 ms | — |
| CountNonDivisible | 962.77 ms | 208.43 ms | 1.99 ms |
| CountSemiprimes | 3.62 s | 25.15 ms | 0.148 ms |
| CountTriangles | 46.65 ms | 11.80 ms | 0.583 ms |
| CyclicRotation | 0.318 ms | 0.017 ms | — |
| Distinct | 538.28 ms | — | — |
| Dominator | 0.600 μs | — | — |
| EquiLeader | 3.43 ms | 0.017 ms | — |
| FibFrog | 576.39 ms | 0.267 ms | 0.146 ms |
| Fish | 0.023 μs | 0.021 μs | — |
| Flags | 0.411 μs | — | — |
| FrogJmp | 0.142 μs | — | — |
| FrogRiverOne | 0.659 ms | — | — |
| GenomicRangeQuery | 228.36 ms | 128.92 ms | 66.24 ms |
| Ladder | 16.28 ms | 1.17 ms | 0.058 ms |
| MaxCounters | 12.29 ms | 20.39 ms | — |
| MaxDoubleSliceSum | 0.531 μs | — | — |
| MaxNonoverlappingSegments | 96.72 ms | 0.825 μs | 0.035 μs |
| MaxProductOfThree | 1.61 ms | 18.74 ms | 5.01 ms |
| MaxProfit | 0.465 ms | 0.002 ms | — |
| MaxSliceSum | 0.858 ms | 0.002 ms | — |
| MinAbsSum | 229.99 ms | 0.226 ms | 0.144 ms |
| MinAbsSumOfTwo | 1.77 s | 17.44 ms | 1.73 ms |
| MinAvgTwoSlice | 150.83 ms | 0.851 ms | 0.163 ms |
| MinMaxDivision | 376.44 ms | 0.075 ms | 0.009 ms |
| MinPerimeterRectangle | 0.116 ms | — | — |
| MissingInteger | 2.62 ms | — | — |
| NailingPlanks | 0.058 ms | 0.027 ms | 0.411 μs |
| Nesting | 0.051 μs | — | — |
| NumberOfDiscIntersections | 53.18 ms | 2.16 ms | — |
| NumberSolitaire | 11.07 ms | 0.959 ms | 0.052 ms |
| OddOccurrencesInArray | 130.99 ms | 148.41 ms | — |
| PassingCars | 7.16 ms | — | — |
| Peaks | 0.001 ms | — | — |
| PermCheck | 12.98 ms | — | — |
| PermMissingElem | 302.54 ms | 3.37 ms | — |
| StoneWall | 0.075 μs | — | — |
| TapeEquilibrium | 159.98 ms | — | — |
| TieRopes | 34.14 ms | 0.849 μs | 0.041 μs |
| Triangle | 132.71 ms | 0.015 ms | — |

Values are **mean time per iteration**. Solutions are ordered slowest to fastest (1st is brute force, last is optimal).

## Contributing

1. Create solution files using the template scaffolding
2. Write at least one solution with different time complexity
3. Add test cases covering the problem's examples and edge cases
4. Run benchmarks and order solutions from slowest to fastest
