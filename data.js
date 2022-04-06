var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.20888167777334488,
        "pitch": 0.09165764441109125,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.17558959159088872,
          "pitch": -0.1411747421683156,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05671552523874013,
          "pitch": 0.3652537260782722,
          "title": "Hello!",
          "text": "The Faculty of Engineering is where some of our saddest students spend 3-4 years of their time"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14342053418561207,
        "pitch": -0.11777899004864167,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.10096535207219048,
          "pitch": 0.037906117389646,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7550397497350332,
          "pitch": -0.09962912164223425,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14342053418561207,
          "pitch": -0.11777899004864167,
          "title": "FoE Auditorium",
          "text": "There is an almost equal snooze to learn ratio that goes on in here"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.4459386584127394,
        "pitch": -0.00538179046238163,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.0528220536956585,
          "pitch": 0.07343091857681472,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4459386584127394,
          "pitch": -0.00538179046238163,
          "title": "FoE Spinelli",
          "text": "Fuel for tired souls"
        }
      ]
    }
  ],
  "name": "FoE Tour (Charlton)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
