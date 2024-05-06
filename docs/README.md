# Aula Assistant - AuA

## Frontend

### Usage

```bash
$ cd frontend
$ yarn install
$ yarn build
```

### Configuration

Create a `.env` file in the frontend directory with the following content:

```env
VITE_BACKEND_URL = http://localhost:8080 # URL of the backend listening for http requests
```

## Backend

### Usage

```bash
$ cd backend
$ yarn install
$ yarn build
$ yarn start
```

### Configuration

Create a `.env` file in the backend directory with the following content:

```env
PORT = 8080 # the port the backend listens on
FRONTEND_URL = http://localhost:5173 # the URL of the frontend for CORS
LOG_DIR = logs # 'NONE' disables file logging
X32_IP = 192.168.1.6 # the IP of the X32
BEAMER_IP = 192.168.1.202 # the IP of the beamer/ HDMI switch
SEND_ARTNET_AS_BROADCAST_ANYWAY = true # if the Art-Net packets should be broadcasted
```

You can also specifiy your DMX-Fixtures in the `src/controller/dmx/patch.ts` file and your ArtNet-Nodes and DMX-Scenes in the `src/controller/dmx/DMXController.ts` file.

### Used Ports and Protocols (Backend) to communicate with the hardware

| Port  | Description             |
| ----- | ----------------------- |
| 10023 | OSC (UDP)               |
| 6454  | ArtDMX by Art-Net (UDP) |
| 80    | HDMI-Switch (HTTP)      |

## Credits

-   Art-Net™ Designed by and Copyright Artistic Licence
