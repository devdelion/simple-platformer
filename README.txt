Simple platformer

Goals:
- Learning the basic pipeline of game development and engine coding.
- Deepening the knowledge of some aspects of JS (canvas, animations, classes, patterns)
- Practising JS
- Well it's kinds fun to make game

Challenges:
- Collision detection: game should check where player is moving and check for any walls/objects in there. The main difficulty was creating a check that would work with speeds which do not have comon multiples for game titles (for example, title is 50px and speed is 17).
- Seperation of game layers and actors: Each game frame consists of updating each active element of the game (actor) and redrawing it. Each actor should be able to know about others and the game itself and have a mechanism to draw itself.
- Picking a way of generating: there could be multiple ways of generating levels - by objects with given positions or by creating a levelmap, which could be rendered into a game field.

Possible improvements:
- Adding textures to the game. This requires modifying the display class and finding suitable platformer assets.
- Improving physics. Acceleration, friction and jump forgiveness would make movement more realistic and smooth.
- Adding monsters to the game. Enemies would make the game more challenging.
