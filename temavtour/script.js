TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 133,
  "id": "panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746",
  "thumbnailUrl": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_t.jpg",
  "pitch": 0,
  "label": "Tema golf 1",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_6F8A7AFE_61FB_2497_41A7_BB9A044CEDBA",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 178,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -15.22,
        "hfov": 28.95,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.2
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 590,
           "width": 528,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -15.22,
        "hfov": 28.95,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -24.2
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_6F40BE18_61F5_DF9A_41C2_4BBEB64ADF00",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 99,
           "width": 200,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -15.56,
        "hfov": 33.2,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -31.43
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 344,
           "width": 695,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -15.56,
        "hfov": 33.2,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -31.43
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_6F210C98_61F6_FC9B_41A6_AE64411B5140",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6, this.camera_71EEFD4E_6235_3DF7_41D8_853EFFBE30E5); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 24,
           "width": 16,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -11.26,
        "hfov": 23.81,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -31.23
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 761,
           "width": 497,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -11.26,
        "hfov": 23.81,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -31.23
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_6F2BE7C5_61DD_2CF5_419D_7F5613ECEF4A",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6E8AE663_61CD_EFAE_41A1_CC417661A795, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'iconHeight':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'paddingRight':5}) } else { this.showPopupMedia(this.window_6E07B8DB_61CD_E49D_4152_E322937DD86E, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789, this.PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B, '50%', '50%', true, true); this.PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B.set('selectedIndex', 0); ; this.viewer_uid71AF8994_61CD_256A_41D4_09F53DBD92A8VideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 161,
           "width": 200,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -89.2,
        "hfov": 27.6,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.86
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 407,
           "width": 502,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -89.2,
        "hfov": 27.6,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -11.86
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_6EF2584B_61DF_23FD_41D3_98C94165DBD8",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_726E8A08_625D_277B_41D0_B459A31448ED, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'iconHeight':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'paddingRight':5}) } else { this.showPopupMedia(this.window_7331BC54_625D_23EB_41D0_2C57E8D9B6CB, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789, this.PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1, '50%', '50%', true, true); this.PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1.set('selectedIndex', 0); ; this.viewer_uid736A177B_625D_ED9D_41C7_0737DA95EE1CVideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "width": 139,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -83.3,
        "hfov": 14.99,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.89
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 146,
           "width": 279,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -83.3,
        "hfov": 14.99,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.89
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_6E6DDD4E_61DF_FDF6_41CB_4CBBB5DF3F40",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 16,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -88.67,
        "hfov": 22.76,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.31
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 731,
           "width": 453,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -88.67,
        "hfov": 22.76,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -26.31
       }
      ]
     },
     {
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "yaw": -89.2,
      "hfov": 27.26,
      "popupMaxWidth": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "hideDuration": 500,
      "id": "popup_6E8AE663_61CD_EFAE_41A1_CC417661A795",
      "class": "PopupPanoramaOverlay",
      "video": {
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_6E4623BF_61DD_6496_419C_1C6B0FE55789.mp4",
       "class": "VideoResource"
      },
      "popupMaxHeight": "50%",
      "autoplay": true,
      "rotationY": 0,
      "loop": false,
      "pitch": -11.86
     },
     {
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "yaw": -83.3,
      "hfov": 14.99,
      "popupMaxWidth": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "hideDuration": 500,
      "id": "popup_726E8A08_625D_277B_41D0_B459A31448ED",
      "class": "PopupPanoramaOverlay",
      "video": {
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_6E4623BF_61DD_6496_419C_1C6B0FE55789.mp4",
       "class": "VideoResource"
      },
      "popupMaxHeight": "50%",
      "autoplay": true,
      "rotationY": 0,
      "loop": false,
      "pitch": -16.89
     },
     {
      "id": "overlay_73368061_6257_23AD_41AF_4055592ACD2C",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_72F6DCC4_624B_5CEB_41D0_D7CCA12E7A3A, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 131,
           "width": 200,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 62.87,
        "hfov": 43.85,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.63
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 556,
           "width": 849,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 62.87,
        "hfov": 43.85,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.63
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_7056BE2B_624D_FFBE_4157_1E5596862276",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 16,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 72.08,
        "hfov": 13.7,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.29
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 329,
           "width": 270,
           "url": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 72.08,
        "hfov": 13.7,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.29
       }
      ]
     },
     {
      "yaw": -3.48,
      "bleaching": 0.7,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_7007D58F_624F_2D76_41B8_47DFDC651054",
      "bleachingDistance": 0.4,
      "pitch": 24.06
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_t.jpg"
   }
  ],
  "audios": [
   {
    "id": "audio_7058B5F6_625F_2C9D_41A3_BF339A5320C9",
    "class": "PanoramaAudio",
    "audio": {
     "id": "audioresource_70787995_6257_256A_418C_5E9561E031FB",
     "oggUrl": "media/audio_7058B5F6_625F_2C9D_41A3_BF339A5320C9.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_7058B5F6_625F_2C9D_41A3_BF339A5320C9.mp3"
    },
    "autoplay": true
   }
  ],
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6",
     "thumbnailUrl": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_t.jpg",
     "pitch": 0,
     "label": "pixexid-dfb5e202-363f-40ad-b9b0-239d3204fd2a",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_7380EAB7_627D_2495_41C9_B9CC001B77E3",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 156,
              "width": 198,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 114.06,
           "hfov": 21.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.17
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 312,
              "width": 396,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 114.06,
           "hfov": 21.9,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "pitch": -20.17
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_702D9371_627D_25AD_41D0_8A5FE2FCC688",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746, this.camera_71D4FD2F_6235_3DB5_41D7_37BEBB7430FF); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 18,
              "width": 16,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 123.69,
           "hfov": 28.55,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -34.91
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 731,
              "width": 622,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 123.69,
           "hfov": 28.55,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -34.91
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_7600D807_627F_6376_41C7_23B61D2A8C76",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 98,
              "width": 84,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 117.13,
           "hfov": 8.6,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -24.06
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 197,
              "width": 168,
              "url": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 117.13,
           "hfov": 8.6,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -24.06
          }
         ]
        },
        {
         "yaw": -173.86,
         "bleaching": 0.7,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_73E36706_624F_ED76_41AB_DED02A51D225",
         "bleachingDistance": 0.4,
         "pitch": 67.06
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_t.jpg"
      }
     ],
     "audios": [
      {
       "id": "audio_70786995_6257_256A_41D0_B59A31BD22F4",
       "class": "PanoramaAudio",
       "audio": "this.audioresource_70787995_6257_256A_418C_5E9561E031FB",
       "autoplay": true
      }
     ],
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746",
       "backwardYaw": -11.26,
       "yaw": 123.69,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 123.69,
    "yaw": -11.26,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41C5_14A14AE973BE",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_14A14AE973BE_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_14A14AE973BE.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_14A14AE973BE_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41B7_77E0CBD3B1E1",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41B7_77E0CBD3B1E1_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41B7_77E0CBD3B1E1.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41B7_77E0CBD3B1E1_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "height": 38,
   "width": 38,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41C5_38665BD3D12D",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_38665BD3D12D_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_38665BD3D12D.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C5_38665BD3D12D_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41D3_BA812759C516",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D3_BA812759C516_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D3_BA812759C516.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D3_BA812759C516_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41AB_186208FD2206",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41AB_186208FD2206_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41AB_186208FD2206.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41AB_186208FD2206_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41D2_078FB9025864",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D2_078FB9025864_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D2_078FB9025864.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D2_078FB9025864_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "buttonRestart": {
   "paddingRight": 0,
   "mode": "push",
   "height": 38,
   "width": 38,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "height": 30,
   "width": 30,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_41C6_088C14FC2CF1",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C6_088C14FC2CF1_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C6_088C14FC2CF1.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41C6_088C14FC2CF1_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "height": 38,
   "width": 38,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "minHeight": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "id": "IconButton_4F24823F_5E27_0EC1_4195_B543067DB846",
   "rollOverIconURL": "skin/IconButton_4F24823F_5E27_0EC1_4195_B543067DB846_rollover.png",
   "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_4195_B543067DB846.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_4195_B543067DB846_pressed.png",
   "paddingTop": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "pitchSpeed": 17.05,
     "targetPitch": -39.01,
     "path": "shortest",
     "targetYaw": -59.59,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -32.46,
     "path": "shortest",
     "targetYaw": 106.69,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -10.75,
     "path": "shortest",
     "targetYaw": 51.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_6DBE50EF_623E_E4B6_41D2_AB1E3138D2CE, null, false); this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_camera.get('initialSequence').pause()"
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -72.59,
     "path": "shortest",
     "targetYaw": 45.67,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": 15.87,
     "path": "shortest",
     "targetYaw": 23.14,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -73.41,
     "path": "shortest",
     "targetYaw": -15.77,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -63.17,
     "path": "shortest",
     "targetYaw": -125.12,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -0.92,
     "path": "shortest",
     "targetYaw": -107.92,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ]
  },
  "id": "panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 123,
   "yaw": -28.32,
   "class": "PanoramaCameraPosition",
   "pitch": -12.88
  }
 },
 "this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "label": "temagolf.compressed",
  "thumbnailUrl": "media/video_6E4623BF_61DD_6496_419C_1C6B0FE55789_t.jpg",
  "width": 640,
  "id": "video_6E4623BF_61DD_6496_419C_1C6B0FE55789",
  "class": "Video",
  "video": {
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_6E4623BF_61DD_6496_419C_1C6B0FE55789.mp4",
   "class": "VideoResource"
  },
  "height": 360,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "media": "this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BEF9715_61CD_2D6A_417B_C9A1C58DB746_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B3211C8_61DB_E4FB_41A9_46ACCB1309A6_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 0)",
    "media": "this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 2, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789)"
   }
  ]
 },
 {
  "id": "PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "displayPlaybackBar": true,
     "buttonRestart": "this.IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8",
     "id": "viewer_uid71AF8994_61CD_256A_41D4_09F53DBD92A8VideoPlayer",
     "class": "VideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "paddingRight": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "toolTipPaddingBottom": 4,
      "progressBarOpacity": 1,
      "shadow": false,
      "playbackBarHeadBorderColor": "#000000",
      "progressRight": 10,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowOpacity": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "progressBarBorderSize": 0,
      "progressHeight": 20,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "paddingTop": 0,
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 2,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "borderRadius": 0,
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "playbackBarOpacity": 1,
      "height": "100%",
      "width": "100%",
      "borderSize": 0,
      "playbackBarLeft": 0,
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadBorderSize": 0,
      "progressBorderRadius": 4,
      "id": "viewer_uid71D9AD07_6235_3D75_41C8_85B1B4405162",
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "minWidth": 100,
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "toolTipFontSize": 12
     }
    },
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid71AF8994_61CD_256A_41D4_09F53DBD92A8VideoPlayer)",
    "media": "this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid71AF8994_61CD_256A_41D4_09F53DBD92A8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B, 0, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789)"
   }
  ]
 },
 {
  "id": "PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "displayPlaybackBar": true,
     "buttonRestart": "this.IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8",
     "id": "viewer_uid736A177B_625D_ED9D_41C7_0737DA95EE1CVideoPlayer",
     "class": "VideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "paddingRight": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "toolTipPaddingBottom": 4,
      "progressBarOpacity": 1,
      "shadow": false,
      "playbackBarHeadBorderColor": "#000000",
      "progressRight": 10,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowOpacity": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "progressBarBorderSize": 0,
      "progressHeight": 20,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "paddingTop": 0,
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 2,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "borderRadius": 0,
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "playbackBarOpacity": 1,
      "height": "100%",
      "width": "100%",
      "borderSize": 0,
      "playbackBarLeft": 0,
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadBorderSize": 0,
      "progressBorderRadius": 4,
      "id": "viewer_uid71DA6D07_6235_3D75_41D5_4048FB3EB94F",
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "minWidth": 100,
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "toolTipFontSize": 12
     }
    },
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid736A177B_625D_ED9D_41C7_0737DA95EE1CVideoPlayer)",
    "media": "this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid736A177B_625D_ED9D_41C7_0737DA95EE1CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1, 0, this.video_6E4623BF_61DD_6496_419C_1C6B0FE55789)"
   }
  ]
 },
 {
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "headerBorderSize": 0,
  "backgroundColor": [],
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingRight": 0,
  "modal": true,
  "shadowBlurRadius": 6,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "scrollBarMargin": 2,
  "headerPaddingRight": 10,
  "headerBorderColor": "#000000",
  "shadowVerticalLength": 0,
  "gap": 10,
  "closeButtonPaddingRight": 0,
  "title": "Ghana center of the world golf course",
  "bodyPaddingRight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 5,
  "headerBackgroundColor": [
   "#006600",
   "#006600",
   "#006600",
   "#009900",
   "#00FF00",
   "#009900",
   "#006600",
   "#006600",
   "#006600",
   "#006600",
   "#00FF33",
   "#00FF33"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "titleFontColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [],
  "shadowColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "footerBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titleTextDecoration": "none",
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "titleFontSize": 14,
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [],
  "titleFontWeight": "normal",
  "children": [
   {
    "paddingRight": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "height": "45%",
    "scrollBarMargin": 2,
    "width": "100%",
    "borderSize": 0,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The Ghana \u2013 Centre of The World(GCOW) Golf Tournament is an annual sports tourism brand which creates awareness and engages stakeholders on the Ghana-Centre of the World Project. The tournament is in its third year and this year\u2019s edition is dubbed the \u201cVersion 3.0\u201d. It is an invitational tournament opened to all golfers across Ghana and the West Coast of Africa. The tournament brings together people from all walks of life such as Cabinet Ministers, Heads of State-Owned Enterprises, Captains of Industry, Africans in the diaspora, sports and golf enthusiasts, families, students, media personnel and the general public.</SPAN></DIV></div>",
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "htmlText_uid71C0DD03_6235_3D6D_41B8_7E51379EC56F",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "minWidth": 0
   },
   {
    "minHeight": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "shadow": false,
    "borderRadius": 0,
    "width": "100%",
    "id": "image_uid71C0DD03_6235_3D6D_41B8_7E51379EC56F_1",
    "paddingLeft": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 0,
    "url": "media/photo_72C9456E_624F_6DB7_41D3_A85F8207835C.png",
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "54%",
    "scaleMode": "fit_inside",
    "class": "Image"
   }
  ],
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "height": 500,
  "paddingLeft": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.02,
   0.05,
   0.1,
   0.1,
   0.19,
   0.2,
   0.27,
   0.38,
   0.73,
   0.9,
   1
  ],
  "titleFontFamily": "Arial",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderRadius": 5,
  "footerBackgroundOpacity": 1,
  "borderSize": 0,
  "minHeight": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "footerBorderColor": "#000000",
  "shadowOpacity": 0.5,
  "headerBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 5,
  "closeButtonIconWidth": 12,
  "class": "Window",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.camera_71D4FD2F_6235_3DB5_41D7_37BEBB7430FF.get('initialSequence').play()",
  "veilColorDirection": "horizontal",
  "closeButtonBorderSize": 0,
  "closeButtonIconHeight": 12,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_6DBE50EF_623E_E4B6_41D2_AB1E3138D2CE",
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "closeButtonIconLineWidth": 2,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "titleFontStyle": "normal",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10
 },
 {
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColor": [],
  "bodyBackgroundOpacity": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "modal": true,
  "shadowBlurRadius": 6,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowVerticalLength": 0,
  "closeButtonPaddingTop": 5,
  "scrollBarMargin": 2,
  "closeButtonPressedIconLineWidth": 5,
  "headerPaddingRight": 0,
  "closeButtonPaddingRight": 5,
  "gap": 10,
  "bodyPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "closeButtonPressedBorderSize": 0,
  "scrollBarColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#888888",
  "titleFontSize": 14,
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid71D9AD07_6235_3D75_41C8_85B1B4405162"
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBorderColor": "#000000",
  "bodyPaddingTop": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#666666",
  "footerBackgroundOpacity": 0,
  "borderSize": 0,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "footerHeight": 5,
  "shadowOpacity": 0.5,
  "headerBackgroundOpacity": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "class": "Window",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.PlayList_71AA899C_61CD_249B_41D2_8D94D0F2723B.set('selectedIndex', -1);",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_6E07B8DB_61CD_E49D_4152_E322937DD86E",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "contentOpaque": false,
  "closeButtonIconLineWidth": 5,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "backgroundOpacity": 1,
  "layout": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingBottom": 5,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "closeButtonPressedBorderColor": "#000000"
 },
 "this.popup_6E8AE663_61CD_EFAE_41A1_CC417661A795",
 {
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColor": [],
  "bodyBackgroundOpacity": 0,
  "overflow": "scroll",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "modal": true,
  "shadowBlurRadius": 6,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowVerticalLength": 0,
  "closeButtonPaddingTop": 5,
  "scrollBarMargin": 2,
  "closeButtonPressedIconLineWidth": 5,
  "headerPaddingRight": 0,
  "closeButtonPaddingRight": 5,
  "gap": 10,
  "bodyPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "closeButtonPressedBorderSize": 0,
  "scrollBarColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#888888",
  "titleFontSize": 14,
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "children": [
   "this.viewer_uid71DA6D07_6235_3D75_41D5_4048FB3EB94F"
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBorderColor": "#000000",
  "bodyPaddingTop": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#666666",
  "footerBackgroundOpacity": 0,
  "borderSize": 0,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "footerHeight": 5,
  "shadowOpacity": 0.5,
  "headerBackgroundOpacity": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "class": "Window",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.PlayList_7396978D_625D_ED7A_41D0_6588E70E59B1.set('selectedIndex', -1);",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_7331BC54_625D_23EB_41D0_2C57E8D9B6CB",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "contentOpaque": false,
  "closeButtonIconLineWidth": 5,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "backgroundOpacity": 1,
  "layout": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingBottom": 5,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "closeButtonPressedBorderColor": "#000000"
 },
 "this.popup_726E8A08_625D_277B_41D0_B459A31448ED",
 {
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "headerBorderSize": 0,
  "backgroundColor": [],
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingRight": 0,
  "modal": true,
  "shadowBlurRadius": 6,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowVerticalLength": 0,
  "scrollBarMargin": 2,
  "headerPaddingRight": 10,
  "headerBorderColor": "#000000",
  "gap": 10,
  "title": "The Ghana  Centre of The World Golf Course",
  "bodyPaddingRight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 5,
  "headerBackgroundColor": [
   "#003300",
   "#006600",
   "#00FF00"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "titleFontColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [],
  "shadowColor": "#000000",
  "shadowHorizontalLength": 3,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titleTextDecoration": "none",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "titleFontSize": 14,
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [],
  "titleFontWeight": "normal",
  "children": [
   {
    "paddingRight": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "height": "44%",
    "scrollBarMargin": 2,
    "width": "100%",
    "borderSize": 0,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The Ghana \u2013 Centre of The World(GCOW) Golf Tournament is an annual sports tourism brand which creates awareness and engages stakeholders on the Ghana-Centre of the World Project. The tournament is in its third year and this year\u2019s edition is dubbed the \u201cVersion 3.0\u201d. It is an invitational tournament opened to all golfers across Ghana and the West Coast of Africa. The tournament brings together people from all walks of life such as Cabinet Ministers, Heads of State-Owned Enterprises, Captains of Industry, Africans in the diaspora, sports and golf enthusiasts, families, students, media personnel and the general public.</SPAN></DIV></div>",
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "htmlText_uid71DAAD08_6235_3D7B_41BF_ED3E9538D80E",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "minWidth": 0
   },
   {
    "minHeight": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "shadow": false,
    "borderRadius": 0,
    "width": "100%",
    "id": "image_uid71DAAD08_6235_3D7B_41BF_ED3E9538D80E_1",
    "paddingLeft": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 0,
    "url": "media/photo_72C9456E_624F_6DB7_41D3_A85F8207835C.png",
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "55%",
    "scaleMode": "fit_inside",
    "class": "Image"
   }
  ],
  "bodyBorderSize": 0,
  "bodyPaddingTop": 5,
  "width": 400,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "height": 500,
  "paddingLeft": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderRadius": 5,
  "borderSize": 0,
  "minHeight": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadowOpacity": 0.5,
  "headerBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 5,
  "closeButtonIconWidth": 12,
  "class": "Window",
  "closeButtonIconHeight": 12,
  "bodyBackgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_72F6DCC4_624B_5CEB_41D0_D7CCA12E7A3A",
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "closeButtonIconLineWidth": 2,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "titleFontStyle": "normal",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingBottom": 10,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "pitchSpeed": 78.78,
     "targetPitch": -12.88,
     "path": "shortest",
     "targetYaw": -28.32,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 157.29
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -39.01,
     "path": "shortest",
     "targetYaw": -59.59,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -32.46,
     "path": "shortest",
     "targetYaw": 106.69,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -10.75,
     "path": "shortest",
     "targetYaw": 51.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_6DBE50EF_623E_E4B6_41D2_AB1E3138D2CE, null, false); this.camera_71D4FD2F_6235_3DB5_41D7_37BEBB7430FF.get('initialSequence').pause()"
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -72.59,
     "path": "shortest",
     "targetYaw": 45.67,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": 15.87,
     "path": "shortest",
     "targetYaw": 23.14,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -73.41,
     "path": "shortest",
     "targetYaw": -15.77,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -63.17,
     "path": "shortest",
     "targetYaw": -125.12,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "pitchSpeed": 17.05,
     "targetPitch": -0.92,
     "path": "shortest",
     "targetYaw": -107.92,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ]
  },
  "id": "camera_71D4FD2F_6235_3DB5_41D7_37BEBB7430FF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 123,
   "yaw": 168.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_71EEFD4E_6235_3DF7_41D8_853EFFBE30E5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -56.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_72C9456E_624F_6DB7_41D3_A85F8207835C.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "label": "temacenter",
  "duration": 5000,
  "width": 838,
  "id": "photo_72C9456E_624F_6DB7_41D3_A85F8207835C",
  "class": "Photo",
  "height": 470,
  "thumbnailUrl": "media/photo_72C9456E_624F_6DB7_41D3_A85F8207835C_t.png"
 },
 "this.audio_7058B5F6_625F_2C9D_41A3_BF339A5320C9",
 "this.audio_70786995_6257_256A_41D0_B59A31BD22F4"
], "children": [
 {
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "progressBottom": 1,
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "shadow": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 10,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowOpacity": 0,
  "toolTipOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 2,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "borderSize": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "top": 77,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": 92,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBorderRadius": 4,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "right": 0,
  "playbackBarRight": 0,
  "toolTipPaddingRight": 6,
  "toolTipFontSize": 12,
  "left": 0
 },
 {
  "itemLabelGap": 5,
  "horizontalAlign": "left",
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelFontWeight": "normal",
  "paddingRight": 20,
  "maxHeight": 800,
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "itemLabelTextDecoration": "none",
  "borderRadius": 5,
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarMargin": 2,
  "paddingLeft": 20,
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailWidth": 100,
  "itemHorizontalAlign": "center",
  "itemBackgroundColorRatios": [],
  "itemLabelHorizontalAlign": "center",
  "minHeight": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "itemThumbnailHeight": 75,
  "itemPaddingRight": 3,
  "shadow": false,
  "itemBackgroundColor": [],
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowHorizontalLength": 3,
  "top": 84,
  "class": "ThumbnailList",
  "itemThumbnailShadowColor": "#000000",
  "bottom": 100,
  "itemBackgroundOpacity": 0,
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarWidth": 10,
  "itemOpacity": 1,
  "itemThumbnailShadowOpacity": 0.8,
  "layout": "vertical",
  "id": "thumbnaillist5245",
  "itemPaddingBottom": 3,
  "itemBorderRadius": 0,
  "itemMode": "normal",
  "itemPaddingLeft": 3,
  "scrollBarColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "paddingTop": 10,
  "itemLabelPosition": "bottom",
  "itemThumbnailShadowBlurRadius": 4,
  "itemLabelFontStyle": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadow": true,
  "itemLabelFontSize": 14,
  "minWidth": 0,
  "maxWidth": 800,
  "right": 9,
  "itemPaddingTop": 3,
  "itemThumbnailBorderRadius": 5,
  "itemVerticalAlign": "middle",
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0
  ]
 },
 {
  "paddingRight": 0,
  "fontSize": 40,
  "borderRadius": 0,
  "height": 49,
  "width": 867,
  "paddingLeft": 0,
  "fontFamily": "Arial",
  "text": "Tema Center Of The World Golf Course",
  "textDecoration": "none",
  "fontStyle": "normal",
  "class": "Label",
  "borderSize": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "top": 14,
  "fontWeight": "bold",
  "minHeight": 16,
  "paddingBottom": 0,
  "fontColor": "#666666",
  "backgroundOpacity": 0,
  "id": "label4056",
  "paddingTop": 0,
  "minWidth": 30,
  "verticalAlign": "middle",
  "left": 9
 },
 {
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "borderRadius": 0,
  "height": 92,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "gap": 6,
  "width": "100%",
  "borderSize": 0,
  "class": "Container",
  "layout": "horizontal",
  "shadow": false,
  "horizontalAlign": "center",
  "minHeight": 1,
  "bottom": "0%",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "minWidth": 1,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "overflow": "hidden",
    "height": 86,
    "borderRadius": 0,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "gap": 10,
    "borderSize": 0,
    "class": "Container",
    "layout": "horizontal",
    "shadow": false,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "minHeight": 20,
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "id": "Container_4F24823F_5E27_0EC1_41C9_7868FB522283",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "minWidth": 420,
    "contentOpaque": false,
    "backgroundColorDirection": "vertical",
    "paddingTop": 0,
    "backgroundColorRatios": [
     0
    ],
    "children": [
     "this.IconButton_4F24823F_5E27_0EC1_41D5_C7F5AEE691E8",
     "this.IconButton_4F24823F_5E27_0EC1_41C5_38665BD3D12D",
     "this.IconButton_4F24823F_5E27_0EC1_4195_B543067DB846",
     {
      "paddingRight": 0,
      "mode": "toggle",
      "height": 38,
      "width": 38,
      "paddingLeft": 0,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "shadow": false,
      "minHeight": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "id": "IconButton_4F24823F_5E27_0EC1_41BC_DE0FF23E40FC",
      "iconURL": "skin/IconButton_4F24823F_5E27_0EC1_41BC_DE0FF23E40FC.png",
      "minWidth": 0,
      "pressedIconURL": "skin/IconButton_4F24823F_5E27_0EC1_41BC_DE0FF23E40FC_pressed.png",
      "paddingTop": 0,
      "verticalAlign": "middle"
     },
     {
      "backgroundColor": [
       "#FFFFFF"
      ],
      "overflow": "hidden",
      "width": 133,
      "paddingRight": 0,
      "height": "100%",
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "gap": 5,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "Container",
      "layout": "horizontal",
      "shadow": false,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "minHeight": 20,
      "paddingBottom": 0,
      "id": "Container_4F24823F_5E27_0EC1_41B2_DBE22C31B491",
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "minWidth": 20,
      "backgroundOpacity": 1,
      "backgroundColorDirection": "vertical",
      "contentOpaque": false,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "children": [
       "this.IconButton_4F24823F_5E27_0EC1_41C5_14A14AE973BE",
       {
        "backgroundColor": [
         "#FFFFFF"
        ],
        "overflow": "hidden",
        "width": 47,
        "paddingRight": 0,
        "height": "100%",
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "gap": 10,
        "borderRadius": 0,
        "borderSize": 0,
        "class": "Container",
        "layout": "vertical",
        "shadow": false,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "minHeight": 20,
        "paddingBottom": 0,
        "id": "Container_4F24823F_5E27_0EC1_41B0_1814606D918A",
        "scrollBarOpacity": 0.5,
        "scrollBarColor": "#000000",
        "scrollBarVisible": "rollOver",
        "minWidth": 20,
        "backgroundOpacity": 1,
        "backgroundColorDirection": "vertical",
        "contentOpaque": false,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0
        ],
        "children": [
         "this.IconButton_4F24823F_5E27_0EC1_41C6_088C14FC2CF1",
         "this.IconButton_4F24823F_5E27_0EC1_41D3_BA812759C516"
        ],
        "verticalAlign": "middle"
       },
       "this.IconButton_4F24823F_5E27_0EC1_41D2_078FB9025864"
      ],
      "verticalAlign": "middle"
     },
     {
      "backgroundColor": [
       "#FFFFFF"
      ],
      "overflow": "hidden",
      "width": 85,
      "paddingRight": 0,
      "height": "100%",
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "gap": 10,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "Container",
      "layout": "horizontal",
      "shadow": false,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "minHeight": 20,
      "paddingBottom": 0,
      "id": "Container_4F24823F_5E27_0EC1_41D2_80269FBD628B",
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "minWidth": 20,
      "backgroundOpacity": 1,
      "backgroundColorDirection": "vertical",
      "contentOpaque": false,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "children": [
       "this.IconButton_4F24823F_5E27_0EC1_41AB_186208FD2206",
       "this.IconButton_4F24823F_5E27_0EC1_41B7_77E0CBD3B1E1"
      ],
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "left": "0%"
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minHeight": 0,
  "shadow": false,
  "top": 0,
  "class": "UIComponent",
  "bottom": 0,
  "paddingBottom": 0,
  "visible": false,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "right": 0,
  "backgroundColorRatios": [
   0
  ],
  "left": 0
 },
 {
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minHeight": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "class": "ZoomImage",
  "bottom": 0,
  "paddingBottom": 0,
  "visible": false,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "right": 0,
  "backgroundColorRatios": [],
  "left": 0
 },
 {
  "label": "",
  "iconHeight": 20,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "shadowBlurRadius": 6,
  "paddingLeft": 5,
  "iconWidth": 20,
  "gap": 5,
  "borderRadius": 0,
  "rollOverIconColor": "#666666",
  "textDecoration": "none",
  "fontFamily": "Arial",
  "borderSize": 0,
  "minHeight": 0,
  "layout": "horizontal",
  "shadow": false,
  "fontStyle": "normal",
  "iconBeforeLabel": true,
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "class": "CloseButton",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "minWidth": 0,
  "iconColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColorDirection": "vertical",
  "paddingTop": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "right": 10
 }
], 
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_4F24823F_5E27_0EC1_41BC_DE0FF23E40FC",
 "paddingLeft": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "gap": 10,
 "width": "100%",
 "borderSize": 0,
 "class": "Player",
 "layout": "absolute",
 "shadow": false,
 "horizontalAlign": "left",
 "minHeight": 20,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "verticalAlign": "top"
})