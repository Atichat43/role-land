# Themes and Roles

## Glossary

| Term             | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| Mapper           | The algorithm responsible for assigning roles based on certain rules or criteria.           |
| blank x infinity | A placeholder term used to indicate that a field can accept an unlimited number of entries. |

> **Note**: Skills are based on characters, and multiple skills can map to the same action. For example, 'Debug', 'Run Automation Tests', and 'Clean Up' all map to 'skip-turn'.

---

## Software Development Theme

### Roles and Actions

```markdown
- Product Owner:
  - "Coffee Break": freeze-time x 2
  - "Setup new Meeting": randomize-order x 2
  - "Change Requirements": veto x 1
- Backend Developer:
  - "Debug": skip-turn x 2
  - "Hidden Feature": extra/steal-time x 2
- Frontend Developer:
  - "Debug": skip-turn x 2
  - "Hidden Feature": extra/steal-time x 2
- DevOps:
  - "Debug": skip-turn x 2
  - "Deploy": reverse-order x 1
  - "Lint&Test Error": echo x 1
- QA:
  - "Run Automation Tests": skip-turn x 1
  - "Testing": extra-time x 2
  - "Move to Backlog": reverse-order x 1
- Client:
  - "Change Requirements": veto x 1
  - "Reduce Budget": time-bomb x 1
  - "Raise Budget": gift-time x 2
```

### Mapper

```markdown
- Timer Actions:
  - "Testing": extra-time x 2
  - "Coffee Break": freeze-time x 2
  - "Hidden Feature": extra-time, steal-time x 4
  - "Raise Budget": gift-time x 2
- Order Actions:
  - "Deploy": reverse-order x 1
  - "Move to Backlog": reverse-order x 1
  - "Setup new Meeting": randomize-order x 2
  - "Debug": skip-turn x 6
  - "Run Automation Tests": skip-turn x 1
- Timer & Order Actions:
  - "Reduce Budget": time-bomb x 1
- Strategic Actions:
  - "Lint&Test Error": echo x 1
  - "Change Requirements": veto x 2
```

---

## Education Theme

### Roles and Actions

```markdown
- Principal:
  - "Break": freeze-time x 2
  - "Grant Writing": wildcard x 1
  - "Teacher Evaluation": swap-role x 1
- Student:
  - "Ask Question": joker x 2
  - "Do Homework": hide x 2
  - "Quick Learner": pick-pocket x 2
- School Nurse:
  - "Emergency Drill": skip-turn x 2
  - "First Aid": extra/steal-time x 2
- Janitorial Staff:
  - "Clean Up": skip-turn x 2
  - "Emergency Cleanup": time-bomb x 1
  - "Maintenance": fast-forward x 1
- Teacher:
  - "Cancel Class": veto x 1
  - "Pop Quiz": time-bomb x 1
  - "Extra Credit": gift-time x 2
```

### Mapper

```markdown
- Timer Actions:
  - "Break": freeze-time x 2
  - "First Aid": extra/steal-time x 2
  - "Extra Credit": gift-time x 2
- Order Actions:
  - "Emergency Drill": skip-turn x 2
  - "Clean Up": skip-turn x 2
- Timer & Order Actions:
  - "Emergency Cleanup": time-bomb x 1
  - "Pop Quiz": time-bomb x 1
- Strategic Actions:
  - "Grant Writing": wildcard x 1
  - "Teacher Evaluation": swap-role x 1
  - "Cancel Class": veto x 1
  - "Ask Question": joker x 2
  - "Do Homework": hide x 2
  - "Quick Learner": pick-pocket x 2
  - "Maintenance": fast-forward x 1
```

---

## Werewolf Theme

### Roles and Actions

```markdown
- Werewolf:
  - "Kill": blank x infinity
- Villager:
  - "Vote": blank x infinity
- Seer:
  - "Vision": blank x infinity
- Doctor:
  - "Heal": blank x infinity
- Hunter:
  - "Shoot": blank x infinity
```

### Mapper

```markdown
- "Kill": blank x infinity
- "Vote": blank x infinity
- "Vision": blank x infinity
- "Heal": blank x infinity
- "Shoot": blank x infinity
```

---
