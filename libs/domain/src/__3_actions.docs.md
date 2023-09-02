# Actions

## Glossary

- **BASE_ACTION**: Identifies basic actions that are easy for new users to understand.

---

### Timer Actions

#### Echo

- **Key**: `echo`
- **Description**: Allows the user to speak again immediately after their turn ends.

#### Extra Time (BASE_ACTION)

- **Key**: `extra-time`
- **Description**: Adds an extra 30 seconds to your speaking time.

#### Freeze Time (BASE_ACTION)

- **Key**: `freeze-time`
- **Description**: Pauses the timer for 5 minutes.

#### Gift Time (BASE_ACTION)

- **Key**: `gift-time`
- **Description**: Give 15 seconds to another participant.

#### Steal Time

- **Key**: `steal-time`
- **Description**: Steals 15 seconds from another participant's speaking time.

#### Time Cut

- **Key**: `time-cut`
- **Description**: Cut the next person's speaking time by half.

---

### Timer & Order Actions

#### Time Bomb (BASE_ACTION)

- **Key**: `time-bomb`
- **Description**: Set a timer for 1 minute; random role, random order.

---

### Ordering Actions

#### Hot Potato

- **Key**: `hot-potato`
- **Description**: The current speaker must immediately stop, and a new random speaker is chosen.

#### Randomize (BASE_ACTION)

- **Key**: `randomize-order`
- **Description**: Shuffle the speaking order.

#### Reverse (BASE_ACTION)

- **Key**: `reverse-order`
- **Description**: Reverses the order of speaking.

#### Skip (BASE_ACTION)

- **Key**: `skip-turn`
- **Description**: Skip your turn and pass it to the next person.

#### Swap (BASE_ACTION)

- **Key**: `swap-role`
- **Description**: Swap roles with another participant.

---

### Strategic Actions

#### Fast Forward

- **Key**: `fast-forward`
- **Description**: Skip your turn, ignoring any actions in between.
- **Long Description**: If the first person uses this action, the next four people cannot use any actions until it's the first person's turn again.

#### Hide

- **Key**: `hide`
- **Description**: Become invisible; your turn is skipped without notice.
- **Long Description**: The user becomes invisible on the web application interface until it's their turn again.

#### Instant Replay

- **Key**: `instant-replay`
- **Description**: Repeats the last 30 seconds of discussion.
- **Long Description**: The current speaker receives extra time, separate from their current time.

#### Joker

- **Key**: `joker`
- **Description**: Introduce a new, random topic to the discussion.

#### Mirror

- **Key**: `mirror-skill`
- **Description**: Copy the last skill used by another participant.

#### Pick Pocket

- **Key**: `pick-pocket`
- **Description**: Steal a random skill from another participant.

#### Silencer

- **Key**: `silencer`
- **Description**: Skip the target's next turn.

#### Veto (BASE_ACTION)

- **Key**: `veto`
- **Description**: Cancel another player's action.

#### Wildcard

- **Key**: `wildcard`
- **Description**: Choose any skills to use immediately.

#### Blank

- **Key**: `blank`
- **Description**: Do nothing.
