# API Routes

| Route                             | Method | Body | Description                             |
| --------------------------------- | ------ | ---- | --------------------------------------- |
| /beamer/power/on                  | POST   | -    | Turn on the beamer                      |
| /beamer/power/off                 | POST   | -    | Turn off the beamer                     |
| /x32/load-scene/default           | POST   | -    | Load the default scene on the X32       |
| /x32/channel/:channel/mute-toggle | POST   | -    | Toggle the mute state of a channel      |
| /x32/channel/:channel/fader/add   | POST   | -    | Moves the fader of a channel a bit up   |
| /x32/channel/:channel/fader/min   | POST   | -    | Moves the fader of a channel a bit down |
