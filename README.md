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
| AbsDistinct | 7.93 ms | 1.26 ms | 1.31 ms |
| BinaryGap | 0.498 μs | 0.489 μs | 0.058 μs |
| Brackets | 0.111 ms | 0.082 ms | 0.028 ms |
| ChocolatesByNumbers | 177.65 ms | 0.056 μs | 0.029 μs |
| CommonPrimeDivisors | 3.86 ms | 0.049 ms | 0.005 ms |
| CountDistinctSlices | 56.68 ms | 0.915 ms | 0.006 ms |
| CountDiv | 223.12 ms | 118.20 ms | 0.022 μs |
| CountFactors | 2.63 ms | 0.003 ms | 0.072 μs |
| CountNonDivisible | 1.31 s | 277.01 ms | 2.76 ms |
| CountSemiprimes | 5.60 s | 34.03 ms | 0.217 ms |
| CountTriangles | 65.12 ms | 15.99 ms | 0.867 ms |
| CyclicRotation | 0.430 ms | 0.020 ms | 0.385 μs |
| Distinct | 11.12 ms | 1.32 ms | 0.177 ms |
| Dominator | 34.50 ms | 0.108 ms | 0.013 ms |
| EquiLeader | 3.64 ms | 0.019 ms | 0.002 ms |
| FibFrog | 853.68 ms | 0.311 ms | 0.205 ms |
| Fish | 0.044 μs | 0.062 μs | 0.058 μs |
| Flags | 1.56 ms | 0.031 ms | 0.014 ms |
| FrogJmp | 347.66 ms | 0.209 μs | 0.158 μs |
| FrogRiverOne | 27.29 ms | 0.018 ms | 0.004 ms |
| GenomicRangeQuery | 47.53 ms | 71.16 ms | 39.13 ms |
| Ladder | 25.08 ms | 1.52 ms | 0.090 ms |
| MaxCounters | 29.61 ms | 30.64 ms | 22.77 ms |
| MaxDoubleSliceSum | 10.30 ms | 0.179 ms | 0.007 ms |
| MaxNonoverlappingSegments | 125.26 ms | 0.001 ms | 0.046 μs |
| MaxProductOfThree | 2.60 ms | 24.17 ms | 8.51 ms |
| MaxProfit | 0.583 ms | 0.003 ms | 0.002 ms |
| MaxSliceSum | 1.17 ms | 0.003 ms | 0.002 ms |
| MinAbsSum | 322.35 ms | 0.264 ms | 0.198 ms |
| MinAbsSumOfTwo | 2.53 s | 20.82 ms | 2.43 ms |
| MinAvgTwoSlice | 222.04 ms | 1.18 ms | 0.226 ms |
| MinMaxDivision | 511.53 ms | 0.094 ms | 0.013 ms |
| MinPerimeterRectangle | 0.225 ms | 0.002 ms | 0.001 ms |
| MissingInteger | 12.41 ms | 1.43 ms | 0.061 ms |
| NailingPlanks | 0.077 ms | 0.038 ms | 0.570 μs |
| Nesting | 82.82 ms | 0.026 ms | 0.012 ms |
| NumberOfDiscIntersections | 58.54 ms | 2.69 ms | 0.137 ms |
| NumberSolitaire | 19.05 ms | 1.31 ms | 0.092 ms |
| OddOccurrencesInArray | 231.88 ms | 252.80 ms | 0.899 ms |
| PassingCars | 3.83 ms | 0.026 ms | 0.006 ms |
| Peaks | 0.349 ms | 0.070 ms | 0.061 ms |
| PermCheck | 2.81 ms | 0.904 ms | 0.075 ms |
| PermMissingElem | 141.45 ms | 4.32 ms | 1.77 ms |
| StoneWall | 0.438 ms | 0.044 ms | 0.051 ms |
| TapeEquilibrium | 42.15 ms | 1.07 ms | 1.07 ms |
| TieRopes | 42.93 ms | 0.001 ms | 0.057 μs |
| Triangle | 167.78 ms | 0.018 ms | 0.024 ms |

Values are **mean time per iteration**. Solutions are ordered slowest to fastest (1st is brute force, last is optimal).

## Contributing

1. Create solution files using the template scaffolding
2. Write at least one solution with different time complexity
3. Add test cases covering the problem's examples and edge cases
4. Run benchmarks and order solutions from slowest to fastest
