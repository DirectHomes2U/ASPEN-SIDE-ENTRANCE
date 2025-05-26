var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26016858239657203,
          "pitch": 0.09274306742575078,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07867862155908867,
          "pitch": 0.2003125574919853,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -0.9946268186851945,
          "pitch": 0.44154014702106714,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": -2.888240755164823,
          "pitch": 0.1991461227629756,
          "rotation": 0,
          "target": "0-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6781155448114937,
          "pitch": 0.2065377956611094,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -1.0456522337192524,
          "pitch": 0.11701785465270298,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.934841205392839,
          "pitch": 0.20512209083509525,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.09156412243075707,
          "pitch": 0.2781101898325353,
          "rotation": 6.283185307179586,
          "target": "5-corridor-2"
        },
        {
          "yaw": 1.1050367840809763,
          "pitch": 0.24104356500382096,
          "rotation": 0,
          "target": "4-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4935772294235363,
          "pitch": 0.43421872263411565,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor-2",
      "name": "CORRIDOR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04603158999778856,
          "pitch": 0.24737000402985743,
          "rotation": 0,
          "target": "8-master-bedroom"
        },
        {
          "yaw": 0.7680673691329343,
          "pitch": 0.284586140215092,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -1.3450678295335017,
          "pitch": 0.305381166345704,
          "rotation": 0,
          "target": "6-bathroom"
        },
        {
          "yaw": -3.1015838898182544,
          "pitch": 0.2510278574944955,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1088848394035047,
          "pitch": 0.3207161554182818,
          "rotation": 0,
          "target": "5-corridor-2"
        },
        {
          "yaw": -1.5984034705013315,
          "pitch": 0.2529480905392152,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6954512016127588,
          "pitch": 0.15241418431343945,
          "rotation": 0,
          "target": "5-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9602666707809107,
          "pitch": 0.17702156142017245,
          "rotation": 0,
          "target": "9-master-bathroom"
        },
        {
          "yaw": 0.7143878890396866,
          "pitch": 0.18302736820037246,
          "rotation": 0,
          "target": "5-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bathroom",
      "name": "MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.457572456399447,
          "pitch": 0.21682820255369073,
          "rotation": 0,
          "target": "8-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
