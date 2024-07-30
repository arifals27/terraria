(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 1,
 "children": [
  "this.MainViewer",
  "this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
  "this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F",
  "this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
  "this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
  "this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
  "this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
  "this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
  "this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
  "this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
  "this.HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4",
  "this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B",
  "this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310",
  "this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
  "this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
  "this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
  "this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
  "this.HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
  "this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837",
  "this.IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "paddingTop": 0,
 "width": "100%",
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "start": "this.init()",
 "scrollBarOpacity": 0.5,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 29.97,
  "pitch": 7.29
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13B03785_044B_1EDA_4182_76457F390C26",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -29.36,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_1E40B41A_044B_11EE_417E_76BB8A5D0A27",
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1E40B41A_044B_11EE_417E_76BB8A5D0A27, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1E40B41A_044B_11EE_417E_76BB8A5D0A27, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
 "overlays": [
  "this.overlay_FAF97A9E_E586_74E3_41BA_5DF603FDDAFB",
  "this.overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
  "this.overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 99.78,
   "backwardYaw": -154.33,
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -42.61,
   "backwardYaw": -148.62,
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "distance": 1
  }
 ],
 "label": "1721724495579",
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_t.jpg",
 "overlays": [
  "this.overlay_FA39E3D8_EFC5_B502_41DA_5731512384A3",
  "this.overlay_FA677721_EFC4_9D02_41D9_BC71CCDCD18D",
  "this.overlay_E89627DC_F9AD_7233_41E9_7E7FD9C9A9B2"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 116.18,
   "backwardYaw": -115.28,
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "distance": 1
  }
 ],
 "label": "8",
 "id": "panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 142,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
 "overlays": [
  "this.overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
  "this.overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
  "this.overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
  "this.popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9",
  "this.overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -110.9,
   "backwardYaw": -3.04,
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "distance": 1
  }
 ],
 "label": "1721724495446",
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EAF34A7_044B_1226_4188_37459FA45A92",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.1,
  "pitch": 0
 }
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "buttonRestart": "this.IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
 "viewerArea": "this.MainViewer"
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F1714F5_044B_123B_418D_23568C8F1FA4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.9,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_EA53D615_F9DB_4F10_41E6_1D1EF1E64AD7",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EC4A4C6_044B_1266_4185_AC757CC4D56B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.53,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 2000,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "autoplay": true,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "hfov": 17.86,
 "popupMaxWidth": "95%",
 "hideDuration": 2000,
 "pitch": -4.55,
 "hideEasing": "cubic_out",
 "loop": false,
 "yaw": -37.8,
 "id": "popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12B5A60E_044B_11E6_416B_0E5F40C7EA90",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 56.43,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12BF261E_044B_11E9_4170_885F6BA3E088",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.33,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "hfov": 10.56,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.1,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "yaw": -39.71,
 "id": "popup_FBA18295_EF0B_7C02_41EA_9C1523C71541"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F0A7504_044B_13DA_417A_294B274452EC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -63.82,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F3BB514_044B_13FA_414B_039D2FA8885C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.43,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_131C56BA_044B_1E2E_417F_637577D15AB7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 14.84,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F4E2543_044B_125E_4146_5D76167D0AE3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 22.03,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -37.77,
  "pitch": -3.49
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_130166CA_044B_1E69_418D_261B34787893",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -65.05,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 4.35,
  "pitch": 4.86
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F7ED553_044B_127F_4185_3A0461B1A5E6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 96.34,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
 "overlays": [
  "this.overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
  "this.overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1721724495667",
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -96.94,
  "pitch": 7.46
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EF6A4D6_044B_1279_4184_ED1D99A1F36E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -80.22,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -34.41,
  "pitch": -1.85
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.16,
  "pitch": 15.44
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.95,
  "pitch": 5.86
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
 "overlays": [
  "this.overlay_C96C5754_E585_BC60_41E4_C753248836C7",
  "this.overlay_F8D75ED5_EFC5_6F02_41DC_A53514F93629"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -148.62,
   "backwardYaw": -42.61,
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 114.95,
   "backwardYaw": -166.24,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "distance": 1
  }
 ],
 "label": "1721724495555",
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.07,
  "pitch": 2.72
 }
},
{
 "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
 "overlays": [
  "this.overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
  "this.overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
  "this.overlay_FC156982_EFC5_9506_4197_B94C6A420EA0",
  "this.overlay_FDA0ADC7_F2CA_A0BB_41ED_001968CBA9BC",
  "this.overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
  "this.overlay_10DBCA6E_03DB_7626_416D_16022585A719"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -9.03,
   "backwardYaw": -46.7,
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.07,
   "backwardYaw": 120.78,
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.74,
   "backwardYaw": 84.83,
   "panorama": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -28.57,
   "backwardYaw": 82.35,
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "distance": 1
  }
 ],
 "label": "6",
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "shadowHorizontalLength": 3,
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 0,
 "id": "window_0A42C1B8_03BB_7229_4185_169A54A469B7",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingBottom": 5,
 "closeButtonBackgroundOpacity": 0.3,
 "modal": true,
 "backgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "closeButtonBorderRadius": 0,
 "titleFontFamily": "Arial",
 "headerBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "footerHeight": 5,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "bodyPaddingTop": 0,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "shadowBlurRadius": 6,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "verticalAlign": "middle",
 "borderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minWidth": 20,
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonIconHeight": 20,
 "gap": 10,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "bodyBackgroundOpacity": 0,
 "headerPaddingBottom": 5,
 "children": [
  "this.viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66"
 ],
 "paddingTop": 0,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "titlePaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonIconLineWidth": 5,
 "headerPaddingRight": 0,
 "closeButtonPaddingTop": 5,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowSpread": 1,
 "titlePaddingRight": 5,
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "class": "Window",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Window385"
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -31.99,
  "pitch": -6.79
 }
},
{
 "rotationY": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "hfov": 11.31,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.92,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "yaw": -169.57,
 "id": "popup_FB933291_EF0F_BC03_41DB_FC2C048DC812"
},
{
 "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
 "overlays": [
  "this.overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
  "this.overlay_FC6A7522_EFC4_9D06_41E7_F3C57BC6E42F",
  "this.overlay_E8975959_F9AD_DE35_41D1_A668059F0D18"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.85,
   "backwardYaw": -64.27,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "distance": 1
  }
 ],
 "label": "12",
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12A9364D_044B_1E6B_4184_98107D8B33E0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.73,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12A1263D_044B_1E2A_4172_1328FE8F103B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -158.26,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E83F478_044B_1229_418C_80EB2AA4BEDC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -82.76,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.65,
  "pitch": 1.53
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.05,
  "pitch": -1.76
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12D3765C_044B_1E6A_4166_2CA7E92F0D70",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.06,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -47.57,
  "pitch": 20.69
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
 "overlays": [
  "this.overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
  "this.overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
  "this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846",
  "this.overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1721724495682",
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12F4D68B_044B_1EEE_415F_C9113F842560",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.22,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -0.31,
  "pitch": 0.92
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1398C766_044B_1E26_4170_BB5A01D22292",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0.15,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_ED99D2FA_F9DD_4713_41D1_CD14CC52DDA1",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_137AA747_044B_1E67_4183_1BC5B7555E6F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.91,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
 "overlays": [
  "this.overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
  "this.overlay_C62281D8_E58E_5460_41A3_BDADE6DA672B",
  "this.overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
  "this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812",
  "this.overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -157.27,
   "backwardYaw": -161.59,
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.1,
   "backwardYaw": -142.79,
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "distance": 1
  }
 ],
 "label": "1721724495480",
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13A32795_044B_1EFA_4162_B4B76F4F0EA5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.41,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1E9E9468_044B_122A_4152_B5FABF58C080",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.72,
  "pitch": 0
 }
},
{
 "shadowHorizontalLength": 3,
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 0,
 "id": "window_0A4321B8_03BB_7229_413F_B84524660180",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingBottom": 5,
 "closeButtonBackgroundOpacity": 0.3,
 "modal": true,
 "backgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "closeButtonBorderRadius": 0,
 "titleFontFamily": "Arial",
 "headerBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "footerHeight": 5,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "bodyPaddingTop": 0,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedIconColor": "#888888",
 "shadowBlurRadius": 6,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedIconLineWidth": 5,
 "minHeight": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "verticalAlign": "middle",
 "borderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minWidth": 20,
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonIconHeight": 20,
 "gap": 10,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "bodyBackgroundOpacity": 0,
 "headerPaddingBottom": 5,
 "children": [
  "this.viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2D"
 ],
 "paddingTop": 0,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "titlePaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonIconLineWidth": 5,
 "headerPaddingRight": 0,
 "closeButtonPaddingTop": 5,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowSpread": 1,
 "titlePaddingRight": 5,
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "class": "Window",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Window384"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_136EC747_044B_1E67_418A_9C0E377F50A6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 119.3,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "hfov": 11.59,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.3,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "yaw": -2.99,
 "id": "popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F60E562_044B_125E_4175_E7EE1FD85D40",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.96,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.96,
  "pitch": 9.53
 }
},
{
 "levels": [
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84"
},
{
 "thumbnailUrl": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "20240720_181204_534",
 "class": "Video",
 "id": "video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
 "loop": false,
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4"
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA2F0FD8_F9E4_BD10_41D8_F5D92324AA10",
 "duration": 1000
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false); this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true, -1, this.effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false, -1, this.effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7, 'hideEffect', false)",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "media": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false); this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true, -1, this.effect_EA53D615_F9DB_4F10_41E6_1D1EF1E64AD7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false, -1, this.effect_EA53F615_F9DB_4F10_4186_136B65E1A4BC, 'hideEffect', false)",
   "camera": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera"
  },
  {
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4, false, -1, this.effect_EA2FEFD8_F9E4_BD10_41E8_8C0D1BC511AA, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, false, -1, this.effect_EA2FCFD8_F9E4_BD10_41E3_CC0B4FF68E8B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, false, -1, this.effect_EA2F0FD8_F9E4_BD10_41D8_F5D92324AA10, 'hideEffect', false)",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  "this.PanoramaPlayListItem_1E7F7439_044B_122A_417B_71815AC71A69",
  {
   "media": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false); this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true, -1, this.effect_ED9BC2FA_F9DD_4713_41E8_6C025ED15FED, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false, -1, this.effect_ED9BE2FA_F9DD_4713_41E0_A7F050EB40A6, 'hideEffect', false)",
   "camera": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera"
  },
  {
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false); this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true, -1, this.effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false, -1, this.effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96, 'hideEffect', false)",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  "this.PanoramaPlayListItem_1E7F2439_044B_122A_4184_E11E368E8EDD",
  {
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false); this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true, -1, this.effect_EA558615_F9DB_4F10_41E3_4AAA34777955, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true, -1, this.effect_ED99D2FA_F9DD_4713_41D1_CD14CC52DDA1, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false, -1, this.effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false, -1, this.effect_ED9802FA_F9DD_4713_41D1_2A1F66A12662, 'hideEffect', false)",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  "this.PanoramaPlayListItem_1E7FC439_044B_122A_414C_D1EB138B3A7A",
  {
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true, -1, this.effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false, -1, this.effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686, 'hideEffect', false)",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false); this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true, -1, this.effect_ED9D1309_F9DD_46F0_41DD_11622910FACC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false, -1, this.effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE, 'hideEffect', false)",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  },
  {
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true, -1, this.effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false, -1, this.effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2, 'hideEffect', false)",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "media": "this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "levels": [
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_0.jpg",
   "width": 3816,
   "class": "ImageResourceLevel",
   "height": 2544
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5"
},
{
 "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
 "overlays": [
  "this.overlay_FBA839C7_EFC7_950E_41BE_B1546ED291A5",
  "this.overlay_FB7CA22B_EFC4_9706_41E5_21CC1006EB47",
  "this.overlay_E8903F24_F9AD_5213_4185_6991E358B22B"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -115.28,
   "backwardYaw": 116.18,
   "panorama": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.35,
   "backwardYaw": -28.57,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "distance": 1
  }
 ],
 "label": "7",
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
 "overlays": [
  "this.overlay_F9B60EA4_EFCC_EF02_41E3_BEF773A58C64",
  "this.overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.66,
   "backwardYaw": 11.44,
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "distance": 1
  }
 ],
 "label": "9",
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 134,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12CFB67C_044B_1E29_4184_D4028CDA1279",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 133.3,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12D8866C_044B_1E2A_4182_2FCCFF994513",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.97,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_133CC6E9_044B_1E2A_417E_F7BE3A5CFBB7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.41,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_1E59641A_044B_11EE_417D_317D4E271D4C",
 "items": [
  {
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1E59641A_044B_11EE_417D_317D4E271D4C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1E59641A_044B_11EE_417D_317D4E271D4C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "levels": [
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_0.jpg",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.02,
  "pitch": -1.31
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_ED9D1309_F9DD_46F0_41DD_11622910FACC",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12B9362D_044B_1E2A_4187_5AA420A92EB1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 28.91,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "hfov": 10.56,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.75,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "yaw": -21.59,
 "id": "popup_FBF6B71E_EF05_4401_41EC_66F81499F846"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13416727_044B_1E26_4189_62E49833354D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.33,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_EA558615_F9DB_4F10_41E3_4AAA34777955",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13D7E7A5_044B_1EDB_4184_7E5DC0061319",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 18.89,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12E0269B_044B_1EEF_418A_7FAF75A198C2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.65,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
 "overlays": [
  "this.overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1721724495653",
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12FB468B_044B_1EEE_4129_03E37709BA4C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -95.17,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_t.jpg",
 "label": "lv_0_20240725012539",
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
 "loop": false,
 "pitch": 0,
 "hfovMin": 60,
 "hfov": 360,
 "partial": false,
 "hfovMax": 140,
 "class": "Video360",
 "vfov": 180,
 "video": [
  {
   "width": 1080,
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.m3u8",
   "class": "Video360Resource",
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg",
   "type": "application/x-mpegurl",
   "framerate": 30,
   "height": 1920
  },
  {
   "width": 1080,
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.mp4",
   "class": "Video360Resource",
   "framerate": 30,
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg",
   "type": "video/mp4",
   "bitrate": 4665,
   "height": 1920
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
 "overlays": [
  "this.overlay_FA797346_EF0B_DC01_41DD_13322D3794E4",
  "this.popup_FBA18295_EF0B_7C02_41EA_9C1523C71541",
  "this.overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
  "this.overlay_FB95C174_EFDC_B502_41DB_DA359E6DE68C",
  "this.overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 97.24,
   "backwardYaw": -66.67,
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.57,
   "backwardYaw": 106.02,
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "distance": 1
  }
 ],
 "label": "1721714221934",
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1394C756_044B_1E66_4173_9C2CCFCE492E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.85,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
 "overlays": [
  "this.overlay_C114236A_E58D_B423_41D4_A8163FB4E1D8",
  "this.overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
  "this.overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -142.79,
   "backwardYaw": 141.1,
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.16,
   "backwardYaw": 31.76,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "distance": 1
  }
 ],
 "label": "1721724495502",
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1315F6AA_044B_1E2E_418C_E8121FAD44E9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.56,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.46,
  "pitch": 9.52
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA2FEFD8_F9E4_BD10_41E8_8C0D1BC511AA",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EB77488_044B_12E9_416A_4460AD30DA7E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.93,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13576708_044B_1FEA_4187_7A6E7F6E95FC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 137.39,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
 "overlays": [
  "this.overlay_F270DF8F_E582_6CE1_41DA_D851A3BCB8E2",
  "this.overlay_CF148686_E582_5CE3_41E1_95CB7D75B77F",
  "this.overlay_FF9DBB11_EFC5_9502_41DF_069E26A37F14",
  "this.overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 31.47,
   "backwardYaw": -61.15,
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -64.27,
   "backwardYaw": -179.85,
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 107.6,
   "backwardYaw": -30.5,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "distance": 1
  }
 ],
 "label": "11",
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
 "overlays": [
  "this.overlay_C0A8181F_E586_73E1_41E7_D0F33E14CA35",
  "this.overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
  "this.overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -161.59,
   "backwardYaw": -157.27,
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.04,
   "backwardYaw": -110.9,
   "panorama": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "distance": 1
  }
 ],
 "label": "1721724495462",
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EE764E5_044B_125A_4187_C2795EEC880B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.78,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_t.jpg",
 "overlays": [
  "this.overlay_F797B21D_EF05_BC03_41D4_60E7BDE9CA96",
  "this.overlay_FCB6E5C2_EFC4_FD06_41EB_BE9E64922611",
  "this.overlay_E8803D8C_F9AE_D613_41B5_07BD3555C76A"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -157.97,
   "backwardYaw": -105.1,
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.83,
   "backwardYaw": -151.74,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "distance": 1
  }
 ],
 "label": "5",
 "id": "panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1ED464B6_044B_1226_4171_045775A621D8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.34,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA53F615_F9DB_4F10_4186_136B65E1A4BC",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
 "overlays": [
  "this.overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
  "this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
  "this.overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
  "this.overlay_F99F9825_EFCF_F302_41E7_A00792C39D40",
  "this.overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -66.67,
   "backwardYaw": 97.24,
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 120.78,
   "backwardYaw": 2.07,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "distance": 1
  }
 ],
 "label": "1721714222040",
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
 "overlays": [
  "this.overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
  "this.overlay_C290B942_E582_5460_41AD_F546A44C4638"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 150.64,
   "backwardYaw": 88.94,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46.7,
   "backwardYaw": -9.03,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "distance": 1
  }
 ],
 "label": "1721724495349",
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.18,
  "pitch": 12.61
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1337C6D9_044B_1E6A_4186_820FC81E2076",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.4,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A",
 "duration": 1000
},
{
 "thumbnailUrl": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "lv_0_20240725012539",
 "class": "Video",
 "id": "video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
 "loop": false,
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04.mp4"
 }
},
{
 "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
 "overlays": [
  "this.overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
  "this.overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
  "this.overlay_FDF7C1B8_F2DE_58B2_41E0_6B309908CE21"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 88.94,
   "backwardYaw": 150.64,
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.22,
   "backwardYaw": -144.59,
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 135.83,
   "backwardYaw": -161.11,
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "distance": 1
  }
 ],
 "label": "1721724495361",
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F5DA533_044B_123E_4171_86ACBB94490C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.24,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1EBB9497_044B_12E6_4158_13AF45C14DC1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.73,
  "pitch": 0
 }
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_135B3718_044B_1FEA_4178_D9158A14C627",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.76,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
 "overlays": [
  "this.overlay_CFB43D12_E586_6DE0_41E5_D19807675477",
  "this.overlay_C2A645F4_E586_7C27_41C7_D6014E6D3687",
  "this.overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
  "this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.11,
   "backwardYaw": 135.83,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "distance": 1
  }
 ],
 "label": "1721724495716",
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
 "overlays": [
  "this.overlay_C512E76B_E5FE_DC21_41EC_12E0EB2390DD",
  "this.overlay_C5366303_E5FE_55E1_41CE_85F2A00FD211",
  "this.overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -154.33,
   "backwardYaw": 99.78,
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -144.59,
   "backwardYaw": -9.22,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "distance": 1
  }
 ],
 "label": "1721724495600",
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "RotationalCamera",
 "manualRotationSpeed": 1800,
 "automaticRotationSpeed": 10,
 "automaticZoomSpeed": 10,
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "hfov": 120,
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 1
},
{
 "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
 "overlays": [
  "this.overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
  "this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C",
  "this.overlay_F81518F8_EF07_4C01_41EA_A848C51BA88E",
  "this.overlay_F537EC21_EF07_C403_41C3_E8A093930DFB",
  "this.overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -83.66,
   "backwardYaw": 79.67,
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -60.7,
   "backwardYaw": -151.09,
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "distance": 1
  }
 ],
 "label": "3",
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "199%",
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_128AE5FF_044B_1227_4185_CED2A68075D6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 31.38,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_138BC776_044B_1E39_418A_753FCE502112",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.5,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13755737_044B_1E26_4175_45F774421D8C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.98,
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_F2450C7C_EFC5_7302_41DE_CB9BFDFDCA10"
},
{
 "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
 "overlays": [
  "this.overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
  "this.overlay_C5085E88_E582_ACE0_41CE_69D7F7561E9D",
  "this.overlay_CA25FC92_E58F_ECE3_41E7_8DC92400F11A",
  "this.overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 31.76,
   "backwardYaw": -165.16,
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.24,
   "backwardYaw": 114.95,
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -30.5,
   "backwardYaw": 107.6,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "distance": 1
  }
 ],
 "label": "1721724495378",
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
 "overlays": [
  "this.overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
  "this.overlay_FE5355AD_EF05_4403_419E_3808E1144B35",
  "this.overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 21.74,
   "backwardYaw": 13.09,
   "panorama": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.09,
   "backwardYaw": -60.7,
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "distance": 1
  }
 ],
 "label": "2",
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "155%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1284C5EF_044B_1226_417C_9605355C8968",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.17,
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_0.jpg",
   "width": 5107,
   "class": "ImageResourceLevel",
   "height": 3405
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36"
},
{
 "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
 "overlays": [
  "this.overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
  "this.overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.09,
   "backwardYaw": 21.74,
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "distance": 1
  }
 ],
 "label": "1",
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_1E40D41A_044B_11EE_4168_42CB7F2D0857",
 "items": [
  {
   "media": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
   "class": "Video360PlayListItem",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1E40D41A_044B_11EE_4168_42CB7F2D0857, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1E40D41A_044B_11EE_4168_42CB7F2D0857, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
 "overlays": [
  "this.overlay_FD0D1E64_EFDD_EF02_41E4_4CF07576B702",
  "this.overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
  "this.overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -105.1,
   "backwardYaw": -157.97,
   "panorama": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.67,
   "backwardYaw": -83.66,
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "distance": 1
  }
 ],
 "label": "4",
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "rotationY": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "hfov": 10.01,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.64,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "yaw": -28.66,
 "id": "popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3"
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA2FCFD8_F9E4_BD10_41E3_CC0B4FF68E8B",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_EA553615_F9DB_4F10_41CA_F672B6502E0F",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_ED9BC2FA_F9DD_4713_41E8_6C025ED15FED",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1322B6F9_044B_1E2B_415D_6E2372F90A58",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 37.21,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "autoplay": true,
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "hfov": 16.17,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "pitch": -25.48,
 "hideEasing": "cubic_out",
 "loop": false,
 "yaw": -11.38,
 "id": "popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9",
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F2C4524_044B_13D9_418D_FC0B34CCF974",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.9,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_ED9BE2FA_F9DD_4713_41E0_A7F050EB40A6",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_E0ACC507_EF04_C40F_41BB_E263F28DD758",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1F19F4F5_044B_123B_4177_9D0D27570EC8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.26,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "lv_0_20240725012539",
 "class": "Video",
 "id": "video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
 "loop": false,
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A.mp4"
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_ED9802FA_F9DD_4713_41D1_2A1F66A12662",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_128015EF_044B_1226_4186_96B3D9D6DEF9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.67,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
 "overlays": [
  "this.overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
  "this.overlay_E96BE402_F9AD_7617_41EC_AD197FB44158"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 106.02,
   "backwardYaw": -123.57,
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "distance": 1
  }
 ],
 "label": "1721714221977",
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "PlayList_0E39DDDB_03BF_326E_4183_DA4C25A4149A",
 "items": [
  {
   "media": "this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0E39DDDB_03BF_326E_4183_DA4C25A4149A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0E39DDDB_03BF_326E_4183_DA4C25A4149A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66VideoPlayer)",
   "player": "this.viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66VideoPlayer"
  }
 ]
},
{
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "id": "effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292",
 "duration": 1000
},
{
 "class": "PlayList",
 "id": "PlayList_0E391DDB_03BF_326E_418C_20A0A3DB0D1E",
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0E391DDB_03BF_326E_418C_20A0A3DB0D1E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0E391DDB_03BF_326E_418C_20A0A3DB0D1E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2DVideoPlayer)",
   "player": "this.viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2DVideoPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
 "overlays": [
  "this.overlay_F7AFC922_E58E_5420_41DD_9A87C35CC41B",
  "this.overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
  "this.overlay_E8966A22_F9AD_5217_419B_D3B00E036954"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 11.44,
   "backwardYaw": 179.66,
   "panorama": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -61.15,
   "backwardYaw": 31.47,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "distance": 1
  }
 ],
 "label": "10",
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.9,
  "pitch": 4.04
 }
},
{
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "id": "effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943",
 "duration": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.5,
  "pitch": 13.01
 }
},
{
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressRight": 0,
 "toolTipFontFamily": "Arial",
 "id": "MainViewer",
 "left": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "width": "100%",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "toolTipFontColor": "#606060",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "height": "100%",
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#000000",
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "top": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.98%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Komoditas Pertanian</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Pada umumnya masyarakat disekitar Taman Nasional Bromo Tengger Semeru (TNBTS) hidup pada sektor pertanian. Kondisi tanah di daerah ini memiliki tanah yang subur akibat aktivitas vulkanik yang terjadi, sehingga masyarakat yang tinggal di kawasan ini memanfaatkannya sebagai lahan pertanian. Uniknya lahan pertanian yang berada dikawasan ini terletak pada lereng-lereng yang cukup ekstrem. Komoditas pertanian yang ditanam di disekitar TNBTS berupa tanaman kentang, bawang prei, kobis, jagung, dan wortel. Komoditas kentang sendiri merupakan salah satu komoditas terbesar yang dihasilkan dari lahan pertanian disekitar TNBTS.</SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Pertanian"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.98%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:23px;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Taman Nasional Bromo Tengger Semeru merupakan gabungan dari beberapa kawasan yang disatukan. Kawasan tersebut sebelumnya merupakan cagar alam, taman wisata, hutan produksi dan hutan lindung. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Sesuai definisinya Taman Nasional adalah kawasan pelestarian alam yang mempunyai ekosistem asli, dikelola dengan sistem zonasi yang dimanfaatkan untuk tujuan penelitian, ilmu pengetahuan, pendidikan, menunjang budidaya, pariwisata, dan rekreasi. Dari 50.276,3 hektare kawasan TNBTS dibagi menjadi tujuh zonasi. Yakni zona inti, rimba, pemanfaatan, tradisional, rehabilitasi, khusus, dan religi.</SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Halo"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.98%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Aktivitas Keagamaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Sebagian besar penduduk asli Tengger menganut agama Hindu. Oleh karena itu, kalian dapat dengan mudah menemukan sejumlah Pura Hindu di sekitar wilayah Taman Nasional Bromo Tengger Semeru (TNBTS).</SPAN><SPAN STYLE=\"font-size:17px;\"> Aktivitas keagamaan umat hindu untuk melakukan persembahyangan di pura-pura yang berada di kawasan TNBTS tak hanya dilakukan oleh penduduk asli Tengger, tetapi juga banyak berasal dari umat hindu yang berada di Bali. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\"><B>(Gambar: Kegiatan Keagamaan di Pura Ulun Danu Ranu Pane)</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Hindu"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.98%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Kawasan TNBTS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Taman Nasional Bromo Tengger Semeru merupakan satu-satunya kawasan konservasi di Indonesia yang memiliki lautan pasir seluas 10 km yang disebut Tengger, tempat dimana empat anak gunung berapi baru berada. Anak gunung berapi tersebut adalah Gunung Batok (2.470 m), Gunung Kursi (2.581 m), Gunung Watangan (2.661 m), dan Gunung Widodaren (2.650 m). Namun, dari deretan gunung tersebut, hanya Gunung Bromo lah satu-satunya yang masih aktif.</SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Deskripsi"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.98%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Daya Tarik Wisata</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Gunung Bromo di Jawa Timur, Kalian mungkin sudah sering mendengar cerita salah satu tempat wisata terkenal yang ada di Indonesia ini, bukan? Ya, satu-satunya gunung berapi aktif di kawasan Taman Nasional Bromo Tengger Semeru ini memang punya pemandangan dan suasana yang menakjubkan, karena hamparan kawah yang luas serta kabut yang menyejukkan. Bersama dengan padang pasir yang lapang, bukit-bukit yang mudah didaki, suhu di puncak yang dingin dan sejuk, tentu membuat banyak wisatawan berbondong-bondong mengunjungi tempat ini.</SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Wisata"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Ranu Pane 2"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 350,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pura Ulun Danu Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Pura Ulun Danu"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pos Jemplang</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Jemplang"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Penanjakan Bromo</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Penanjakan Bromo"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4",
 "left": "37.73%",
 "paddingTop": 20,
 "width": "18.51%",
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "33.61%",
 "paddingRight": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "paddingLeft": 20,
 "paddingBottom": 10,
 "height": "8.394%",
 "click": "this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_1E7FC439_044B_122A_414C_D1EB138B3A7A);; this.mainPlayList.set('selectedIndex', 15)",
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Bromo Via Pasuruan</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Via Psr"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": "13.206%",
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "30.02%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "33.75%",
 "paddingRight": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "paddingLeft": 20,
 "paddingBottom": 10,
 "height": "8.394%",
 "click": "this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_1E7F2439_044B_122A_4184_E11E368E8EDD);; this.mainPlayList.set('selectedIndex', 12)",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Ranu Pane 1"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310",
 "left": "19.67%",
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "33.32%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "click": "this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_1E7F7439_044B_122A_417B_71815AC71A69);; this.mainPlayList.set('selectedIndex', 6)",
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Bromo Via Malang</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Via MLG"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 350,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>View Gn. Batok dan Gn. Widodaren</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Batok Widodaren"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Kawah Bromo"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Savana Bromo</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Savana"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": 250,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "height": 60,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Bukit Teletubies</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Teletubies"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
 "shadowHorizontalLength": 2,
 "paddingTop": 20,
 "width": "18.416%",
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0.98%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "3.65%",
 "paddingRight": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "paddingLeft": 20,
 "paddingBottom": 10,
 "height": "8.394%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Aliran Lahar"
 }
},
{
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "scrollBarWidth": 10,
 "id": "HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837",
 "left": "1.77%",
 "paddingTop": 20,
 "width": 400,
 "shadow": true,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "2.97%",
 "paddingRight": 20,
 "height": 200,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "shadowSpread": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Danau Vulkanik</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Danau Ranu Pani merupakan danau vulkanik dan letaknya berdekatan dengan 2 danau vulkanik lainnya yakni Danau Ranu Regulo dan Danau Ranu Kumbolo</SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "borderRadius": 10,
 "shadowOpacity": 0.19,
 "visible": false,
 "class": "HTMLText",
 "shadowVerticalLength": 2,
 "propagateClick": false,
 "data": {
  "name": "Danau Vulkanik"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
 "paddingTop": 0,
 "width": 53.6,
 "shadow": false,
 "right": "4.12%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "4.98%",
 "height": 49.65,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865_pressed.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865_rollover.png",
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865.png",
 "mode": "push",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "Button34595"
 }
},
{
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingTop": 0,
 "shadow": false,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.55,
 "minWidth": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "UIComponent",
 "propagateClick": false,
 "data": {
  "name": "UIComponent15678"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingTop": 0,
 "shadow": false,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "paddingLeft": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "ZoomImage",
 "scaleMode": "custom",
 "propagateClick": false,
 "data": {
  "name": "ZoomImage15679"
 }
},
{
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "paddingTop": 5,
 "gap": 5,
 "shadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "right": 10,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton15680"
 },
 "fontColor": "#FFFFFF",
 "iconLineWidth": 5,
 "backgroundColorDirection": "vertical",
 "top": 10,
 "paddingRight": 5,
 "iconHeight": 20,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 5,
 "paddingBottom": 5,
 "iconWidth": 20,
 "borderColor": "#000000",
 "minHeight": 0,
 "verticalAlign": "middle",
 "shadowSpread": 1,
 "label": "",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "fontSize": "1.29vmin",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconColor": "#666666",
 "textDecoration": "none",
 "visible": false,
 "class": "CloseButton",
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconColor": "#000000"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.78,
   "hfov": 8.37,
   "pitch": -4.32
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E65FAF_E582_6C20_4183_272201CF3C11",
   "pitch": -4.32,
   "yaw": 99.78,
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FAF97A9E_E586_74E3_41BA_5DF603FDDAFB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5, this.camera_128015EF_044B_1226_4186_96B3D9D6DEF9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.61,
   "hfov": 8.65,
   "pitch": -3.87
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F274EC3E_EFC5_737E_41ED_FC425C98F0F7",
   "pitch": -3.87,
   "yaw": -42.61,
   "hfov": 8.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E, this.camera_128AE5FF_044B_1227_4185_CED2A68075D6); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 48.01,
 "id": "overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F",
 "yaw": -75.67,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.37,
   "hfov": 7.98,
   "pitch": -15.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2848C1E_EFC5_733F_41D4_C46D842E0E4F",
   "pitch": -15.14,
   "yaw": -76.37,
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA39E3D8_EFC5_B502_41DA_5731512384A3",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.18,
   "hfov": 8.25,
   "pitch": -3.75
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2853C1E_EFC5_733F_41C1_FB3101FCEF32",
   "pitch": -3.75,
   "yaw": 116.18,
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA677721_EFC4_9D02_41D9_BC71CCDCD18D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18, this.camera_1E9E9468_044B_122A_4152_B5FABF58C080); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 45,
 "id": "overlay_E89627DC_F9AD_7233_41E9_7E7FD9C9A9B2",
 "yaw": -87.75,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.9,
   "hfov": 8.19,
   "pitch": -14.83
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E5DFA0_E582_6CDF_41D2_CE6FC562F238",
   "pitch": -14.83,
   "yaw": -110.9,
   "hfov": 8.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE, this.camera_1F60E562_044B_125E_4175_E7EE1FD85D40); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.38,
   "hfov": 16.17,
   "pitch": -25.48
  }
 ],
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_4_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48,
   "hfov": 16.17,
   "yaw": -11.38
  }
 ],
 "id": "overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_1E59641A_044B_11EE_417D_317D4E271D4C, 0, this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B); this.MainViewerVideoPlayer.play()",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.38,
   "hfov": 16.17,
   "pitch": -25.48
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_5_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48,
   "hfov": 16.17,
   "yaw": -11.38
  }
 ],
 "id": "overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, true) } else { this.showPopupMedia(this.window_0A42C1B8_03BB_7229_4185_169A54A469B7, this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A, this.PlayList_0E39DDDB_03BF_326E_4183_DA4C25A4149A, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 57.07,
 "id": "overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C",
 "yaw": -161.07,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.74,
   "hfov": 6.84,
   "pitch": -38.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E0DFAF_E582_6C20_41EC_32D9B3C80C50",
   "pitch": -38.55,
   "yaw": 99.74,
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 34.57,
 "id": "overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9",
 "yaw": -120.42,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.62,
   "hfov": 9.98,
   "pitch": -6.46
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CA6FD75B_E587_BC60_41BB_53F06B198748",
   "pitch": -6.46,
   "yaw": -148.62,
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C96C5754_E585_BC60_41E4_C753248836C7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917, this.camera_13576708_044B_1FEA_4187_7A6E7F6E95FC); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.95,
   "hfov": 9.64,
   "pitch": -9.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F277AC3E_EFC5_737E_4191_190C4283E287",
   "pitch": -9.5,
   "yaw": 114.95,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8D75ED5_EFC5_6F02_41DC_A53514F93629",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_135B3718_044B_1FEA_4178_D9158A14C627); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.07,
   "hfov": 8.64,
   "pitch": -15.18
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9ECDFA0_E582_6CDF_41E5_CF3DEA741D64",
   "pitch": -15.18,
   "yaw": 2.07,
   "hfov": 8.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA, this.camera_12F4D68B_044B_1EEE_415F_C9113F842560); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.57,
   "hfov": 7.59,
   "pitch": -14.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EC3FA0_E582_6CDF_41E5_3926C1A4F7E6",
   "pitch": -14.66,
   "yaw": -28.57,
   "hfov": 7.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18, this.camera_12E0269B_044B_1EEF_418A_7FAF75A198C2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "hfov": 11.16,
   "pitch": -12.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2879C1E_EFC5_733F_4195_6F9757DAE280",
   "pitch": -12.16,
   "yaw": -9.03,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC156982_EFC5_9506_4197_B94C6A420EA0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C, this.camera_12CFB67C_044B_1E29_4184_D4028CDA1279); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.74,
   "hfov": 10.59,
   "pitch": -6.98
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E7D2087C_F2C9_A04D_41DC_4922D2BCDAE7",
   "pitch": -6.98,
   "yaw": -151.74,
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FDA0ADC7_F2CA_A0BB_41ED_001968CBA9BC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078, this.camera_12FB468B_044B_1EEE_4129_03E37709BA4C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 57.07,
 "id": "overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
 "yaw": -115.48,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Info Red 06"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.45,
   "hfov": 19.18,
   "pitch": 26.03
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E53640A_044B_11EE_4184_D66C0FCC8407",
   "pitch": 26.03,
   "yaw": -13.45,
   "hfov": 19.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10DBCA6E_03DB_7626_416D_16022585A719",
 "areas": [
  {
   "click": "if(!this.HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4.get('visible')){ this.setComponentVisibility(this.HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_E86FB9FA_F9AD_C513_41D4_D567B98A45D4, false, 0, null, null, false) }; if(!this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B.get('visible')){ this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, false, 0, null, null, false) }; if(!this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310.get('visible')){ this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, false, 0, null, null, false) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressRight": 0,
 "toolTipFontFamily": "Arial",
 "id": "viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66",
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "width": "100%",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "toolTipFontColor": "#606060",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "height": "100%",
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea15677"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.85,
   "hfov": 14.51,
   "pitch": -14.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F283FC1E_EFC5_733F_41EA_4CDDB9D80D6F",
   "pitch": -14.49,
   "yaw": -179.85,
   "hfov": 14.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_12A9364D_044B_1E6B_4184_98107D8B33E0); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.8,
   "hfov": 13.2,
   "pitch": -8.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2839C1E_EFC5_733F_41DF_668FD8EDFA93",
   "pitch": -8.44,
   "yaw": 65.8,
   "hfov": 13.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FC6A7522_EFC4_9D06_41E7_F3C57BC6E42F",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 51.86,
 "id": "overlay_E8975959_F9AD_DE35_41D1_A668059F0D18",
 "yaw": -110.54,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.3,
   "hfov": 9.21,
   "pitch": -24.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E05FAF_E582_6C20_41E5_6345E04C0074",
   "pitch": -24.39,
   "yaw": 70.3,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.59,
   "hfov": 10.56,
   "pitch": 0.75
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0_HS_1_0.png",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.75,
   "hfov": 10.56,
   "yaw": -21.59
  }
 ],
 "id": "overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, this.ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 35.39,
 "id": "overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C",
 "yaw": -132.5,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.27,
   "hfov": 8.1,
   "pitch": -4.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E4CFAF_E582_6C20_41D0_D871E9A16978",
   "pitch": -4.72,
   "yaw": -157.27,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE, this.camera_133CC6E9_044B_1E2A_417E_F7BE3A5CFBB7); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.1,
   "hfov": 9.74,
   "pitch": -26.36
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E42FAF_E582_6C20_41A4_8AA31491291A",
   "pitch": -26.36,
   "yaw": 141.1,
   "hfov": 9.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C62281D8_E58E_5460_41A3_BDADE6DA672B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275, this.camera_1322B6F9_044B_1E2B_415D_6E2372F90A58); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.57,
   "hfov": 11.31,
   "pitch": 6.92
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0_HS_2_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.92,
   "hfov": 11.31,
   "yaw": -169.57
  }
 ],
 "id": "overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, this.ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 52.4,
 "id": "overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53",
 "yaw": 107.18,
 "bleachingDistance": 0.1
},
{
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressRight": 0,
 "toolTipFontFamily": "Arial",
 "id": "viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2D",
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "width": "100%",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "toolTipFontColor": "#606060",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "height": "100%",
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea15676"
 }
},
{
 "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1E7F7439_044B_122A_417B_71815AC71A69",
 "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
},
{
 "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true, -1, this.effect_EA553615_F9DB_4F10_41CA_F672B6502E0F, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false, -1, this.effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA, 'hideEffect', false)",
 "id": "PanoramaPlayListItem_1E7F2439_044B_122A_4184_E11E368E8EDD",
 "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
},
{
 "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
 "id": "PanoramaPlayListItem_1E7FC439_044B_122A_414C_D1EB138B3A7A",
 "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.28,
   "hfov": 11.11,
   "pitch": -15.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2842C1E_EFC5_733F_41DF_49A63608A371",
   "pitch": -15.11,
   "yaw": -115.28,
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBA839C7_EFC7_950E_41BE_B1546ED291A5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6, this.camera_1F0A7504_044B_13DA_417A_294B274452EC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.35,
   "hfov": 9.48,
   "pitch": -3.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F284DC1E_EFC5_733F_41DF_A4B49BC5F2EA",
   "pitch": -3.56,
   "yaw": 82.35,
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB7CA22B_EFC4_9706_41E5_21CC1006EB47",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_1F3BB514_044B_13FA_414B_039D2FA8885C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 56.25,
 "id": "overlay_E8903F24_F9AD_5213_4185_6991E358B22B",
 "yaw": -145.68,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.66,
   "hfov": 15.35,
   "pitch": -17.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F285EC1E_EFC5_733F_41EC_E474033FAA99",
   "pitch": -17.15,
   "yaw": 179.66,
   "hfov": 15.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9B60EA4_EFCC_EF02_41E3_BEF773A58C64",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29, this.camera_1315F6AA_044B_1E2E_418C_E8121FAD44E9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 48.29,
 "id": "overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77",
 "yaw": 108.27,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.48,
   "hfov": 8.88,
   "pitch": -7.21
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E14FAF_E582_6C20_41EA_059D986CB157",
   "pitch": -7.21,
   "yaw": 110.48,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.71,
   "hfov": 10.56,
   "pitch": -1.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_2_0.png",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1,
   "hfov": 10.56,
   "yaw": -39.71
  }
 ],
 "id": "overlay_FA797346_EF0B_DC01_41DD_13322D3794E4",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FBA18295_EF0B_7C02_41EA_9C1523C71541, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, this.ImageResource_F2450C7C_EFC5_7302_41DE_CB9BFDFDCA10, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.24,
   "hfov": 13.17,
   "pitch": -14.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27C1C2E_EFC5_731E_41E2_39F89D4CCA60",
   "pitch": -14.7,
   "yaw": 97.24,
   "hfov": 13.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA, this.camera_13416727_044B_1E26_4189_62E49833354D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.57,
   "hfov": 15.07,
   "pitch": -26.98
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27CBC2E_EFC5_731E_41E8_DBA491F321F6",
   "pitch": -26.98,
   "yaw": -123.57,
   "hfov": 15.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FB95C174_EFDC_B502_41DB_DA359E6DE68C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8, this.camera_13755737_044B_1E26_4175_45F774421D8C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 60.09,
 "id": "overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7",
 "yaw": 120.35,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.16,
   "hfov": 7.52,
   "pitch": -6.64
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E7AFAF_E582_6C20_41CA_E1C23BCE8EA9",
   "pitch": -6.64,
   "yaw": -165.16,
   "hfov": 7.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C114236A_E58D_B423_41D4_A8163FB4E1D8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_1F5DA533_044B_123E_4171_86ACBB94490C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.79,
   "hfov": 9.16,
   "pitch": -6.86
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E71FAF_E582_6C20_41E8_DE3AB81BFE73",
   "pitch": -6.86,
   "yaw": -142.79,
   "hfov": 9.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E, this.camera_1F2C4524_044B_13D9_418D_FC0B34CCF974); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 54.33,
 "id": "overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E",
 "yaw": 173.62,
 "bleachingDistance": 0.1
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.6,
   "hfov": 7.56,
   "pitch": -3.93
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9636F0F_E582_EDE1_41D9_DEDDF2B9477A",
   "pitch": -3.93,
   "yaw": 107.6,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F270DF8F_E582_6CE1_41DA_D851A3BCB8E2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_138BC776_044B_1E39_418A_753FCE502112); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.27,
   "hfov": 9.49,
   "pitch": -2.25
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CAD19E30_E586_AC20_41EA_9923504D73F2",
   "pitch": -2.25,
   "yaw": -64.27,
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CF148686_E582_5CE3_41E1_95CB7D75B77F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004, this.camera_1398C766_044B_1E26_4170_BB5A01D22292); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.47,
   "hfov": 8.91,
   "pitch": -3.61
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2837C1E_EFC5_733F_41E7_C75B8DC86532",
   "pitch": -3.61,
   "yaw": 31.47,
   "hfov": 8.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF9DBB11_EFC5_9502_41DF_069E26A37F14",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29, this.camera_1394C756_044B_1E66_4173_9C2CCFCE492E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 50.21,
 "id": "overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8",
 "yaw": 100.59,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.59,
   "hfov": 6.42,
   "pitch": -18.06
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E57FAF_E582_6C20_41A4_5972B557EA1A",
   "pitch": -18.06,
   "yaw": -161.59,
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C0A8181F_E586_73E1_41E7_D0F33E14CA35",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E, this.camera_1EBB9497_044B_12E6_4158_13AF45C14DC1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.04,
   "hfov": 9.39,
   "pitch": 8.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F279DC3E_EFC5_737E_41D5_229504EAFB39",
   "pitch": 8.77,
   "yaw": -3.04,
   "hfov": 9.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B, this.camera_1EAF34A7_044B_1226_4188_37459FA45A92); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 55.97,
 "id": "overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C",
 "yaw": -134.43,
 "bleachingDistance": 0.1
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.97,
   "hfov": 12.21,
   "pitch": -12.67
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F286CC1E_EFC5_733F_41D4_06C94826991F",
   "pitch": -12.67,
   "yaw": -157.97,
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F797B21D_EF05_BC03_41D4_60E7BDE9CA96",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D, this.camera_1F1714F5_044B_123B_418D_23568C8F1FA4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.83,
   "hfov": 11.61,
   "pitch": -13.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2875C1E_EFC5_733F_41EA_A09DAA2C6EAA",
   "pitch": -13.94,
   "yaw": 84.83,
   "hfov": 11.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FCB6E5C2_EFC4_FD06_41EB_BE9E64922611",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_1F19F4F5_044B_123B_4177_9D0D27570EC8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 39.78,
 "id": "overlay_E8803D8C_F9AE_D613_41B5_07BD3555C76A",
 "yaw": -15.82,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.8,
   "hfov": 17.86,
   "pitch": -4.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "hfov": 17.86,
   "yaw": -37.8
  }
 ],
 "id": "overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, true) } else { this.showPopupMedia(this.window_0A4321B8_03BB_7229_413F_B84524660180, this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945, this.PlayList_0E391DDB_03BF_326E_418C_20A0A3DB0D1E, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.67,
   "hfov": 11.77,
   "pitch": -25.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27F0C2E_EFC5_731E_419F_5A261A150314",
   "pitch": -25.74,
   "yaw": -66.67,
   "hfov": 11.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65, this.camera_1E83F478_044B_1229_418C_80EB2AA4BEDC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.78,
   "hfov": 11.41,
   "pitch": -12.57
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27FBC2E_EFC5_731E_41ED_F6F52452601B",
   "pitch": -12.57,
   "yaw": 120.78,
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F99F9825_EFCF_F302_41E7_A00792C39D40",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_1EB77488_044B_12E9_416A_4460AD30DA7E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 59.81,
 "id": "overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20",
 "yaw": -128.93,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.64,
   "hfov": 7.57,
   "pitch": -2.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E87FA0_E582_6CDF_41C5_EDC247F4D941",
   "pitch": -2.13,
   "yaw": 150.64,
   "hfov": 7.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_12D3765C_044B_1E6A_4166_2CA7E92F0D70); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.7,
   "hfov": 7.16,
   "pitch": -11.35
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EBDFA0_E582_6CDF_41E2_E00175FBA558",
   "pitch": -11.35,
   "yaw": -46.7,
   "hfov": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C290B942_E582_5460_41AD_F546A44C4638",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_12D8866C_044B_1E2A_4182_2FCCFF994513); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.22,
   "hfov": 9.04,
   "pitch": -11.34
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27A7C2E_EFC5_731E_41D5_9C7A03184E57",
   "pitch": -11.34,
   "yaw": -9.22,
   "hfov": 9.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5, this.camera_13A32795_044B_1EFA_4162_B4B76F4F0EA5); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.83,
   "hfov": 10.87,
   "pitch": 0.81
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27A0C2E_EFC5_731E_41D2_65ACD64D183E",
   "pitch": 0.81,
   "yaw": 135.83,
   "hfov": 10.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61, this.camera_13D7E7A5_044B_1EDB_4184_7E5DC0061319); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.94,
   "hfov": 7.36,
   "pitch": -7.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E298C9F7_F2D2_68BE_41B0_CF5C68E5B06D",
   "pitch": -7.15,
   "yaw": 88.94,
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDF7C1B8_F2DE_58B2_41E0_6B309908CE21",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C, this.camera_13B03785_044B_1EDA_4182_76457F390C26); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.11,
   "hfov": 7.33,
   "pitch": -25.54
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CBAE3745_E582_5C61_41C7_0A2FCD81B8DE",
   "pitch": -25.54,
   "yaw": -161.11,
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CFB43D12_E586_6DE0_41E5_D19807675477",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_1284C5EF_044B_1226_417C_9605355C8968); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.66,
   "hfov": 6.8,
   "pitch": -26.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CBAE9745_E582_5C61_41E0_1058A8D1F50E",
   "pitch": -26.14,
   "yaw": -172.66,
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C2A645F4_E586_7C27_41C7_D6014E6D3687",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.66,
   "hfov": 10.01,
   "pitch": 1.64
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_4_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64,
   "hfov": 10.01,
   "yaw": -28.66
  }
 ],
 "id": "overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, this.ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36, null, null, 10000, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.33,
   "hfov": 9.47,
   "pitch": -3.86
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E1BFAF_E582_6C20_41E0_4A2B1BE515FE",
   "pitch": -3.86,
   "yaw": -154.33,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C512E76B_E5FE_DC21_41EC_12E0EB2390DD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917, this.camera_1EF6A4D6_044B_1279_4184_ED1D99A1F36E); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.59,
   "hfov": 8.1,
   "pitch": -4.8
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E13FAF_E582_6C20_41E3_F88424ABDFD9",
   "pitch": -4.8,
   "yaw": -144.59,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C5366303_E5FE_55E1_41CE_85F2A00FD211",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_1EE764E5_044B_125A_4187_C2795EEC880B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 44.17,
 "id": "overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E",
 "yaw": -75.67,
 "bleachingDistance": 0.1
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.99,
   "hfov": 11.59,
   "pitch": -6.3
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_1_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3,
   "hfov": 11.59,
   "yaw": -2.99
  }
 ],
 "id": "overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C, {'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'iconColor':'#000000'}, this.ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84, null, null, 10000, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.66,
   "hfov": 13.51,
   "pitch": -13.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2890C1E_EFC5_733F_41EB_DF5283130C86",
   "pitch": -13.5,
   "yaw": -83.66,
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F81518F8_EF07_4C01_41EA_A848C51BA88E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D, this.camera_12BF261E_044B_11E9_4170_885F6BA3E088); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.7,
   "hfov": 12.7,
   "pitch": -13.62
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F289CC1E_EFC5_733F_41E5_5E0D4963CBC6",
   "pitch": -13.62,
   "yaw": -60.7,
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F537EC21_EF07_C403_41C3_E8A093930DFB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2, this.camera_12B9362D_044B_1E2A_4187_5AA420A92EB1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 34.29,
 "id": "overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6",
 "yaw": -115.48,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.76,
   "hfov": 8.39,
   "pitch": -2.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EAEFA0_E582_6CDF_41DF_EB2CC5BCB2AC",
   "pitch": -2.71,
   "yaw": 31.76,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275, this.camera_131C56BA_044B_1E2E_417F_637577D15AB7); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.5,
   "hfov": 7.84,
   "pitch": -2.76
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EA7FA0_E582_6CDF_41E7_2AA37EFCD8D1",
   "pitch": -2.76,
   "yaw": -30.5,
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C5085E88_E582_ACE0_41CE_69D7F7561E9D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_1337C6D9_044B_1E6A_4186_820FC81E2076); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.24,
   "hfov": 8.3,
   "pitch": -2.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D55F5E36_E58D_AC20_41D0_F8197D94C322",
   "pitch": -2.74,
   "yaw": -166.24,
   "hfov": 8.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA25FC92_E58F_ECE3_41E7_8DC92400F11A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E, this.camera_130166CA_044B_1E69_418D_261B34787893); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 59.54,
 "id": "overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C",
 "yaw": -134.15,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.09,
   "hfov": 13.58,
   "pitch": -3.99
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F96F9EFF_E582_EC21_41C1_F1FA9CF9AC96",
   "pitch": -3.99,
   "yaw": -151.09,
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E, this.camera_136EC747_044B_1E67_418A_9C0E377F50A6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.74,
   "hfov": 12.84,
   "pitch": -10.67
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB549991_EF1B_CC03_41CE_47870C55B7C1",
   "pitch": -10.67,
   "yaw": 21.74,
   "hfov": 12.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FE5355AD_EF05_4403_419E_3808E1144B35",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186, this.camera_137AA747_044B_1E67_4183_1BC5B7555E6F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 58.44,
 "id": "overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382",
 "yaw": 126.67,
 "bleachingDistance": 0.2
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.09,
   "hfov": 12.95,
   "pitch": -7.63
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F28A2C1E_EFC5_733F_4193_B19DE4A5A1F7",
   "pitch": -7.63,
   "yaw": 13.09,
   "hfov": 12.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2, this.camera_12A1263D_044B_1E2A_4172_1328FE8F103B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 26.06,
 "id": "overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E",
 "yaw": 31.68,
 "bleachingDistance": 0.1
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.67,
   "hfov": 11.76,
   "pitch": -10.65
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2866C1E_EFC5_733F_41DE_D61085300959",
   "pitch": -10.65,
   "yaw": 79.67,
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD0D1E64_EFDD_EF02_41E4_4CF07576B702",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E, this.camera_1F7ED553_044B_127F_4185_3A0461B1A5E6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.1,
   "hfov": 12.68,
   "pitch": -6.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2861C1E_EFC5_733F_41E0_37AAF233B362",
   "pitch": -6.1,
   "yaw": -105.1,
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078, this.camera_1F4E2543_044B_125E_4146_5D76167D0AE3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 37.59,
 "id": "overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3",
 "yaw": -117.95,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.02,
   "hfov": 11.66,
   "pitch": -4.06
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F27D4C2E_EFC5_731E_41E3_07AE9F493527",
   "pitch": -4.06,
   "yaw": 106.02,
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65, this.camera_12B5A60E_044B_11E6_416B_0E5F40C7EA90); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 59.54,
 "id": "overlay_E96BE402_F9AD_7617_41EC_AD197FB44158",
 "yaw": -107.79,
 "bleachingDistance": 0.4
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66VideoPlayer",
 "buttonRestart": "this.IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
 "viewerArea": "this.viewer_uid1E58E41A_044B_11EE_417C_B09DEACB9E66"
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2DVideoPlayer",
 "buttonRestart": "this.IconButton_E0CE8AEA_F9AD_C730_41EA_24C7FAD14865",
 "viewerArea": "this.viewer_uid1E5EC40A_044B_11EE_418F_FE771B901B2D"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.15,
   "hfov": 14.32,
   "pitch": -7.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2859C1E_EFC5_733F_41E8_F36CC68F0005",
   "pitch": -7.39,
   "yaw": -61.15,
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F7AFC922_E58E_5420_41DD_9A87C35CC41B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_1EC4A4C6_044B_1266_4185_AC757CC4D56B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.44,
   "hfov": 12.92,
   "pitch": -8.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F15A20DB_E587_D461_41DE_66B806588FDD",
   "pitch": -8.66,
   "yaw": 11.44,
   "hfov": 12.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D, this.camera_1ED464B6_044B_1226_4171_045775A621D8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 50.48,
 "id": "overlay_E8966A22_F9AD_5217_419B_D3B00E036954",
 "yaw": 136.83,
 "bleachingDistance": 0.4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E65FAF_E582_6C20_4183_272201CF3C11"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F274EC3E_EFC5_737E_41ED_FC425C98F0F7"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2848C1E_EFC5_733F_41D4_C46D842E0E4F"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2853C1E_EFC5_733F_41C1_FB3101FCEF32"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_C9E5DFA0_E582_6CDF_41D2_CE6FC562F238"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_C9E0DFAF_E582_6C20_41EC_32D9B3C80C50"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_CA6FD75B_E587_BC60_41BB_53F06B198748"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F277AC3E_EFC5_737E_4191_190C4283E287"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9ECDFA0_E582_6CDF_41E5_CF3DEA741D64"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9EC3FA0_E582_6CDF_41E5_3926C1A4F7E6"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_6_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2879C1E_EFC5_733F_4195_6F9757DAE280"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_E7D2087C_F2C9_A04D_41DC_4922D2BCDAE7"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_10_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_1E53640A_044B_11EE_4184_D66C0FCC8407"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F283FC1E_EFC5_733F_41EA_4CDDB9D80D6F"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2839C1E_EFC5_733F_41DF_668FD8EDFA93"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_C9E05FAF_E582_6C20_41E5_6345E04C0074"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E4CFAF_E582_6C20_41D0_D871E9A16978"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E42FAF_E582_6C20_41A4_8AA31491291A"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2842C1E_EFC5_733F_41DF_49A63608A371"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F284DC1E_EFC5_733F_41DF_A4B49BC5F2EA"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F285EC1E_EFC5_733F_41EC_E474033FAA99"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_C9E14FAF_E582_6C20_41EA_059D986CB157"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27C1C2E_EFC5_731E_41E2_39F89D4CCA60"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27CBC2E_EFC5_731E_41E8_DBA491F321F6"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E7AFAF_E582_6C20_41CA_E1C23BCE8EA9"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E71FAF_E582_6C20_41E8_DE3AB81BFE73"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F9636F0F_E582_EDE1_41D9_DEDDF2B9477A"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_CAD19E30_E586_AC20_41EA_9923504D73F2"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2837C1E_EFC5_733F_41E7_C75B8DC86532"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E57FAF_E582_6C20_41A4_5972B557EA1A"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F279DC3E_EFC5_737E_41D5_229504EAFB39"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F286CC1E_EFC5_733F_41D4_06C94826991F"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2875C1E_EFC5_733F_41EA_A09DAA2C6EAA"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27F0C2E_EFC5_731E_419F_5A261A150314"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27FBC2E_EFC5_731E_41ED_F6F52452601B"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E87FA0_E582_6CDF_41C5_EDC247F4D941"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9EBDFA0_E582_6CDF_41E2_E00175FBA558"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27A7C2E_EFC5_731E_41D5_9C7A03184E57"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27A0C2E_EFC5_731E_41D2_65ACD64D183E"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_4_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_E298C9F7_F2D2_68BE_41B0_CF5C68E5B06D"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_CBAE3745_E582_5C61_41C7_0A2FCD81B8DE"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_CBAE9745_E582_5C61_41E0_1058A8D1F50E"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E1BFAF_E582_6C20_41E0_4A2B1BE515FE"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9E13FAF_E582_6C20_41E3_F88424ABDFD9"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2890C1E_EFC5_733F_41EB_DF5283130C86"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F289CC1E_EFC5_733F_41E5_5E0D4963CBC6"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9EAEFA0_E582_6CDF_41DF_EB2CC5BCB2AC"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C9EA7FA0_E582_6CDF_41E7_2AA37EFCD8D1"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_D55F5E36_E58D_AC20_41D0_F8197D94C322"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F96F9EFF_E582_EC21_41C1_F1FA9CF9AC96"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_FB549991_EF1B_CC03_41CE_47870C55B7C1"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F28A2C1E_EFC5_733F_4193_B19DE4A5A1F7"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2866C1E_EFC5_733F_41DE_D61085300959"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2861C1E_EFC5_733F_41E0_37AAF233B362"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F27D4C2E_EFC5_731E_41E3_07AE9F493527"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F2859C1E_EFC5_733F_41E8_F36CC68F0005"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F15A20DB_E587_D461_41DE_66B806588FDD"
}],
 "layout": "absolute",
 "data": {
  "name": "Player435"
 },
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "paddingRight": 0,
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; }
 },
 "paddingLeft": 0,
 "paddingBottom": 0,
 "downloadEnabled": false,
 "minHeight": 20,
 "height": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Player",
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
