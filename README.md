# Terminal Hacker
a mini word game inspired by Fallout

The game operates similarly to the classic board game Mastermind. The player has only 4 guesses and on each incorrect guess the computer will indicate how many letter positions are correct.

For example, if the password is MIND and the player guesses MEND, the game will indicate that 3 out of 4 positions are correct (M_ND). If the password is COMPUTE and the player guesses PLAYFUL, the game will report 0/7. While some of the letters match, they're in the wrong position.

Ask the player for a difficulty (very easy, easy, average, hard, very hard), then present the player with 5 to 15 words of the same length. The length can be 4 to 15 letters. More words and letters make for a harder puzzle. The player then has 4 guesses, and on each incorrect guess indicate the number of correct positions.

Here's an example of the game dynamic:

`Select Difficulty (1-5)? >3`

`SCORPION
FLOGGING
CROPPERS
MIGRAINE
FOOTNOTE
REFINERY
VAULTING
VICARAGE
PROTRACT
DESCENTS`

`Guess (4 left)? >migraine`

`>>>0/8 correct`

`Guess (3 left)? >protract`

`>>>2/8 correct`

`Guess (2 left)? >croppers`

`Exact Match! Please wait while system is accessed.`

![Screenshot of the minigame](http://i.stack.imgur.com/ckL1M.jpg)


### Additional features to implement
- random characters filling in the space between words
- that awesome retro styling
- randomly appearing bracket sets <> {} [] () remove dud or reset allowances





