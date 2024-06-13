# DMX Scenes

All following methods are found in the `src/controller/dmx/DMXController.ts` file.

## clearScenes

Sets all DMX channels to 0 except for the so called `Singlechannel` which are set to `255` so that the DMX controlled lights are not turned off but get reset to their default state (no light output or movement).

## sceneAnlageAn

Sets all DMX channels to `0` while the `Singlechannel` channels are set to `255`. This is the default state of the DMX controlled lights, so that they are turned on and ready to be controlled but don't show any light output or movement.

## sceneAnlageAus

Sets all DMX channels to `0` including the `Singlechannel` channels. This is the state where the DMX controlled lights are turned off. (Note: The `Singlechannel` channels are set to `0` as well, so that the lights are turned off and will need a small amount of time to turn on again - which may cause some sound, flickering or other unwanted effects).

## stageWW

Sets the CWWW-Fixtures to a full warm white light output. It also resets strobe and color temperature but does not change the cold white light output.

## stageCW

Sets the CWWW-Fixtures to a full cold white light output. It also resets strobe and color temperature but does not change the warm white light output.

## stageOff

Resets all fixtures located and pointing on the stage (except moving heads and RevueLED) to their default state. This means that the fixtures light output are turned off.

## stageV1

**todo**

## stageV2

**todo**

## stageV3

**todo**

## spotLeft

Sets the RevueLED-Profile-Fixtures to a full light output. It also resets strobe.

## spotMid

**todo**

## spotOff

Resets all MHx200- (**todo**) and RevueLED-Fixtures to their default state. This means that the fixtures light output are turned off.

## accentV1

**todo**

## accentV2

**todo**

## disco

**todo**
