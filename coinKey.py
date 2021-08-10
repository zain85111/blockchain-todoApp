import random


def coinToss(n):
    tail = 0
    head = 0
    for i in range(n):
        rand = random.randint(0, 1)
        if rand == 1:
            tail += 1
        else:
            head += 1
        print(str(rand), end="")
    print("\nHeads Count: ", head)
    print("Tails Count: ", tail)


coinToss(256)
