(function(){
    var script = {
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.MainViewer",
  "this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
  "this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F",
  "this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
  "this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
  "this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "paddingBottom": 0,
 "shadow": false,
 "layout": "absolute",
 "start": "this.init()",
 "gap": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingRight": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "height": "100%",
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.95,
  "pitch": 5.86
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.46,
  "pitch": 9.52
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 10.56,
 "popupDistance": 100,
 "id": "popup_FBF6B71E_EF05_4401_41EC_66F81499F846",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "showDuration": 500,
 "rotationY": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 0.75,
 "class": "PopupPanoramaOverlay",
 "yaw": -21.59,
 "hideEasing": "cubic_out"
},
{
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "id": "window_FB3ADB89_F2CE_A952_41DA_939AC56277B5",
 "closeButtonPressedIconColor": "#888888",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titleFontFamily": "Arial",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "headerVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "modal": true,
 "scrollBarWidth": 10,
 "footerBackgroundOpacity": 0,
 "closeButtonPaddingTop": 5,
 "backgroundOpacity": 1,
 "headerBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "backgroundColor": [],
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "closeButtonIconLineWidth": 5,
 "titlePaddingTop": 5,
 "closeButtonBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "footerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyPaddingRight": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingLeft": 0,
 "children": [
  "this.viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5C"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "footerHeight": 5,
 "bodyPaddingTop": 0,
 "shadow": true,
 "shadowColor": "#000000",
 "closeButtonRollOverIconColor": "#666666",
 "bodyPaddingBottom": 0,
 "closeButtonIconColor": "#000000",
 "layout": "vertical",
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titlePaddingBottom": 5,
 "closeButtonIconWidth": 20,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "borderRadius": 5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundOpacity": 0.3,
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "bodyBackgroundOpacity": 0,
 "backgroundColorRatios": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingLeft": 5,
 "class": "Window",
 "closeButtonIconHeight": 20,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "shadowVerticalLength": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "titleFontSize": "1.29vmin",
 "headerPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window369"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2CDACD5_F2D2_68F2_41EB_6B4F0C53B4F0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.4,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
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
 "items": [
  {
   "media": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E29119F7_F2D2_68BE_41BB_F0F60E8C38B4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E29119F7_F2D2_68BE_41BB_F0F60E8C38B4, 0)",
   "class": "Video360PlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"
  }
 ],
 "id": "playList_E29119F7_F2D2_68BE_41BB_F0F60E8C38B4"
},
{
 "vfov": 180,
 "label": "1721724495349",
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
  "this.overlay_C290B942_E582_5460_41AD_F546A44C4638"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 88.94,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "yaw": 150.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -9.03,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "yaw": -46.7,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3BE5B8D_F2D2_6952_41C6_946208E23D70",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.34,
  "hfov": 130,
  "pitch": 0
 }
},
{
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD6C6C68_F2D2_6FD2_41E4_AB1B9DB05CED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.3,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_F2450C7C_EFC5_7302_41DE_CB9BFDFDCA10"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.77,
  "hfov": 122,
  "pitch": -3.49
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FDA2BC1A_F2D2_6F76_41E6_587AFC8EC871",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.91,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721724495378",
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
  "this.overlay_C5085E88_E582_ACE0_41CE_69D7F7561E9D",
  "this.overlay_CA25FC92_E58F_ECE3_41E7_8DC92400F11A"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -165.16,
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "yaw": 31.76,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 114.95,
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "yaw": -166.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 107.6,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "yaw": -30.5,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.94,
  "pitch": 7.46
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2A3DA36_F2D2_6BBE_41D7_C1F2180F1674",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.73,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD39ACA7_F2D2_6F5E_41E0_598407E65DD1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.41,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721714221977",
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -123.57,
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "yaw": 106.02,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.02,
  "pitch": -1.31
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD54AC2A_F2D2_6F56_41C4_189DDEB7085A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.56,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2357B01_F2D2_6952_41DE_C288B53D4F7D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.78,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2845D14_F2D2_6972_41AF_263099419CC7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.33,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3C39B3F_F2D2_69AE_41E3_C2CCFAA4B7E7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.82,
  "hfov": 122,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "lv_0_20240725012539",
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
 "loop": false,
 "thumbnailUrl": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_t.jpg",
 "class": "Video360",
 "hfovMax": 140,
 "pitch": 0,
 "hfovMin": 60,
 "partial": false,
 "hfov": 360,
 "video": [
  {
   "width": 1080,
   "type": "application/x-mpegurl",
   "framerate": 30,
   "class": "Video360Resource",
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.m3u8",
   "height": 1920,
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg"
  },
  {
   "width": 1080,
   "type": "video/mp4",
   "framerate": 30,
   "class": "Video360Resource",
   "bitrate": 4665,
   "url": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B.mp4",
   "height": 1920,
   "posterURL": "media/media_F7BD46A7_E607_043C_41E8_DD4553C8892B_poster.jpg"
  }
 ]
},
{
 "vfov": 180,
 "label": "1721724495361",
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
  "this.overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
  "this.overlay_FDF7C1B8_F2DE_58B2_41E0_6B309908CE21"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 150.64,
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "yaw": 88.94,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -144.59,
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "yaw": -9.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.11,
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "yaw": 135.83,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604",
 "duration": 1000
},
{
 "label": "lv_0_20240725012539",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
 "thumbnailUrl": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04_t.jpg",
 "class": "Video",
 "height": 1920,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04.mp4",
  "height": 1920
 }
},
{
 "vfov": 180,
 "label": "1721724495555",
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C96C5754_E585_BC60_41E4_C753248836C7",
  "this.overlay_F8D75ED5_EFC5_6F02_41DC_A53514F93629"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -42.61,
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "yaw": -148.62,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -166.24,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "yaw": 114.95,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "1721724495462",
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C0A8181F_E586_73E1_41E7_D0F33E14CA35",
  "this.overlay_F85E4006_EFC3_B30E_41DB_D051E806906F"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -157.27,
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "yaw": -161.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -110.9,
   "panorama": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "yaw": -3.04,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD5A7C2A_F2D2_6F56_41EC_4F0005F51916",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.3,
  "hfov": 130,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E2E4B9F7_F2D2_68BE_41D4_15AC084F862C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E2E4B9F7_F2D2_68BE_41D4_15AC084F862C, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_E2E4B9F7_F2D2_68BE_41D4_15AC084F862C"
},
{
 "vfov": 180,
 "label": "1721724495480",
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
  "this.overlay_C62281D8_E58E_5460_41A3_BDADE6DA672B",
  "this.overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
  "this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.59,
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "yaw": -157.27,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -142.79,
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "yaw": 141.1,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "label": "lv_0_20240725012539",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
 "thumbnailUrl": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A_t.jpg",
 "class": "Video",
 "height": 1920,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A.mp4",
  "height": 1920
 }
},
{
 "vfov": 180,
 "label": "1721714221934",
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FA797346_EF0B_DC01_41DD_13322D3794E4",
  "this.popup_FBA18295_EF0B_7C02_41EA_9C1523C71541",
  "this.overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
  "this.overlay_FB95C174_EFDC_B502_41DB_DA359E6DE68C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -66.67,
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "yaw": 97.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 106.02,
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "yaw": -123.57,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.97,
  "pitch": 7.29
 }
},
{
 "vfov": 180,
 "label": "1721724495653",
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "5",
 "id": "panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F797B21D_EF05_BC03_41D4_60E7BDE9CA96",
  "this.overlay_FCB6E5C2_EFC4_FD06_41EB_BE9E64922611"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -105.1,
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "yaw": -157.97,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -151.74,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "yaw": 84.83,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_FE0AC3D3_F2D6_78F6_41E4_59D5190531C9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_FE0AC3D3_F2D6_78F6_41E4_59D5190531C9, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5CVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5CVideoPlayer)"
  }
 ],
 "id": "PlayList_FE0AC3D3_F2D6_78F6_41E4_59D5190531C9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E38E7B7E_F2D2_69AE_41D8_1C0A21519A59",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.03,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FDAB8C0A_F2D2_6F56_41EC_C073871FA254",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.43,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.05,
  "pitch": -1.76
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E24DFD52_F2D2_69F7_41D9_F9CB6EA202B3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.15,
  "pitch": 0
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 16.17,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A.mp4",
  "height": 1920
 },
 "popupDistance": 100,
 "id": "popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9",
 "rotationX": 0,
 "rotationY": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "showDuration": 500,
 "loop": false,
 "autoplay": true,
 "pitch": -25.48,
 "class": "PopupPanoramaOverlay",
 "yaw": -11.38,
 "popupMaxWidth": "95%"
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation"
},
{
 "vfov": 180,
 "label": "4",
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FD0D1E64_EFDD_EF02_41E4_4CF07576B702",
  "this.overlay_FD02435B_EFC3_7506_41DA_BE273792B747"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -157.97,
   "panorama": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "yaw": -105.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -83.66,
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "yaw": 79.67,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "3",
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
 "hfovMax": 150,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
  "this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C",
  "this.overlay_F81518F8_EF07_4C01_41EA_A848C51BA88E",
  "this.overlay_F537EC21_EF07_C403_41C3_E8A093930DFB"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 79.67,
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "yaw": -83.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -151.09,
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "yaw": -60.7,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "12",
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
  "this.overlay_FC6A7522_EFC4_9D06_41E7_F3C57BC6E42F"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -64.27,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "yaw": -179.85,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD73EC58_F2D2_6FF2_41D2_A8F113FBC504",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.97,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "2",
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
  "this.overlay_FE5355AD_EF05_4403_419E_3808E1144B35"
 ],
 "hfovMin": "155%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 13.09,
   "panorama": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "yaw": 21.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -60.7,
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "yaw": -151.09,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "9",
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
 "hfovMax": 134,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F9B60EA4_EFCC_EF02_41E3_BEF773A58C64"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 11.44,
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "yaw": 179.66,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.41,
  "pitch": -1.85
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.07,
  "pitch": 2.72
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.35,
  "pitch": 4.86
 }
},
{
 "vfov": 180,
 "label": "8",
 "id": "panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
 "hfovMax": 142,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FA39E3D8_EFC5_B502_41DA_5731512384A3",
  "this.overlay_FA677721_EFC4_9D02_41D9_BC71CCDCD18D"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -115.28,
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "yaw": 116.18,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD343CA7_F2D2_6F5E_41E9_B161B27CACC3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.21,
  "pitch": 0
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 10.01,
 "popupDistance": 100,
 "id": "popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "showDuration": 500,
 "rotationY": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 1.64,
 "class": "PopupPanoramaOverlay",
 "yaw": -28.66,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_0.jpg",
   "width": 5184,
   "height": 3456
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBF6B71E_EF05_4401_41EC_66F81499F846_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2DE5CC6_F2D2_68DE_41D9_91D159F8F9E1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.05,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD4F8C39_F2D2_6FB2_41D0_62254DEE4337",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.73,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2E91CF5_F2D2_68B2_41E2_C20658B97DE0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.76,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E208FAD2_F2D2_68F6_41A0_D3F541F1F003",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.53,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E27BEA84_F2D2_6B52_41C7_23711117A788",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.93,
  "pitch": 0
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2A1CD33_F2D2_69B6_41E6_7D44B3CFABDA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.26,
  "hfov": 122,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FDB0BBEB_F2D2_68D6_41EA_677E0ACEC87F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.67,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 11.59,
 "popupDistance": 100,
 "id": "popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "showDuration": 500,
 "rotationY": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -6.3,
 "class": "PopupPanoramaOverlay",
 "yaw": -2.99,
 "hideEasing": "cubic_out"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_E0ACC507_EF04_C40F_41BB_E263F28DD758",
 "duration": 1000
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_0.jpg",
   "width": 5107,
   "height": 3405
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36"
},
{
 "vfov": 180,
 "label": "6",
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
  "this.overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
  "this.overlay_FC156982_EFC5_9506_4197_B94C6A420EA0",
  "this.overlay_FDA0ADC7_F2CA_A0BB_41ED_001968CBA9BC"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -46.7,
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "yaw": -9.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 120.78,
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "yaw": 2.07,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 84.83,
   "panorama": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "yaw": -151.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 82.35,
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "yaw": -28.57,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "7",
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FBA839C7_EFC7_950E_41BE_B1546ED291A5",
  "this.overlay_FB7CA22B_EFC4_9706_41E5_21CC1006EB47"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 116.18,
   "panorama": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "yaw": -115.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -28.57,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "yaw": 82.35,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E26A7AA3_F2D2_6B56_41CB_6E922B9714EF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.72,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721724495667",
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E250DD43_F2D2_69D6_41E9_E3F8A90038C8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.85,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721724495579",
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FAF97A9E_E586_74E3_41BA_5DF603FDDAFB",
  "this.overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -154.33,
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "yaw": 99.78,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -148.62,
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "yaw": -42.61,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E29AB9F7_F2D2_68BE_41C5_4BD21E7BD808, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E29AB9F7_F2D2_68BE_41C5_4BD21E7BD808, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_E29AB9F7_F2D2_68BE_41C5_4BD21E7BD808"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD78DC49_F2D2_6FD2_41EA_828BE1984005",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.06,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E206FAF1_F2D2_68B2_41CE_DDF7A8D554E1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.22,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.21,
  "hfov": 130,
  "pitch": 11.08
 }
},
{
 "vfov": 180,
 "label": "1721724495716",
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_CFB43D12_E586_6DE0_41E5_D19807675477",
  "this.overlay_C2A645F4_E586_7C27_41C7_D6014E6D3687",
  "this.overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
  "this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 135.83,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "yaw": -161.11,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FDB6CBFB_F2D2_68B6_41A7_A8F7A3C8D6DD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.38,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD673C78_F2D2_6FB2_41E5_0198F8A720DB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.22,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721724495600",
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C512E76B_E5FE_DC21_41EC_12E0EB2390DD",
  "this.overlay_C5366303_E5FE_55E1_41CE_85F2A00FD211"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 99.78,
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "yaw": -154.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -9.22,
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "yaw": -144.59,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E26AAD72_F2D2_69B6_41D6_D733D874C667",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.36,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E219AD81_F2D2_6952_419E_61256B6A8268",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.41,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "1721724495502",
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C114236A_E58D_B423_41D4_A8163FB4E1D8",
  "this.overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 141.1,
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "yaw": -142.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.76,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "yaw": -165.16,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "1",
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 21.74,
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "yaw": 13.09,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.57,
  "hfov": 122,
  "pitch": 20.69
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84"
},
{
 "label": "20240720_181204_534",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
 "thumbnailUrl": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945_t.jpg",
 "class": "Video",
 "height": 1920,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4",
  "height": 1920
 }
},
{
 "vfov": 180,
 "label": "1721724495682",
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
  "this.overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
  "this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "1721724495446",
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
  "this.overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
  "this.overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
  "this.popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -3.04,
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "yaw": -110.9,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.31,
  "pitch": 0.92
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2251B20_F2D2_6952_41D4_CCE2537022FA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.9,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 5.31
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD13AC87_F2D2_6F5E_41DD_A452AD4A5393",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.17,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "11",
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F270DF8F_E582_6CE1_41DA_D851A3BCB8E2",
  "this.overlay_CF148686_E582_5CE3_41E1_95CB7D75B77F",
  "this.overlay_FF9DBB11_EFC5_9502_41DF_069E26A37F14"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -61.15,
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "yaw": 31.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.85,
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "yaw": -64.27,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -30.5,
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "yaw": 107.6,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "ImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_0.jpg",
   "width": 3816,
   "height": 2544
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_1.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_3.jpg",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD22ECB6_F2D2_68BE_41D5_A8A7E42DC966",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.84,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E27C2D62_F2D2_69D6_41E0_DE078F8F0ED2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.5,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2FB7CE5_F2D2_68D2_41E9_00DB6AEE031D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.39,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3AC7B9D_F2D2_6972_41DC_602CD9B1B29C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.96,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3F1DB4F_F2D2_69EE_4189_A8F0DFF645DE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.43,
  "pitch": 0
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FD0DFC97_F2D2_6F7E_41EE_02867606D251",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.65,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.96,
  "pitch": 9.53
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.65,
  "pitch": 1.53
 }
},
{
 "vfov": 180,
 "label": "10",
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_F7AFC922_E58E_5420_41DD_9A87C35CC41B",
  "this.overlay_F193744E_E58D_BC63_41E2_697DD07504BE"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 179.66,
   "panorama": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "yaw": 11.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.47,
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "yaw": -61.15,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.9,
  "pitch": 4.04
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3903B6E_F2D2_69AE_41A5_37B187400755",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.24,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
   "start": "this.viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_FE0B93D3_F2D6_78F6_41CE_F564A8487063, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_FE0B93D3_F2D6_78F6_41CE_F564A8487063, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920VideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920VideoPlayer)"
  }
 ],
 "id": "PlayList_FE0B93D3_F2D6_78F6_41CE_F564A8487063"
},
{
 "vfov": 180,
 "label": "1721714222040",
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_CB20B314_E583_F5E7_41E6_BF3CF2EE1458",
  "this.overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
  "this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
  "this.overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
  "this.overlay_F99F9825_EFCF_F302_41E7_A00792C39D40"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 97.24,
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "yaw": -66.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 2.07,
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "yaw": 120.78,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E24DBA64_F2D2_6BD2_41B8_9881F878C66E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.76,
  "pitch": 0
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 11.31,
 "popupDistance": 100,
 "id": "popup_FB933291_EF0F_BC03_41DB_FC2C048DC812",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "showDuration": 500,
 "rotationY": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_FB933291_EF0F_BC03_41DB_FC2C048DC812_0_2.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 6.92,
 "class": "PopupPanoramaOverlay",
 "yaw": -169.57,
 "hideEasing": "cubic_out"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FDBC9BDB_F2D2_68F6_41D0_4519AAF50B0E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.17,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.16,
  "pitch": 15.44
 }
},
{
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "id": "window_FB39EB89_F2CE_A952_41E8_CC11F31CCD71",
 "closeButtonPressedIconColor": "#888888",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "titleFontFamily": "Arial",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "headerVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "modal": true,
 "scrollBarWidth": 10,
 "footerBackgroundOpacity": 0,
 "closeButtonPaddingTop": 5,
 "backgroundOpacity": 1,
 "headerBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconLineWidth": 5,
 "backgroundColor": [],
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "closeButtonIconLineWidth": 5,
 "titlePaddingTop": 5,
 "closeButtonBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "footerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyPaddingRight": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingLeft": 0,
 "children": [
  "this.viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBorderSize": 0,
 "footerHeight": 5,
 "bodyPaddingTop": 0,
 "shadow": true,
 "shadowColor": "#000000",
 "closeButtonRollOverIconColor": "#666666",
 "bodyPaddingBottom": 0,
 "closeButtonIconColor": "#000000",
 "layout": "vertical",
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titlePaddingBottom": 5,
 "closeButtonIconWidth": 20,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "borderRadius": 5,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundOpacity": 0.3,
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "bodyBackgroundOpacity": 0,
 "backgroundColorRatios": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingLeft": 5,
 "class": "Window",
 "closeButtonIconHeight": 20,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "shadowVerticalLength": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "titleFontSize": "1.29vmin",
 "headerPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window370"
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E25F3A55_F2D2_6BF2_41CE_DF60BDED1095",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.1,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2B2ED24_F2D2_6952_41CD_6076165C7A37",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.91,
  "hfov": 122,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.5,
  "pitch": 13.01
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2089D91_F2D2_6972_41DF_7233196BA56C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.89,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.18,
  "pitch": 12.61
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2198AB3_F2D2_68B6_41E7_4FA91AD3E527",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.34,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "end": "this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false, -1, this.effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false); this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true, -1, this.effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true)",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "media": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera"
  },
  {
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  {
   "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
  },
  {
   "media": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera"
  },
  {
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  {
   "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true)",
   "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
  },
  {
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  {
   "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
  },
  {
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  },
  {
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true)",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "media": "this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A",
   "end": "this.trigger('tourEnded')",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)"
  }
 ],
 "id": "mainPlayList"
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 10.56,
 "popupDistance": 100,
 "id": "popup_FBA18295_EF0B_7C02_41EA_9C1523C71541",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "showDuration": 500,
 "rotationY": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_FBA18295_EF0B_7C02_41EA_9C1523C71541_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -1.1,
 "class": "PopupPanoramaOverlay",
 "yaw": -39.71,
 "hideEasing": "cubic_out"
},
{
 "automaticRotationSpeed": 10,
 "manualRotationSpeed": 1800,
 "class": "RotationalCamera",
 "automaticZoomSpeed": 10,
 "id": "media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "yaw": 0,
  "hfov": 120,
  "pitch": 0
 },
 "manualZoomSpeed": 1
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3E07B5E_F2D2_69EE_41D5_2D1B104E2A58",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.9,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2968D14_F2D2_6972_41E8_F9AB6619DEC1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.98,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E2981D04_F2D2_6952_41EB_FA77DE4FC8CD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.33,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E3D32B30_F2D2_69B2_41D0_3A105C64C214",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.26,
  "pitch": 0
 }
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 17.86,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_CBA0F39C_E582_74E0_41EB_2F19C312D945.mp4",
  "height": 1920
 },
 "popupDistance": 100,
 "id": "popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
 "rotationX": 0,
 "rotationY": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 2000,
 "showDuration": 2000,
 "loop": false,
 "autoplay": true,
 "pitch": -4.55,
 "class": "PopupPanoramaOverlay",
 "yaw": -37.8,
 "popupMaxWidth": "95%"
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "id": "MainViewer",
 "left": 0,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontFamily": "Arial",
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Komoditas Pertanian</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Daerah disekitar Taman Nasional Bromo Tengger Semeru (TNBTS) memiliki tanah yang subur akibat aktivitas vulkanik yang terjadi, sehingga masyarakat yang tinggal di kawasan ini memanfaatkannya sebagai lahan pertanian. Uniknya lahan pertanian yang berada dikawasan ini terletak pada lereng lereng yang cukup ekstrem.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Pada umumnya masyarakat disekitar TNBTS hidup pada</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">sektor pertanian, terutama tanaman kentang, bawang prei, kobis, jagung, dan wortel. Komoditas kentang sendiri merupakan salah satu komoditas terbesar yang dihasilkan dari lahan pertanian disekitar TNBTS.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Pertanian"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "shadowVerticalLength": 2,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:14px;\">Taman Nasional Bromo Tengger Semeru merupakan gabungan dari beberapa kawasan yang disatukan. Kawasan tersebut sebelumnya merupakan cagar alam, taman wisata, hutan produksi dan hutan lindung. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:14px;\">Sesuai definisinya Taman Nasional adalah kawasan pelestarian alam yang mempunyai ekosistem asli, dikelola dengan sistem zonasi yang dimanfaatkan untuk tujuan penelitian, ilmu pengetahuan, pendidikan, menunjang budidaya, pariwisata, dan rekreasi. Dari 50.276,3 hektare kawasan TNBTS dibagi menjadi tujuh zonasi. Yakni zona inti, rimba, pemanfaatan, tradisional, rehabilitasi, khusus, dan religi.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Halo"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "shadowVerticalLength": 2,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Aktivitas Keagamaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Sebagian besar penduduk asli Tengger menganut agama Hindu. Oleh karena itu, kalian dapat dengan mudah menemukan sejumlah Pura Hindu di sekitar wilayah Taman Nasional Bromo Tengger Semeru (TNBTS).</SPAN><SPAN STYLE=\"font-size:15px;\"> Aktivitas keagamaan umat hindu untuk melakukan persembahyangan di pura-pura yang berada di kawasan TNBTS tak hanya dilakukan oleh penduduk asli Tengger, tetapi juga banyak berasal dari umat hindu yang berada di Bali</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Hindu"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "shadowVerticalLength": 2,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Kawasan TNBTS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Taman Nasional Bromo Tengger Semeru merupakan satu-satunya kawasan konservasi di Indonesia yang memiliki lautan pasir seluas 10 km yang disebut Tengger, tempat dimana empat anak gunung berapi baru berada. Anak gunung berapi tersebut adalah Gunung Batok (2.470 m), Gunung Kursi (2.581 m), Gunung Watangan (2.661 m), dan Gunung Widodaren (2.650 m). Namun, dari deretan gunung tersebut, hanya Gunung Bromo lah satu-satunya yang masih aktif.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Deskripsi"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "shadowVerticalLength": 2,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Daya Tarik Wisata</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Gunung Bromo di Jawa Timur, Kalian mungkin sudah sering mendengar cerita salah satu tempat wisata terkenal yang ada di Indonesia ini, bukan? Ya, satu-satunya gunung berapi aktif di kawasan Taman Nasional Bromo Tengger Semeru ini memang punya pemandangan dan suasana yang menakjubkan, karena hamparan kawah yang luas serta kabut yang menyejukkan. Bersama dengan padang pasir yang lapang, bukit-bukit yang mudah didaki, suhu di puncak yang dingin dan sejuk, tentu membuat banyak wisatawan berbondong-bondong mengunjungi tempat ini.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Wisata"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "shadowVerticalLength": 2,
 "paddingTop": 20
},
{
 "visible": false,
 "backgroundColorDirection": "vertical",
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "shadow": false,
 "right": 0,
 "backgroundOpacity": 0.55,
 "top": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "paddingLeft": 0,
 "bottom": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "UIComponent",
 "minWidth": 0,
 "data": {
  "name": "UIComponent4513"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "paddingTop": 0
},
{
 "visible": false,
 "backgroundColorDirection": "vertical",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "shadow": false,
 "right": 0,
 "backgroundOpacity": 1,
 "top": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "borderRadius": 0,
 "paddingLeft": 0,
 "bottom": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "class": "ZoomImage",
 "minWidth": 0,
 "data": {
  "name": "ZoomImage4514"
 },
 "scaleMode": "custom",
 "paddingTop": 0
},
{
 "textDecoration": "none",
 "visible": false,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColorDirection": "vertical",
 "id": "closeButtonPopupPanorama",
 "paddingBottom": 5,
 "shadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "gap": 5,
 "pressedIconColor": "#888888",
 "shadowSpread": 1,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "iconWidth": 20,
 "borderColor": "#000000",
 "backgroundOpacity": 0.3,
 "top": 10,
 "paddingRight": 5,
 "borderSize": 0,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "paddingLeft": 5,
 "fontSize": "1.29vmin",
 "iconHeight": 20,
 "mode": "push",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "label": "",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "iconColor": "#000000",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "CloseButton4515"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "iconLineWidth": 5,
 "paddingTop": 5
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "id": "viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5C",
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontFamily": "Arial",
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "data": {
  "name": "ViewerArea4511"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -2.13,
   "hfov": 7.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E87FA0_E582_6CDF_41C5_EDC247F4D941",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 150.64,
   "pitch": -2.13,
   "hfov": 7.57,
   "distance": 50
  }
 ],
 "id": "overlay_C0D2805F_E582_B460_41E7_E88C06381D2C",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_FD78DC49_F2D2_6FD2_41EA_828BE1984005); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.35,
   "hfov": 7.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EBDFA0_E582_6CDF_41E2_E00175FBA558",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.7,
   "pitch": -11.35,
   "hfov": 7.16,
   "distance": 50
  }
 ],
 "id": "overlay_C290B942_E582_5460_41AD_F546A44C4638",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_FD73EC58_F2D2_6FF2_41D2_A8F113FBC504); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -2.71,
   "hfov": 8.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EAEFA0_E582_6CDF_41DF_EB2CC5BCB2AC",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.76,
   "pitch": -2.71,
   "hfov": 8.39,
   "distance": 50
  }
 ],
 "id": "overlay_C600C8BE_E582_5423_41CF_AB02E56FB292",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275, this.camera_FD22ECB6_F2D2_68BE_41D5_A8A7E42DC966); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -2.76,
   "hfov": 7.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EA7FA0_E582_6CDF_41E7_2AA37EFCD8D1",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.5,
   "pitch": -2.76,
   "hfov": 7.84,
   "distance": 50
  }
 ],
 "id": "overlay_C5085E88_E582_ACE0_41CE_69D7F7561E9D",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_E2CDACD5_F2D2_68F2_41EB_6B4F0C53B4F0); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -2.74,
   "hfov": 8.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D55F5E36_E58D_AC20_41D0_F8197D94C322",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.24,
   "pitch": -2.74,
   "hfov": 8.3,
   "distance": 100
  }
 ],
 "id": "overlay_CA25FC92_E58F_ECE3_41E7_8DC92400F11A",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E, this.camera_E2DE5CC6_F2D2_68DE_41D9_91D159F8F9E1); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.06,
   "hfov": 11.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27D4C2E_EFC5_731E_41E3_07AE9F493527",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 106.02,
   "pitch": -4.06,
   "hfov": 11.66,
   "distance": 100
  }
 ],
 "id": "overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65, this.camera_FDAB8C0A_F2D2_6F56_41EC_C073871FA254); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.34,
   "hfov": 9.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27A7C2E_EFC5_731E_41D5_9C7A03184E57",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.22,
   "pitch": -11.34,
   "hfov": 9.04,
   "distance": 100
  }
 ],
 "id": "overlay_F6CC9F9F_EFCC_AD3E_41E4_D8DE3C874F65",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5, this.camera_E219AD81_F2D2_6952_419E_61256B6A8268); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 0.81,
   "hfov": 10.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27A0C2E_EFC5_731E_41D2_65ACD64D183E",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 135.83,
   "pitch": 0.81,
   "hfov": 10.87,
   "distance": 100
  }
 ],
 "id": "overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61, this.camera_E2089D91_F2D2_6972_41DF_7233196BA56C); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_4_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -7.15,
   "hfov": 7.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E298C9F7_F2D2_68BE_41B0_CF5C68E5B06D",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.94,
   "pitch": -7.15,
   "hfov": 7.36,
   "distance": 100
  }
 ],
 "id": "overlay_FDF7C1B8_F2DE_58B2_41E0_6B309908CE21",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C, this.camera_E26AAD72_F2D2_69B6_41D6_D733D874C667); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -6.46,
   "hfov": 9.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CA6FD75B_E587_BC60_41BB_53F06B198748",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.62,
   "pitch": -6.46,
   "hfov": 9.98,
   "distance": 50
  }
 ],
 "id": "overlay_C96C5754_E585_BC60_41E4_C753248836C7",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917, this.camera_E2FB7CE5_F2D2_68D2_41E9_00DB6AEE031D); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -9.5,
   "hfov": 9.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F277AC3E_EFC5_737E_4191_190C4283E287",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.95,
   "pitch": -9.5,
   "hfov": 9.64,
   "distance": 100
  }
 ],
 "id": "overlay_F8D75ED5_EFC5_6F02_41DC_A53514F93629",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_E2E91CF5_F2D2_68B2_41E2_C20658B97DE0); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.06,
   "hfov": 6.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E57FAF_E582_6C20_41A4_5972B557EA1A",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.59,
   "pitch": -18.06,
   "hfov": 6.42,
   "distance": 50
  }
 ],
 "id": "overlay_C0A8181F_E586_73E1_41E7_D0F33E14CA35",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E, this.camera_E2A3DA36_F2D2_6BBE_41D7_C1F2180F1674); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 8.77,
   "hfov": 9.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F279DC3E_EFC5_737E_41D5_229504EAFB39",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.04,
   "pitch": 8.77,
   "hfov": 9.39,
   "distance": 100
  }
 ],
 "id": "overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B, this.camera_E25F3A55_F2D2_6BF2_41CE_DF60BDED1095); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.72,
   "hfov": 8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E4CFAF_E582_6C20_41D0_D871E9A16978",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.27,
   "pitch": -4.72,
   "hfov": 8.1,
   "distance": 50
  }
 ],
 "id": "overlay_C6F0D026_E58E_D420_41E7_039A045EEB2A",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE, this.camera_FD39ACA7_F2D2_6F5E_41E0_598407E65DD1); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.36,
   "hfov": 9.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E42FAF_E582_6C20_41A4_8AA31491291A",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 141.1,
   "pitch": -26.36,
   "hfov": 9.74,
   "distance": 50
  }
 ],
 "id": "overlay_C62281D8_E58E_5460_41A3_BDADE6DA672B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275, this.camera_FD343CA7_F2D2_6F5E_41E9_B161B27CACC3); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.92,
   "hfov": 11.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -169.57,
   "hfov": 11.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_0_HS_2_0.png",
      "width": 66,
      "height": 67
     }
    ]
   },
   "pitch": 6.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_F23F8C8C_EFC5_7302_41DC_22E23396ECA5, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -1.1,
   "hfov": 10.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -39.71,
   "hfov": 10.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_2_0.png",
      "width": 61,
      "height": 72
     }
    ]
   },
   "pitch": -1.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FA797346_EF0B_DC01_41DD_13322D3794E4",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_FBA18295_EF0B_7C02_41EA_9C1523C71541, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_F2450C7C_EFC5_7302_41DE_CB9BFDFDCA10, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.7,
   "hfov": 13.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27C1C2E_EFC5_731E_41E2_39F89D4CCA60",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.24,
   "pitch": -14.7,
   "hfov": 13.17,
   "distance": 100
  }
 ],
 "id": "overlay_FCE223DD_EFDD_9502_41C6_1C38978E969F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA, this.camera_E2981D04_F2D2_6952_41EB_FA77DE4FC8CD); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.98,
   "hfov": 15.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27CBC2E_EFC5_731E_41E8_DBA491F321F6",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -123.57,
   "pitch": -26.98,
   "hfov": 15.07,
   "distance": 50
  }
 ],
 "id": "overlay_FB95C174_EFDC_B502_41DB_DA359E6DE68C",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8, this.camera_E2968D14_F2D2_6972_41E8_F9AB6619DEC1); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -7.21,
   "hfov": 8.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E14FAF_E582_6C20_41EA_059D986CB157",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.48,
   "pitch": -7.21,
   "hfov": 8.88,
   "distance": 100
  }
 ],
 "id": "overlay_FA102EA9_E5FE_6C20_41E5_0BA679D7ECD2",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.67,
   "hfov": 12.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F286CC1E_EFC5_733F_41D4_06C94826991F",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.97,
   "pitch": -12.67,
   "hfov": 12.21,
   "distance": 50
  }
 ],
 "id": "overlay_F797B21D_EF05_BC03_41D4_60E7BDE9CA96",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D, this.camera_E2251B20_F2D2_6952_41D4_CCE2537022FA); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.94,
   "hfov": 11.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2875C1E_EFC5_733F_41EA_A09DAA2C6EAA",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.83,
   "pitch": -13.94,
   "hfov": 11.61,
   "distance": 100
  }
 ],
 "id": "overlay_FCB6E5C2_EFC4_FD06_41EB_BE9E64922611",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_E3D32B30_F2D2_69B2_41D0_3A105C64C214); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "VideoPlayer",
 "id": "viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5CVideoPlayer",
 "viewerArea": "this.viewer_uidE2E469F7_F2D2_68BE_41DD_52C6F5628E5C",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.65,
   "hfov": 11.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2866C1E_EFC5_733F_41DE_D61085300959",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.67,
   "pitch": -10.65,
   "hfov": 11.76,
   "distance": 100
  }
 ],
 "id": "overlay_FD0D1E64_EFDD_EF02_41E4_4CF07576B702",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E, this.camera_E3BE5B8D_F2D2_6952_41C6_946208E23D70); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -6.1,
   "hfov": 12.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2861C1E_EFC5_733F_41E0_37AAF233B362",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.1,
   "pitch": -6.1,
   "hfov": 12.68,
   "distance": 50
  }
 ],
 "id": "overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078, this.camera_E38E7B7E_F2D2_69AE_41D8_1C0A21519A59); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -6.3,
   "hfov": 11.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.99,
   "hfov": 11.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_1_0.png",
      "width": 67,
      "height": 72
     }
    ]
   },
   "pitch": -6.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FFF4F71B_EF1D_4407_41E3_B4889AEC8B48",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_FBB5BEC9_EF0B_C402_41C0_DD6F050F885C, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_F9F5E154_EF0D_DC31_41DE_850F67A79A84, null, null, 10000, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.5,
   "hfov": 13.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2890C1E_EFC5_733F_41EB_DF5283130C86",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.66,
   "pitch": -13.5,
   "hfov": 13.51,
   "distance": 50
  }
 ],
 "id": "overlay_F81518F8_EF07_4C01_41EA_A848C51BA88E",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D, this.camera_E2845D14_F2D2_6972_41AF_263099419CC7); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -13.62,
   "hfov": 12.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F289CC1E_EFC5_733F_41E5_5E0D4963CBC6",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -60.7,
   "pitch": -13.62,
   "hfov": 12.7,
   "distance": 50
  }
 ],
 "id": "overlay_F537EC21_EF07_C403_41C3_E8A093930DFB",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2, this.camera_E2B2ED24_F2D2_6952_41CD_6076165C7A37); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.49,
   "hfov": 14.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F283FC1E_EFC5_733F_41EA_4CDDB9D80D6F",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.85,
   "pitch": -14.49,
   "hfov": 14.51,
   "distance": 50
  }
 ],
 "id": "overlay_FD186100_EFC7_9502_41C3_8F0BA3EE2998",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_FD4F8C39_F2D2_6FB2_41D0_62254DEE4337); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.44,
   "hfov": 13.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2839C1E_EFC5_733F_41DF_668FD8EDFA93",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 65.8,
   "pitch": -8.44,
   "hfov": 13.2,
   "distance": 50
  }
 ],
 "id": "overlay_FC6A7522_EFC4_9D06_41E7_F3C57BC6E42F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.99,
   "hfov": 13.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F96F9EFF_E582_EC21_41C1_F1FA9CF9AC96",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -151.09,
   "pitch": -3.99,
   "hfov": 13.58,
   "distance": 50
  }
 ],
 "id": "overlay_EBF7313E_E58F_B423_41E7_0934A1D1C5A3",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E, this.camera_FD5A7C2A_F2D2_6F56_41EC_4F0005F51916); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.67,
   "hfov": 12.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FB549991_EF1B_CC03_41CE_47870C55B7C1",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.74,
   "pitch": -10.67,
   "hfov": 12.84,
   "distance": 50
  }
 ],
 "id": "overlay_FE5355AD_EF05_4403_419E_3808E1144B35",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186, this.camera_FDA2BC1A_F2D2_6F76_41E6_587AFC8EC871); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -17.15,
   "hfov": 15.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F285EC1E_EFC5_733F_41EC_E474033FAA99",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.66,
   "pitch": -17.15,
   "hfov": 15.35,
   "distance": 100
  }
 ],
 "id": "overlay_F9B60EA4_EFCC_EF02_41E3_BEF773A58C64",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29, this.camera_FD54AC2A_F2D2_6F56_41C4_189DDEB7085A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.14,
   "hfov": 7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2848C1E_EFC5_733F_41D4_C46D842E0E4F",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76.37,
   "pitch": -15.14,
   "hfov": 7.98,
   "distance": 100
  }
 ],
 "id": "overlay_FA39E3D8_EFC5_B502_41DA_5731512384A3",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.75,
   "hfov": 8.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2853C1E_EFC5_733F_41C1_FB3101FCEF32",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.18,
   "pitch": -3.75,
   "hfov": 8.25,
   "distance": 100
  }
 ],
 "id": "overlay_FA677721_EFC4_9D02_41D9_BC71CCDCD18D",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18, this.camera_E26A7AA3_F2D2_6B56_41CB_6E922B9714EF); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.18,
   "hfov": 8.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9ECDFA0_E582_6CDF_41E5_CF3DEA741D64",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.07,
   "pitch": -15.18,
   "hfov": 8.64,
   "distance": 50
  }
 ],
 "id": "overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA, this.camera_FD673C78_F2D2_6FB2_41E5_0198F8A720DB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_5_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.66,
   "hfov": 7.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9EC3FA0_E582_6CDF_41E5_3926C1A4F7E6",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.57,
   "pitch": -14.66,
   "hfov": 7.59,
   "distance": 50
  }
 ],
 "id": "overlay_FEE02546_E582_5C60_41BD_83E0187BD81B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18, this.camera_FD0DFC97_F2D2_6F7E_41EE_02867606D251); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_6_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.16,
   "hfov": 11.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2879C1E_EFC5_733F_4195_6F9757DAE280",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.03,
   "pitch": -12.16,
   "hfov": 11.16,
   "distance": 100
  }
 ],
 "id": "overlay_FC156982_EFC5_9506_4197_B94C6A420EA0",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C, this.camera_FD6C6C68_F2D2_6FD2_41E4_AB1B9DB05CED); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_7_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -6.98,
   "hfov": 10.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E7D2087C_F2C9_A04D_41DC_4922D2BCDAE7",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -151.74,
   "pitch": -6.98,
   "hfov": 10.59,
   "distance": 50
  }
 ],
 "id": "overlay_FDA0ADC7_F2CA_A0BB_41ED_001968CBA9BC",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078, this.camera_FD13AC87_F2D2_6F5E_41DD_A452AD4A5393); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.11,
   "hfov": 11.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2842C1E_EFC5_733F_41DF_49A63608A371",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -115.28,
   "pitch": -15.11,
   "hfov": 11.11,
   "distance": 100
  }
 ],
 "id": "overlay_FBA839C7_EFC7_950E_41BE_B1546ED291A5",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6, this.camera_E3C39B3F_F2D2_69AE_41E3_C2CCFAA4B7E7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.56,
   "hfov": 9.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F284DC1E_EFC5_733F_41DF_A4B49BC5F2EA",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.35,
   "pitch": -3.56,
   "hfov": 9.48,
   "distance": 100
  }
 ],
 "id": "overlay_FB7CA22B_EFC4_9706_41E5_21CC1006EB47",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_E3F1DB4F_F2D2_69EE_4189_A8F0DFF645DE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -38.55,
   "hfov": 6.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E0DFAF_E582_6C20_41EC_32D9B3C80C50",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.74,
   "pitch": -38.55,
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "id": "overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.32,
   "hfov": 8.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E65FAF_E582_6C20_4183_272201CF3C11",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.78,
   "pitch": -4.32,
   "hfov": 8.37,
   "distance": 50
  }
 ],
 "id": "overlay_FAF97A9E_E586_74E3_41BA_5DF603FDDAFB",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5, this.camera_FDB0BBEB_F2D2_68D6_41EA_677E0ACEC87F); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.87,
   "hfov": 8.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F274EC3E_EFC5_737E_41ED_FC425C98F0F7",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -42.61,
   "pitch": -3.87,
   "hfov": 8.65,
   "distance": 100
  }
 ],
 "id": "overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E, this.camera_FDB6CBFB_F2D2_68B6_41A7_A8F7A3C8D6DD); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -25.54,
   "hfov": 7.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CBAE3745_E582_5C61_41C7_0A2FCD81B8DE",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.11,
   "pitch": -25.54,
   "hfov": 7.33,
   "distance": 50
  }
 ],
 "id": "overlay_CFB43D12_E586_6DE0_41E5_D19807675477",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_FDBC9BDB_F2D2_68F6_41D0_4519AAF50B0E); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.14,
   "hfov": 6.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CBAE9745_E582_5C61_41E0_1058A8D1F50E",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.66,
   "pitch": -26.14,
   "hfov": 6.8,
   "distance": 50
  }
 ],
 "id": "overlay_C2A645F4_E586_7C27_41C7_D6014E6D3687",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 1.64,
   "hfov": 10.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -28.66,
   "hfov": 10.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_4_0.png",
      "width": 58,
      "height": 63
     }
    ]
   },
   "pitch": 1.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_FAC09A5A_EF0D_CC01_41E8_2A809D274D36, null, null, 10000, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.86,
   "hfov": 9.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E1BFAF_E582_6C20_41E0_4A2B1BE515FE",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.33,
   "pitch": -3.86,
   "hfov": 9.47,
   "distance": 50
  }
 ],
 "id": "overlay_C512E76B_E5FE_DC21_41EC_12E0EB2390DD",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917, this.camera_E206FAF1_F2D2_68B2_41CE_DDF7A8D554E1); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.8,
   "hfov": 8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E13FAF_E582_6C20_41E3_F88424ABDFD9",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.59,
   "pitch": -4.8,
   "hfov": 8.1,
   "distance": 50
  }
 ],
 "id": "overlay_C5366303_E5FE_55E1_41CE_85F2A00FD211",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E, this.camera_E2357B01_F2D2_6952_41DE_C288B53D4F7D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -6.64,
   "hfov": 7.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E7AFAF_E582_6C20_41CA_E1C23BCE8EA9",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -165.16,
   "pitch": -6.64,
   "hfov": 7.52,
   "distance": 50
  }
 ],
 "id": "overlay_C114236A_E58D_B423_41D4_A8163FB4E1D8",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_E3903B6E_F2D2_69AE_41A5_37B187400755); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -6.86,
   "hfov": 9.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E71FAF_E582_6C20_41E8_DE3AB81BFE73",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.79,
   "pitch": -6.86,
   "hfov": 9.16,
   "distance": 50
  }
 ],
 "id": "overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E, this.camera_E3E07B5E_F2D2_69EE_41D5_2D1B104E2A58); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 12.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F28A2C1E_EFC5_733F_4193_B19DE4A5A1F7",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.09,
   "pitch": -7.63,
   "hfov": 12.95,
   "distance": 100
  }
 ],
 "id": "overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2, this.camera_E2A1CD33_F2D2_69B6_41E6_7D44B3CFABDA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -24.39,
   "hfov": 9.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E05FAF_E582_6C20_41E5_6345E04C0074",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 70.3,
   "pitch": -24.39,
   "hfov": 9.21,
   "distance": 100
  }
 ],
 "id": "overlay_FB4D7508_E582_5DE0_41DC_06FC3EE0C0C0",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.75,
   "hfov": 10.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -21.59,
   "hfov": 10.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_0_HS_1_0.png",
      "width": 61,
      "height": 58
     }
    ]
   },
   "pitch": 0.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FBECA914_EF04_CC02_41DD_34349E576A7F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_F23B9C8C_EFC5_7302_41E3_0F247F6E0560, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -14.83,
   "hfov": 8.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_C9E5DFA0_E582_6CDF_41D2_CE6FC562F238",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -110.9,
   "pitch": -14.83,
   "hfov": 8.19,
   "distance": 100
  }
 ],
 "id": "overlay_C1EF599F_E582_B4E0_41E1_1AC51A86E488",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE, this.camera_E3AC7B9D_F2D2_6972_41DC_602CD9B1B29C); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_4_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -25.48,
   "hfov": 16.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabled": false,
 "items": [
  {
   "yaw": -11.38,
   "hfov": 16.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_4_0.png",
      "width": 104,
      "height": 88
     }
    ]
   },
   "pitch": -25.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F796948E_E609_040D_41D6_6C7371FF10F6",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setMediaBehaviour(this.playList_E29AB9F7_F2D2_68BE_41C5_4BD21E7BD808, 0, this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B); this.MainViewerVideoPlayer.play()",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -25.48,
   "hfov": 16.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.38,
   "hfov": 16.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_0_HS_5_0.png",
      "width": 104,
      "height": 88
     }
    ]
   },
   "pitch": -25.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FB310154_EF7D_FC01_41E1_B65FC02F4FCD",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FBAD2DF4_EF7D_4401_41EB_F79B1A1CF6F9, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_FB39EB89_F2CE_A952_41E8_CC11F31CCD71, this.video_E8A9218D_E609_1C0F_41CB_A06AD340DD0A, this.PlayList_FE0B93D3_F2D6_78F6_41CE_F564A8487063, '95%', '95%', true, true) }",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.93,
   "hfov": 7.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F9636F0F_E582_EDE1_41D9_DEDDF2B9477A",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 107.6,
   "pitch": -3.93,
   "hfov": 7.56,
   "distance": 50
  }
 ],
 "id": "overlay_F270DF8F_E582_6CE1_41DA_D851A3BCB8E2",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED, this.camera_E27C2D62_F2D2_69D6_41E0_DE078F8F0ED2); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -2.25,
   "hfov": 9.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CAD19E30_E586_AC20_41EA_9923504D73F2",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -64.27,
   "pitch": -2.25,
   "hfov": 9.49,
   "distance": 50
  }
 ],
 "id": "overlay_CF148686_E582_5CE3_41E1_95CB7D75B77F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004, this.camera_E24DFD52_F2D2_69F7_41D9_F9CB6EA202B3); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -3.61,
   "hfov": 8.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2837C1E_EFC5_733F_41E7_C75B8DC86532",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.47,
   "pitch": -3.61,
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "id": "overlay_FF9DBB11_EFC5_9502_41DF_069E26A37F14",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29, this.camera_E250DD43_F2D2_69D6_41E9_E3F8A90038C8); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.39,
   "hfov": 14.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F2859C1E_EFC5_733F_41E8_F36CC68F0005",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -61.15,
   "pitch": -7.39,
   "hfov": 14.32,
   "distance": 50
  }
 ],
 "id": "overlay_F7AFC922_E58E_5420_41DD_9A87C35CC41B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69, this.camera_E208FAD2_F2D2_68F6_41A0_D3F541F1F003); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.66,
   "hfov": 12.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F15A20DB_E587_D461_41DE_66B806588FDD",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11.44,
   "pitch": -8.66,
   "hfov": 12.92,
   "distance": 50
  }
 ],
 "id": "overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D, this.camera_E2198AB3_F2D2_68B6_41E7_4FA91AD3E527); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "VideoPlayer",
 "id": "viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920VideoPlayer",
 "viewerArea": "this.viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 40.38,
   "hfov": 13.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabled": false,
 "items": [
  {
   "yaw": -179.88,
   "hfov": 13.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_2_0.png",
      "width": 104,
      "height": 88
     }
    ]
   },
   "pitch": 40.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB20B314_E583_F5E7_41E6_BF3CF2EE1458",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.MainViewerVideoPlayer.get('state') == 'playing' && this.playList_E2E4B9F7_F2D2_68BE_41D4_15AC084F862C.get('selectedIndex') == 0) { this.MainViewerVideoPlayer.stop(); } else { this.setMediaBehaviour(this.playList_E2E4B9F7_F2D2_68BE_41D4_15AC084F862C, 0, this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA);this.MainViewerVideoPlayer.play(); }",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -4.55,
   "hfov": 17.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -37.8,
   "hfov": 17.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_3_0.png",
      "width": 104,
      "height": 88
     }
    ]
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_FB3ADB89_F2CE_A952_41DA_939AC56277B5, this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945, this.PlayList_FE0AC3D3_F2D6_78F6_41E4_59D5190531C9, '95%', '95%', true, true) }",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -25.74,
   "hfov": 11.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27F0C2E_EFC5_731E_419F_5A261A150314",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.67,
   "pitch": -25.74,
   "hfov": 11.77,
   "distance": 100
  }
 ],
 "id": "overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65, this.camera_E24DBA64_F2D2_6BD2_41B8_9881F878C66E); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_5_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.57,
   "hfov": 11.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_F27FBC2E_EFC5_731E_41ED_F6F52452601B",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.78,
   "pitch": -12.57,
   "hfov": 11.41,
   "distance": 100
  }
 ],
 "id": "overlay_F99F9825_EFCF_F302_41E7_A00792C39D40",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2, this.camera_E27BEA84_F2D2_6B52_41C7_23711117A788); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "id": "viewer_uidE29A29F7_F2D2_68BE_41D5_5F5620892920",
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontFamily": "Arial",
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "data": {
  "name": "ViewerArea4512"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E87FA0_E582_6CDF_41C5_EDC247F4D941",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9EBDFA0_E582_6CDF_41E2_E00175FBA558",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9EAEFA0_E582_6CDF_41DF_EB2CC5BCB2AC",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9EA7FA0_E582_6CDF_41E7_2AA37EFCD8D1",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_D55F5E36_E58D_AC20_41D0_F8197D94C322",
 "frameCount": 9,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_0_HS_2_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27D4C2E_EFC5_731E_41E3_07AE9F493527",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27A7C2E_EFC5_731E_41D5_9C7A03184E57",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27A0C2E_EFC5_731E_41D2_65ACD64D183E",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E298C9F7_F2D2_68BE_41B0_CF5C68E5B06D",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_0_HS_4_0.png",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CA6FD75B_E587_BC60_41BB_53F06B198748",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F277AC3E_EFC5_737E_4191_190C4283E287",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E57FAF_E582_6C20_41A4_5972B557EA1A",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F279DC3E_EFC5_737E_41D5_229504EAFB39",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E4CFAF_E582_6C20_41D0_D871E9A16978",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E42FAF_E582_6C20_41A4_8AA31491291A",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27C1C2E_EFC5_731E_41E2_39F89D4CCA60",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27CBC2E_EFC5_731E_41E8_DBA491F321F6",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_0_HS_4_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C9E14FAF_E582_6C20_41EA_059D986CB157",
 "frameCount": 9,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_1_HS_0_0.png",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F286CC1E_EFC5_733F_41D4_06C94826991F",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2875C1E_EFC5_733F_41EA_A09DAA2C6EAA",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2866C1E_EFC5_733F_41DE_D61085300959",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2861C1E_EFC5_733F_41E0_37AAF233B362",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2890C1E_EFC5_733F_41EB_DF5283130C86",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F289CC1E_EFC5_733F_41E5_5E0D4963CBC6",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F283FC1E_EFC5_733F_41EA_4CDDB9D80D6F",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2839C1E_EFC5_733F_41DF_668FD8EDFA93",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F96F9EFF_E582_EC21_41C1_F1FA9CF9AC96",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FB549991_EF1B_CC03_41CE_47870C55B7C1",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F285EC1E_EFC5_733F_41EC_E474033FAA99",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2848C1E_EFC5_733F_41D4_C46D842E0E4F",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2853C1E_EFC5_733F_41C1_FB3101FCEF32",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9ECDFA0_E582_6CDF_41E5_CF3DEA741D64",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_4_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9EC3FA0_E582_6CDF_41E5_3926C1A4F7E6",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_5_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2879C1E_EFC5_733F_4195_6F9757DAE280",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_6_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E7D2087C_F2C9_A04D_41DC_4922D2BCDAE7",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_0_HS_7_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2842C1E_EFC5_733F_41DF_49A63608A371",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F284DC1E_EFC5_733F_41DF_A4B49BC5F2EA",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_0_HS_4_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C9E0DFAF_E582_6C20_41EC_32D9B3C80C50",
 "frameCount": 9,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0ABE9_E582_F420_41EB_411976F99539_1_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E65FAF_E582_6C20_4183_272201CF3C11",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F274EC3E_EFC5_737E_41ED_FC425C98F0F7",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CBAE3745_E582_5C61_41C7_0A2FCD81B8DE",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CBAE9745_E582_5C61_41E0_1058A8D1F50E",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E1BFAF_E582_6C20_41E0_4A2B1BE515FE",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E13FAF_E582_6C20_41E3_F88424ABDFD9",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E7AFAF_E582_6C20_41CA_E1C23BCE8EA9",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C9E71FAF_E582_6C20_41E8_DE3AB81BFE73",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F28A2C1E_EFC5_733F_4193_B19DE4A5A1F7",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C9E05FAF_E582_6C20_41E5_6345E04C0074",
 "frameCount": 9,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C9E5DFA0_E582_6CDF_41D2_CE6FC562F238",
 "frameCount": 9,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F9636F0F_E582_EDE1_41D9_DEDDF2B9477A",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CAD19E30_E586_AC20_41EA_9923504D73F2",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2837C1E_EFC5_733F_41E7_C75B8DC86532",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F2859C1E_EFC5_733F_41E8_F36CC68F0005",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_0_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F15A20DB_E587_D461_41DE_66B806588FDD",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27F0C2E_EFC5_731E_419F_5A261A150314",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_4_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_F27FBC2E_EFC5_731E_41ED_F6F52452601B",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_0_HS_5_0.png",
   "width": 400,
   "height": 360
  }
 ]
}],
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "propagateClick": false,
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "verticalAlign": "top",
 "data": {
  "name": "Player435"
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "paddingTop": 0
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
