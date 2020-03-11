---
title: List 커스터마이징 하기
date: 2020-03-12 00:03:24
category: python
draft: false
---

안녕하세요, 박도형입니다.

가끔 Python으로 개발 혹은 분석을 하다보면 `[1] + [2, 3]`처럼 `+`연산을 통해 두 List를 concat할 때가 있습니다.

비슷한 맥락에서 addition을 통한 concat은 있는데, subtraction을 통한 difference 연산이 없는 것이 가끔 불편합니다(물론 difference는 set의 연산이므로 없는 것이 맞습니다).

때문에, List의 Element들끼리 Uniqueness가 보장된다는 가정 하에 다음과 같은 방식으로 `-`연산을 만들어줄 수 있습니다.

```{python}

class AdvancedList(list):
    def __sub__(self, other):
        return AdvancedList(set(self) - set(other))
```
