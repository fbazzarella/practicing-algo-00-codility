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

## Contributing

1. Create solution files using the template scaffolding
2. Write at least one solution with different time complexity
3. Add test cases covering the problem's examples and edge cases
4. Run benchmarks and order solutions from slowest to fastest
