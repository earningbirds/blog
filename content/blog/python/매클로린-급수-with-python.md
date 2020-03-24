---
title: 매클로린 급수 with Python
date: 2020-03-24 15:03:53
category: python
draft: false
---

### 매클로린(Maclaurin) 급수 전개

$$
e^x \approxeq \sum_{i = 0}^{n}\frac{x^n}{n!}
$$

```python
from functools import reduce

factorial = lambda n: reduce(lambda x, y: x * y, range(1, n + 1))

def maclaurin(x: float, es: float =.0001, max_iter: int = 50) -> dict:
    """Maclaurin series of exponential function

    Args:
        x (float): x of e^x.
        es (str): stopping criterion.
        max_iter (int): maximum iteration

    Returns:
        dict: a solution, relative error and count how many iterating for approximation.
    """
    sol = 1
    for it in range(1, max_iter + 1):
        solold = sol
        sol = sol + x ** it / factorial(it)
        if sol != 0:
            ea = abs((sol - solold) / sol) * 100
        
        if ea <= es:
            break
    
    return {
        'approximation': sol,
        'relative error': ea,
        'iter_count': it
    }
```

Originated from Applied Numerical Method with MATLAB 3rd Edition.