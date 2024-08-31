(function(){
    var script = {
 "scripts": {
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } }
 },
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.MainViewer",
  "this.Container_7202B0A9_62ED_F638_41AF_7F34CF3EC6C2",
  "this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C",
  "this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA",
  "this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F",
  "this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33",
  "this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F",
  "this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F",
  "this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
  "this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
  "this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
  "this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
  "this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
  "this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
  "this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
  "this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
  "this.HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
  "this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837",
  "this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B",
  "this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310",
  "this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "paddingBottom": 0,
 "shadow": false,
 "layout": "absolute",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist,this.mainPlayList])",
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
 "id": "panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.61,
  "hfov": 90,
  "pitch": 0.52
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_A84236AA_A66C_356C_41CF_5DA6E7957ABD",
 "duration": 1000
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
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "id": "window_AFD66DFC_A5BC_76E4_41AE_C3DC6D9AA877",
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
 "shadowHorizontalLength": 3,
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
  "this.viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007"
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
 "shadowVerticalLength": 0,
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
 "layout": "vertical",
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
 "data": {
  "name": "Window373"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "titleFontSize": "1.29vmin",
 "headerPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical"
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
 "id": "panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.35,
  "hfov": 90,
  "pitch": 4.86
 }
},
{
 "loop": true,
 "audio": {
  "mp3Url": "media/audio_700CC855_62DF_766B_41C1_22ED197BE85F.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_700CC855_62DF_766B_41C1_22ED197BE85F.ogg"
 },
 "class": "PanoramaAudio",
 "id": "audio_700CC855_62DF_766B_41C1_22ED197BE85F",
 "autoplay": true,
 "data": {
  "label": "forest-lullaby-110624"
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA553615_F9DB_4F10_41CA_F672B6502E0F",
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
 "id": "panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.85,
  "hfov": 122,
  "pitch": -3.91
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007VideoPlayer)",
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_AB7EE3A6_A5AC_3364_41DA_51800F206420, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_AB7EE3A6_A5AC_3364_41DA_51800F206420, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007VideoPlayer"
  }
 ],
 "id": "PlayList_AB7EE3A6_A5AC_3364_41DA_51800F206420"
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
 "id": "panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.75,
  "pitch": 10.48
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
 "label": "20",
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
  "this.overlay_FE367F97_EFC3_6D0E_41D3_AE3A7272BAA3",
  "this.overlay_E96BE402_F9AD_7617_41EC_AD197FB44158"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65"
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
 "id": "panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.73,
  "hfov": 122,
  "pitch": 17.73
 }
},
{
 "vfov": 180,
 "label": "25",
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
  "this.overlay_F6067C8B_EF0F_4406_41EA_E8BAFFA31D27",
  "this.popup_FCEE4B01_EF0F_CC02_41D0_E361FC03B0A3",
  "this.overlay_833CD5F5_9195_EA1A_41C0_2C2A6714CD83"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58"
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
 "id": "panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.38,
  "pitch": 3.54
 }
},
{
 "class": "PanoramaPlayer",
 "buttonZoomIn": "this.IconButton_720280A9_62ED_F638_41B4_BE1FE291A440",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonMoveUp": "this.IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
 "buttonZoomOut": "this.IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
 "viewerArea": "this.MainViewer",
 "buttonMoveDown": "this.IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveRight": "this.IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonMoveLeft": "this.IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B2A2CA56_A664_3D24_41E4_21574A2F9B39, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B2A2CA56_A664_3D24_41E4_21574A2F9B39, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B2A2CA56_A664_3D24_41E4_21574A2F9B39"
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
  "this.overlay_E8903F24_F9AD_5213_4185_6991E358B22B"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6"
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
 "id": "panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.86,
  "hfov": 115,
  "pitch": -1.96
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA2F0FD8_F9E4_BD10_41D8_F5D92324AA10",
 "duration": 1000
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
  "this.overlay_FCB6E5C2_EFC4_FD06_41EB_BE9E64922611",
  "this.overlay_E8803D8C_F9AE_D613_41B5_07BD3555C76A"
 ],
 "hfovMin": "155%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA2FCFD8_F9E4_BD10_41E3_CC0B4FF68E8B",
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
 "id": "panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "12",
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
 "hfovMax": 139,
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
  "this.overlay_F9B60EA4_EFCC_EF02_41E3_BEF773A58C64",
  "this.overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "11",
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
  "this.overlay_F193744E_E58D_BC63_41E2_697DD07504BE",
  "this.overlay_E8966A22_F9AD_5217_419B_D3B00E036954"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69"
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
 "id": "panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "hfov": 90,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "29",
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
  "this.overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E",
  "this.overlay_9CF6E23E_8F30_AEA5_41DE_8805144AAA8B"
 ],
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917"
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
 "id": "panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.44,
  "hfov": 115,
  "pitch": 5.42
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
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.07,
  "hfov": 130,
  "pitch": 6.71
 }
},
{
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "17",
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
  "this.overlay_F77539E7_EF0F_CC0F_41D1_77FD4B83E9DC",
  "this.popup_FB933291_EF0F_BC03_41DB_FC2C048DC812",
  "this.overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9VideoPlayer)",
   "media": "this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04",
   "start": "this.viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_AB7E63A6_A5AC_3364_41A4_5981A85BE244, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_AB7E63A6_A5AC_3364_41A4_5981A85BE244, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9VideoPlayer"
  }
 ],
 "id": "PlayList_AB7E63A6_A5AC_3364_41A4_5981A85BE244"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9802FA_F9DD_4713_41D1_2A1F66A12662",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292",
 "duration": 1000
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
  "this.overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382"
 ],
 "hfovMin": "155%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E"
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
 "id": "panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.02,
  "pitch": -1.31
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D",
 "duration": 1000
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
  "this.overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6",
  "this.overlay_9D3DF091_8F13_AA7F_41B4_3D08DC5ECBC4"
 ],
 "hfovMin": "140%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D"
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
 "id": "panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.05,
  "hfov": 129,
  "pitch": -1.76
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
 "vfov": 180,
 "label": "13",
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
  "this.overlay_F8433513_EFC4_BD06_41CF_D4BEBC3AF5FB",
  "this.overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E"
  }
 ],
 "hfov": 360,
 "partial": false
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
  "yaw": 12.73,
  "hfov": 90,
  "pitch": -2.02
 }
},
{
 "vfov": 180,
 "label": "9",
 "id": "panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
 "hfovMax": 138,
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
  "this.overlay_E8975959_F9AD_DE35_41D1_A668059F0D18"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "23",
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
  "this.overlay_C0D2805F_E582_B460_41E7_E88C06381D2C"
 ],
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_700CC855_62DF_766B_41C1_22ED197BE85F"
 ]
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "22",
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
  "this.overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
  "this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E",
  "this.overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
  "this.overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A",
 "duration": 1000
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
  "this.overlay_FD02435B_EFC3_7506_41DA_BE273792B747",
  "this.overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9BE2FA_F9DD_4713_41E0_A7F050EB40A6",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "15",
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
  "this.overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275"
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
 "id": "panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.61,
  "pitch": 0.86
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
 "id": "panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.11,
  "pitch": 4.83
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
 "id": "panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "28",
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
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9D1309_F9DD_46F0_41DD_11622910FACC",
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
 "id": "panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.97,
  "hfov": 90,
  "pitch": 7.29
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
 "id": "panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.05,
  "hfov": 90,
  "pitch": -1.3
 }
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
  "this.overlay_FDB1C766_EFDC_BD0E_41BF_C4D358A1D37B",
  "this.overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_B475348D_A664_D525_41A5_A9D6A470E420",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_E0ACC507_EF04_C40F_41BB_E263F28DD758",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "10",
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
  "this.overlay_FF9DBB11_EFC5_9502_41DF_069E26A37F14",
  "this.overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "14",
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
  "this.overlay_9C0C5EAF_8F30_B7A4_41DE_F146D75D55A5"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED"
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
 "id": "panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.38,
  "pitch": -1.46
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false); this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true, -1, this.effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665, 'showEffect', false)",
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "end": "this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false, -1, this.effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 2, 3)",
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 3, 4)",
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 4, 5); this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false); this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true, -1, this.effect_EA53D615_F9DB_4F10_41E6_1D1EF1E64AD7, 'showEffect', false)",
   "media": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "end": "this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false, -1, this.effect_EA53F615_F9DB_4F10_4186_136B65E1A4BC, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 5, 6)",
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "end": "this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, false, -1, this.effect_EA2FCFD8_F9E4_BD10_41E3_CC0B4FF68E8B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, false, -1, this.effect_EA2F0FD8_F9E4_BD10_41D8_F5D92324AA10, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 6, 7)",
   "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 7, 8); this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false); this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true, -1, this.effect_ED9BC2FA_F9DD_4713_41E8_6C025ED15FED, 'showEffect', false)",
   "media": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "end": "this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false, -1, this.effect_ED9BE2FA_F9DD_4713_41E0_A7F050EB40A6, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 8, 9)",
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 9, 10)",
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 10, 11); this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false); this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true, -1, this.effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A, 'showEffect', false)",
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "end": "this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false, -1, this.effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 11, 12)",
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 12, 13); this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false); this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true, -1, this.effect_ED9D1309_F9DD_46F0_41DD_11622910FACC, 'showEffect', false)",
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "end": "this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false, -1, this.effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 13, 14); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_B475448D_A664_D525_41D1_4B99DB627216, 'showEffect', false)",
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "end": "this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_B475348D_A664_D525_41A5_A9D6A470E420, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 14, 15)",
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 15, 16)",
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 16, 17)",
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 17, 18)",
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 18, 19); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true, -1, this.effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965, 'showEffect', false)",
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false, -1, this.effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 19, 20); this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false); this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true, -1, this.effect_EA558615_F9DB_4F10_41E3_4AAA34777955, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true, -1, this.effect_ED99D2FA_F9DD_4713_41D1_CD14CC52DDA1, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_A84236AA_A66C_356C_41CF_5DA6E7957ABD, 'showEffect', false)",
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "end": "this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false, -1, this.effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false, -1, this.effect_ED9802FA_F9DD_4713_41D1_2A1F66A12662, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_A84226AA_A66C_356C_41E4_6BBE1A84F62B, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 20, 21)",
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 21, 22); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true, -1, this.effect_EA553615_F9DB_4F10_41CA_F672B6502E0F, 'showEffect', false)",
   "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false, -1, this.effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 22, 23); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
   "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 23, 24)",
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 24, 25); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true, -1, this.effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC, 'showEffect', false)",
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false, -1, this.effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 25, 26); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 26, 27)",
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 27, 28)",
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist, 28, 0)",
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  }
 ],
 "id": "ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist"
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
 "id": "panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.82,
  "pitch": 8.43
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2",
 "duration": 1000
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 16.17,
 "video": {
  "class": "VideoResource",
  "width": 1080,
  "mp4Url": "media/video_F73B86C3_E60B_047B_41E8_5E317CE04E04.mp4",
  "height": 1920
 },
 "popupDistance": 100,
 "id": "popup_9E77805A_8F10_EAEC_41AD_8016F3A99543",
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
  "this.overlay_E89627DC_F9AD_7233_41E9_7E7FD9C9A9B2"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004"
  }
 ],
 "hfov": 360,
 "partial": false
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
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA53D615_F9DB_4F10_41E6_1D1EF1E64AD7",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "19",
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
 "hfovMax": 139,
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
  "this.overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C",
  "this.popup_9E77805A_8F10_EAEC_41AD_8016F3A99543"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9BC2FA_F9DD_4713_41E8_6C025ED15FED",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_A84226AA_A66C_356C_41E4_6BBE1A84F62B",
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
 "id": "panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.16,
  "pitch": 15.44
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
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F",
 "duration": 1000
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
 "vfov": 180,
 "label": "21",
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
  "this.overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7"
 ],
 "hfovMin": "130%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "media": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B2AD8A66_A664_3DE7_41B0_404F7CA2B24C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B2AD8A66_A664_3DE7_41B0_404F7CA2B24C, 0)",
   "class": "Video360PlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.media_F7BD46A7_E607_043C_41E8_DD4553C8892B_camera"
  }
 ],
 "id": "playList_B2AD8A66_A664_3DE7_41B0_404F7CA2B24C"
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
 "id": "panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.65,
  "hfov": 120,
  "pitch": 1.53
 }
},
{
 "vfov": 180,
 "label": "26",
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
  "this.popup_FBF6B71E_EF05_4401_41EC_66F81499F846",
  "this.overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C"
 ],
 "hfovMin": "115%",
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
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "id": "window_AFD77DFC_A5BC_76E4_41E3_1D6280B5ED12",
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
 "shadowHorizontalLength": 3,
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
  "this.viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9"
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
 "shadowVerticalLength": 0,
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
 "layout": "vertical",
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
 "data": {
  "name": "Window372"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "titleFontSize": "1.29vmin",
 "headerPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical"
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
   "bitrate": 4665,
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
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_B475448D_A664_D525_41D1_4B99DB627216",
 "duration": 1000
},
{
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "rotationZ": 0,
 "hfov": 17.84,
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
 "pitch": -5.24,
 "class": "PopupPanoramaOverlay",
 "yaw": -37.8,
 "popupMaxWidth": "95%"
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
  "this.overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
  "this.overlay_10DBCA6E_03DB_7626_416D_16022585A719"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18"
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
 "id": "panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965",
 "duration": 1000
},
{
 "vfov": 180,
 "label": "16",
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
  "this.overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
  "this.overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E"
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
 "id": "panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.74,
  "pitch": 13.53
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC",
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
 "id": "panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
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
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA53F615_F9DB_4F10_4186_136B65E1A4BC",
 "duration": 1000
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 5.31
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 5.31
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.84,
  "hfov": 90,
  "pitch": -5.84
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
 "id": "panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "hfov": 90,
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
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED99D2FA_F9DD_4713_41D1_CD14CC52DDA1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false); this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true, -1, this.effect_FD321C8F_EF1B_C41F_41E5_F16B4C3C8665, 'showEffect', false)",
   "media": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186",
   "end": "this.setComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, false, -1, this.effect_FD327C8F_EF1B_C41F_41E4_16CE937162A7, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FFF3BC39_EF0D_4402_41DE_EF70D613FE7F, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FFDE7816_EEFF_4C01_41D9_31CA60CB9545, 'showEffect', false)",
   "media": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_E0ACC507_EF04_C40F_41BB_E263F28DD758, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false); this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true, -1, this.effect_EA53D615_F9DB_4F10_41E6_1D1EF1E64AD7, 'showEffect', false)",
   "media": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078",
   "end": "this.setComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, false, -1, this.effect_EA53F615_F9DB_4F10_4186_136B65E1A4BC, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2",
   "end": "this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, false, -1, this.effect_EA2FCFD8_F9E4_BD10_41E3_CC0B4FF68E8B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, false, -1, this.effect_EA2F0FD8_F9E4_BD10_41D8_F5D92324AA10, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false); this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true, -1, this.effect_ED9BC2FA_F9DD_4713_41E8_6C025ED15FED, 'showEffect', false)",
   "media": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6",
   "end": "this.setComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, false, -1, this.effect_ED9BE2FA_F9DD_4713_41E0_A7F050EB40A6, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false); this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true, -1, this.effect_ED9A82FA_F9DD_4713_41E3_BA03B2F0670A, 'showEffect', false)",
   "media": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29",
   "end": "this.setComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, false, -1, this.effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC9017B_E586_5421_41E2_E3533361EA29_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false); this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true, -1, this.effect_ED9D1309_F9DD_46F0_41DD_11622910FACC, 'showEffect', false)",
   "media": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917",
   "end": "this.setComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, false, -1, this.effect_ED9D2309_F9DD_46F0_41E1_869A6C430EBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_B475448D_A664_D525_41D1_4B99DB627216, 'showEffect', false)",
   "media": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E",
   "end": "this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_B475348D_A664_D525_41A5_A9D6A470E420, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F26CB_E582_5C61_41D1_849099DFCFED_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F55B8FE8_EFC5_6D02_41C4_BC816A2C2C71, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true, -1, this.effect_ED9F0309_F9DD_46F0_41DD_F2ADCB3AC965, 'showEffect', false)",
   "media": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F5586FE8_EFC5_6D02_41E3_F1C564A28292, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, false, -1, this.effect_ED9F2309_F9DD_46F0_41DE_44D76B12B686, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true); this.keepComponentVisibility(this.HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20); this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false); this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true, -1, this.effect_EA558615_F9DB_4F10_41E3_4AAA34777955, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true, -1, this.effect_ED99D2FA_F9DD_4713_41D1_CD14CC52DDA1, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true, -1, this.effect_A84236AA_A66C_356C_41CF_5DA6E7957ABD, 'showEffect', false)",
   "media": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8",
   "end": "this.setComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, false, -1, this.effect_EA543615_F9DB_4F10_41D5_F5CCD3BA583F, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, false, -1, this.effect_ED9802FA_F9DD_4713_41D1_2A1F66A12662, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, false, -1, this.effect_A84226AA_A66C_356C_41E4_6BBE1A84F62B, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9, true); this.keepComponentVisibility(this.HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837, true); this.keepComponentVisibility(this.HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22); this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false); this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true, -1, this.effect_F55BDFE8_EFC5_6D02_41E5_981A37D9219F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true, -1, this.effect_EA553615_F9DB_4F10_41CA_F672B6502E0F, 'showEffect', false)",
   "media": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA",
   "end": "this.setComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, false, -1, this.effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, false, -1, this.effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FB2C688E_EF7B_4C01_41EC_52B8113CCB33, true); this.keepComponentVisibility(this.HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8EE1D6_E586_7460_41DD_7151881269FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23); this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false); this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true, -1, this.effect_FD319C8F_EF1B_C41F_41C0_2C028BD1B175, 'showEffect', false)",
   "media": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C",
   "end": "this.setComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, false, -1, this.effect_FD318C8F_EF1B_C41F_41CD_C55F77F7E11D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E2B1A2DF_EEFB_5C3F_41CF_2AB5B173C0BA, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FEE50DC1_E582_6C60_41E2_19D92DCDC16C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25); this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false); this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true, -1, this.effect_F558BFE8_EFC5_6D02_41D6_47E738D5C943, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true, -1, this.effect_EA56E615_F9DB_4F10_41E3_EB505593E2FC, 'showEffect', false)",
   "media": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61",
   "end": "this.setComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, false, -1, this.effect_F558AFE8_EFC5_6D02_41B8_9E1C71EA0604, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, false, -1, this.effect_EA571615_F9DB_4F10_41EB_42F02EA3F0E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E0CA3C62_EFCD_B306_41E7_FDE60A2DDE6F, true); this.keepComponentVisibility(this.HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26); this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false); this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true, -1, this.effect_F5580FE8_EFC5_6D02_41C9_9130B4F2108A, 'showEffect', false)",
   "media": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58",
   "end": "this.setComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, false, -1, this.effect_F558FFE8_EFC5_6D02_41D4_F5F97B9A8AF2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E15D426F_EFC5_971E_41EA_A5FDA1ABF03F, true)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0ABE9_E582_F420_41EB_411976F99539_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0E765_E582_FC21_41E0_850D71D6F266_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "media": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "vfov": 180,
 "label": "18",
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
  "this.overlay_F85E4006_EFC3_B30E_41DB_D051E806906F",
  "this.overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "vfov": 180,
 "label": "27",
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
  "this.overlay_FBA24A0E_E582_D7E3_41D6_17106BF12E6B",
  "this.overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9"
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
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_F55BCFE8_EFC5_6D02_41B8_1735D4F03E90",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B2ADFA66_A664_3DE7_41C5_4018EE43DCE7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B2ADFA66_A664_3DE7_41C5_4018EE43DCE7, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B2ADFA66_A664_3DE7_41C5_4018EE43DCE7"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_ED9A92FA_F9DD_4713_41D4_B3B5F2121A96",
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
 "id": "panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "vfov": 180,
 "label": "24",
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
  "this.overlay_F7066F69_EFCD_AD02_41ED_08F1A610BBA8"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61"
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA558615_F9DB_4F10_41E3_4AAA34777955",
 "duration": 1000
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
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_EA552615_F9DB_4F10_41C2_3BC9574C3FCA",
 "duration": 1000
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
 "toolTipShadowColor": "#000000",
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
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "toolTipBorderColor": "#000000",
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
 "gap": 4,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
  "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
  "this.IconButton_720240A9_62ED_F638_41D4_DC15D6509E83",
  "this.IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
  "this.Container_720210A9_62ED_F638_4197_67B812528813",
  "this.IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
  "this.IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675",
  "this.IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
  "this.IconButton_720280A9_62ED_F638_41B4_BE1FE291A440"
 ],
 "id": "Container_7202B0A9_62ED_F638_41AF_7F34CF3EC6C2",
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "right": "34.96%",
 "width": 382.93,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "overflow": "hidden",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 152.13,
 "borderRadius": 0,
 "paddingLeft": 0,
 "bottom": "3.1%",
 "minHeight": 20,
 "propagateClick": false,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "verticalAlign": "middle",
 "data": {
  "name": "Container27661"
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingTop": 0
},
{
 "itemPaddingBottom": 3,
 "id": "ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C",
 "paddingBottom": 10,
 "paddingTop": 10,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "right": "0%",
 "width": 141.4,
 "itemLabelHorizontalAlign": "center",
 "scrollBarMargin": 2,
 "itemOpacity": 1,
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailBorderRadius": 5,
 "itemVerticalAlign": "middle",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.33,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 20,
 "height": "67.149%",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowOpacity": 0.27,
 "minHeight": 20,
 "playList": "this.ThumbnailList_7345D135_62FD_762B_41D7_5FD4780ACE9C_playlist",
 "propagateClick": false,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "itemThumbnailShadowSpread": 1,
 "verticalAlign": "top",
 "itemPaddingTop": 3,
 "scrollBarColor": "#FFFFFF",
 "itemBackgroundColor": [],
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarVisible": "rollOver",
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "itemLabelGap": 8,
 "rollOverItemLabelFontWeight": "bold",
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowHorizontalLength": 3,
 "shadow": false,
 "layout": "vertical",
 "horizontalAlign": "left",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailHeight": 75,
 "paddingRight": 20,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "itemThumbnailShadow": true,
 "bottom": "16.3%",
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailScaleMode": "fit_outside",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailWidth": 75,
 "class": "ThumbnailList",
 "itemHorizontalAlign": "center",
 "itemBackgroundColorDirection": "vertical",
 "data": {
  "name": "ThumbnailList35762"
 },
 "gap": 13,
 "itemThumbnailShadowColor": "#000000"
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
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Komoditas Pertanian</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Pada umumnya masyarakat disekitar Taman Nasional Bromo Tengger Semeru (TNBTS) hidup pada sektor pertanian. Kondisi tanah di daerah ini memiliki tanah yang subur akibat aktivitas vulkanik yang terjadi, sehingga masyarakat yang tinggal di kawasan ini memanfaatkannya sebagai lahan pertanian. Uniknya lahan pertanian yang berada dikawasan ini terletak pada lereng-lereng yang cukup ekstrem. Komoditas pertanian yang ditanam di disekitar TNBTS berupa tanaman kentang, daun bawang, kubis, jagung, dan wortel. Komoditas kentang sendiri merupakan salah satu komoditas terbesar yang dihasilkan dari lahan pertanian disekitar TNBTS.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Pertanian"
 },
 "scrollBarColor": "#000000",
 "visible": false,
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
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Halo! Selamat Datang</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:23px;\"><B>Di Kawasan Taman Nasional Bromo Tengger Semeru (TNBTS)</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Taman Nasional Bromo Tengger Semeru merupakan gabungan dari beberapa kawasan yang disatukan. Kawasan tersebut sebelumnya merupakan cagar alam, taman wisata, hutan produksi dan hutan lindung. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Sesuai definisinya Taman Nasional adalah kawasan pelestarian alam yang mempunyai ekosistem asli, dikelola dengan sistem zonasi yang dimanfaatkan untuk tujuan penelitian, ilmu pengetahuan, pendidikan, menunjang budidaya, pariwisata, dan rekreasi. Dari 50.276,3 hektare kawasan TNBTS dibagi menjadi tujuh zonasi. Yakni zona inti, rimba, pemanfaatan, tradisional, rehabilitasi, khusus, dan religi.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Halo"
 },
 "scrollBarColor": "#000000",
 "visible": false,
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
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Aktivitas Keagamaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Sebagian besar penduduk asli Tengger menganut agama Hindu. Oleh karena itu, kalian dapat dengan mudah menemukan sejumlah Pura Hindu di sekitar wilayah Taman Nasional Bromo Tengger Semeru (TNBTS).</SPAN><SPAN STYLE=\"font-size:17px;\"> Aktivitas keagamaan umat hindu untuk melakukan persembahyangan di pura-pura yang berada di kawasan TNBTS tak hanya dilakukan oleh penduduk asli Tengger, tetapi juga banyak berasal dari umat hindu yang berada di Bali. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\"><B>(Gambar: Kegiatan Keagamaan di Pura Ulun Danu Ranu Pane)</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Hindu"
 },
 "scrollBarColor": "#000000",
 "visible": false,
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
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Kawasan TNBTS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Taman Nasional Bromo Tengger Semeru merupakan satu-satunya kawasan konservasi di Indonesia yang memiliki lautan pasir seluas 10 km yang disebut Tengger, tempat dimana empat anak gunung berapi baru berada. Anak gunung berapi tersebut adalah Gunung Batok (2.470 m), Gunung Kursi (2.581 m), Gunung Watangan (2.661 m), dan Gunung Widodaren (2.650 m). Namun, dari deretan gunung tersebut, hanya Gunung Bromo lah satu-satunya gunung yang masih aktif.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Deskripsi"
 },
 "scrollBarColor": "#000000",
 "visible": false,
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
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.98%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Daya Tarik Wisata</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Gunung Bromo di Jawa Timur, Kalian mungkin sudah sering mendengar cerita salah satu tempat wisata terkenal yang ada di Indonesia ini, bukan? Ya, satu-satunya gunung berapi aktif di kawasan Taman Nasional Bromo Tengger Semeru ini memang punya pemandangan dan suasana yang menakjubkan, karena hamparan kawah yang luas serta kabut yang menyejukkan. Bersama dengan padang pasir yang lapang, bukit-bukit yang mudah didaki, suhu di puncak yang dingin dan sejuk, tentu membuat banyak wisatawan berbondong-bondong mengunjungi tempat ini.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Wisata"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E8319759_F9A4_CD11_41D8_AA9F8B2636F9",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Ranu Pane 2"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EB1AF091_F9A5_4310_41A1_E9513CDFC410",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 350,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pura Ulun Danu Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Pura Ulun Danu"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E83CF433_F9A5_C310_41E9_DB754915D451",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Pos Jemplang</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Jemplang"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E8EAE3DC_F9A4_C517_41E7_BFF7809A3575",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Penanjakan Bromo</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Penanjakan Bromo"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EA413C74_F9E5_4310_41CE_0673C5000C54",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 350,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>View Gn. Batok dan Gn. Widodaren</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Batok Widodaren"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_ED5928E4_F9FD_4330_41E1_65A3709042D6",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Kawah Bromo"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EDDE606A_F9E5_C330_41EC_310A942DF8AE",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Savana Bromo</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Savana"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EA41382E_F9EB_4330_41EA_46394BD96BFE",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 60,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Bukit Teletubbies</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Teletubies"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EDBEFD57_F9DB_DD10_41E9_93D6C2E0C53A",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "0.98%",
 "width": "18.416%",
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "3.65%",
 "paddingRight": 20,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "minHeight": 1,
 "height": "8.394%",
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "class": "HTMLText",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Kawah Gn. Bromo</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Aliran Lahar"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EA41E9A9_F9DB_4530_41E3_989470E57837",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.97%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Danau Vulkanik</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Ranu Pani merupakan danau yang terbentuk akibat aktivitas gunung berapi oleh karena itu termasuk dalam kategori danau vulkanik yang letaknya berdekatan dengan 2 danau vulkanik lainnya yakni Ranu Regulo dan Ranu Kumbolo. Ranu merupakan sebutan masyarakat lokal untuk sebuah danau. Ranu Pani, Ranu Regulo, dan Ranu Kumbolo adalah bagian dari Taman Nasional Bromo Tengger Semeru (TNBTS). Luas Ranu Pani mencapai 1 hektar, namun kini diperkirakan luas Ranu Pani tinggal 0,75 hektar karena laju sedimentasi yang cepat.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Danau Vulkanik"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "right": "30.96%",
 "width": "14.446%",
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "33.75%",
 "paddingRight": 20,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
 "minHeight": 1,
 "height": "7.554%",
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "class": "HTMLText",
 "propagateClick": false,
 "click": "this.mainPlayList.set('selectedIndex', 19)",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Ranu Pane</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Ranu Pane 1"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310",
 "left": "20.61%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 250,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "33.76%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 56.8,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Bromo Via Malang</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Via MLG"
 },
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 20
},
{
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_A85F06C9_A66C_352C_41E0_5C1D10ABFB19",
 "left": "1.77%",
 "paddingBottom": 10,
 "shadow": true,
 "shadowColor": "#000000",
 "width": 400,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 2,
 "shadowVerticalLength": 2,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.91,
 "top": "2.97%",
 "paddingRight": 20,
 "borderSize": 0,
 "height": 200,
 "borderRadius": 10,
 "paddingLeft": 20,
 "shadowOpacity": 0.19,
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
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:35px;\"><B>Konservasi</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:17px;\">Konservasi lahan adalah upaya untuk menjaga dan memelihara kualitas serta fungsi lahan agar tetap berkelanjutan dan tidak mengalami penurunan. Ini melibatkan berbagai strategi dan tindakan untuk melindungi lahan dari kerusakan, degradasi, dan pencemaran. Tujuan utama dari konservasi lahan adalah untuk menjaga keberlanjutan ekosistem, meningkatkan produktivitas tanah, dan mengurangi dampak negatif terhadap lingkungan. Contohnya seperti Taman Nasional, Cagar Alam, Suaka Marga Satwa, Taman Hutan Raya, dan Kawasan Ekowisata. Setiap jenis kawasan konservasi ini memiliki tujuan spesifik dan metode pengelolaan yang berbeda, namun semuanya berfokus pada pelestarian sumber daya alam dan perlindungan keanekaragaman hayati.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Konservasi"
 },
 "scrollBarColor": "#000000",
 "visible": false,
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
  "name": "UIComponent4712"
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
  "name": "ZoomImage4713"
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
  "name": "CloseButton4714"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "iconLineWidth": 5,
 "paddingTop": 5
},
{
 "id": "IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
 "paddingBottom": 0,
 "shadow": false,
 "width": 40,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27672"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "id": "viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007",
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
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
  "name": "ViewerArea4711"
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
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007VideoPlayer",
 "viewerArea": "this.viewer_uidB2A16A66_A664_3DE7_41E4_A4EC111D9007"
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
      "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E86F0D_62E5_6BFB_41AA_5EC3C5833451",
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
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E96BE402_F9AD_7617_41EC_AD197FB44158",
 "pitch": 59.54,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -107.79,
 "bleachingDistance": 0.4
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_4_0_0_map.gif",
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
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_1_HS_4_0.png",
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
  "label": "Arrow 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_5_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.98,
   "hfov": 7.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88612B94_91BD_7E1A_41CF_FA7FA1BCCFDB",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.11,
   "pitch": -26.98,
   "hfov": 7.97,
   "distance": 100
  }
 ],
 "id": "overlay_833CD5F5_9195_EA1A_41C0_2C2A6714CD83",
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
 "id": "IconButton_720280A9_62ED_F638_41B4_BE1FE291A440",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_720280A9_62ED_F638_41B4_BE1FE291A440.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27673"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27667"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_7203A0A9_62ED_F638_41B3_45B4AE8922B2.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27662"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_7202C0A9_62ED_F638_4184_1F8A0CE1948F.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27670"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "paddingBottom": 0,
 "shadow": false,
 "width": 40,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconURL": "skin/IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27663"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_720270A9_62ED_F638_41C8_84631012A2AF",
 "paddingBottom": 0,
 "shadow": false,
 "width": 32,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_720270A9_62ED_F638_41C8_84631012A2AF.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27665"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "id": "IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "paddingBottom": 0,
 "shadow": false,
 "width": 40,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27668"
 },
 "cursor": "hand",
 "paddingTop": 0
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
      "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_721EEEFE_62E5_6A18_419F_58814F31078F",
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
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8903F24_F9AD_5213_4185_6991E358B22B",
 "pitch": 56.25,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -145.68,
 "bleachingDistance": 0.4
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
      "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_721CDEFE_62E5_6A18_41C5_CE4DF8A8E94B",
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
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8803D8C_F9AE_D613_41B5_07BD3555C76A",
 "pitch": 39.78,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -15.82,
 "bleachingDistance": 0.2
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
      "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E08EFE_62E5_6A18_41A0_2C566CA297E9",
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
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E9641068_F9AD_4E13_41DA_C3D2E97E8E77",
 "pitch": 48.29,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 108.27,
 "bleachingDistance": 0.4
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
      "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E18EFE_62E5_6A18_41D3_D19287CDF836",
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
   "click": "this.mainPlayList.set('selectedIndex', 9)",
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
   "image": "this.AnimatedImageResource_73E1FEFE_62E5_6A18_41C0_60AD6F27C36F",
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
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8966A22_F9AD_5217_419B_D3B00E036954",
 "pitch": 50.48,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 136.83,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_E96F78DF_F9AB_FE2D_41D5_7C3A5567F72E",
 "pitch": 44.17,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -75.67,
 "bleachingDistance": 0.1
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
   "yaw": -152.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.67,
   "hfov": 14.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8D4DB493_9195_AA1E_41C4_98873B0D8F7B",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.4,
   "pitch": -7.67,
   "hfov": 14.04,
   "distance": 100
  }
 ],
 "id": "overlay_9CF6E23E_8F30_AEA5_41DE_8805144AAA8B",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
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
   "image": "this.AnimatedImageResource_73EE6F1D_62E5_6A1B_41C8_789A5FC79210",
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
   "click": "this.mainPlayList.set('selectedIndex', 17)",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_2_0_0_map.gif",
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
      "url": "media/panorama_FCB0B880_E582_B4DF_41E5_405B82BD9B6E_1_HS_2_0.png",
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
 "id": "overlay_E897BC5C_F9AB_7633_41E5_7AF33DE7EF53",
 "pitch": 52.4,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 107.18,
 "bleachingDistance": 0.1
},
{
 "buttonRestart": "this.IconButton_720250A9_62ED_F638_41B0_4CC0B5680F14",
 "buttonPause": "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9VideoPlayer",
 "viewerArea": "this.viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9"
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
      "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_1_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_721BDEFE_62E5_6A18_41C5_E214B6E501A2",
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
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8981FC3_F9AF_7215_41DB_5A4F2103B382",
 "pitch": 58.44,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 126.67,
 "bleachingDistance": 0.2
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_1_0_0_map.gif",
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
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_1_HS_1_0.png",
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
 "id": "overlay_E8FA531A_F9AE_F237_41CB_736BDEBBDFB6",
 "pitch": 34.29,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -115.48,
 "bleachingDistance": 0.2
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
   "yaw": -62.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.36,
   "hfov": 12.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_998BDE9E_8F33_9664_41B4_1A29E9A4833C",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.21,
   "pitch": -12.36,
   "hfov": 12.76,
   "distance": 100
  }
 ],
 "id": "overlay_9D3DF091_8F13_AA7F_41B4_3D08DC5ECBC4",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
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
      "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73F3DF1D_62E5_6A1B_41AA_D2A963E2DB9D",
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
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E893AF1A_F9AB_D237_41D5_C4B72747930F",
 "pitch": 48.01,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -75.67,
 "bleachingDistance": 0.4
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
      "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E38EFE_62E5_6A18_41D0_D3659F17111B",
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
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8975959_F9AD_DE35_41D1_A668059F0D18",
 "pitch": 51.86,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -110.54,
 "bleachingDistance": 0.4
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
   "image": "this.AnimatedImageResource_73EB1F0D_62E5_6BFB_41D4_BFE16E0D0E8A",
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
   "click": "this.mainPlayList.set('selectedIndex', 23)",
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
   "pitch": -5.24,
   "hfov": 17.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -37.8,
   "hfov": 17.84,
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
   "pitch": -5.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FC83FA64_EF05_4C01_41D2_292B3DD87E8D",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FB7CDB0D_EF04_CC03_41E3_5A6E8A43E28E, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_AFD66DFC_A5BC_76E4_41AE_C3DC6D9AA877, this.video_CBA0F39C_E582_74E0_41EB_2F19C312D945, this.PlayList_AB7EE3A6_A5AC_3364_41DA_51800F206420, '95%', '95%', true, true) }",
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
   "yaw": 125.51,
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
   "pitch": -15.79,
   "hfov": 12.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88671B94_91BD_7E1A_41C8_19048B6D450C",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 125.51,
   "pitch": -15.79,
   "hfov": 12.57,
   "distance": 100
  }
 ],
 "id": "overlay_F9787953_EFCC_B506_41D0_B96659155B7F",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E888D4D4_F9AD_F633_41E2_CBD9913FED20",
 "pitch": 59.81,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -128.93,
 "bleachingDistance": 0.2
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
      "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_721C0EFE_62E5_6A18_41A6_1FCC2D0EBC6D",
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
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E892E008_F9AE_CE13_41E9_D76E00267CE3",
 "pitch": 37.59,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -117.95,
 "bleachingDistance": 0.4
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
   "image": "this.AnimatedImageResource_73EAEF0D_62E5_6BFB_41BA_F9E88C3E96C3",
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
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E88CB8F3_F9AD_3FF5_41EB_8A8C24C7616C",
 "pitch": 59.54,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -134.15,
 "bleachingDistance": 0.4
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
   "image": "this.AnimatedImageResource_73F55F1D_62E5_6A1B_41D6_1BF23A7B6708",
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
      "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_72182EEE_62E5_6A39_41D7_47D19DFB6A4B",
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
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8BDA1DE_F9AF_4E2F_41B8_43B17A24699E",
 "pitch": 26.06,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.58,
 "yaw": 31.68,
 "bleachingDistance": 0.04
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
      "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E30EFE_62E5_6A18_41D5_41A835C4E625",
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
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E964C792_F9AD_3237_41C8_04951CC0DAA8",
 "pitch": 50.21,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 100.59,
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.29,
   "hfov": 12.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_998E1E9E_8F33_9664_41B8_A995D653E9DF",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 111.03,
   "pitch": -7.29,
   "hfov": 12.42,
   "distance": 50
  }
 ],
 "id": "overlay_9C0C5EAF_8F30_B7A4_41DE_F146D75D55A5",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
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
      "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E1AEFE_62E5_6A18_41C4_CFD3595EC5F2",
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
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E89627DC_F9AD_7233_41E9_7E7FD9C9A9B2",
 "pitch": 45,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -87.75,
 "bleachingDistance": 0.4
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
   "image": "this.AnimatedImageResource_73EAAF0D_62E5_6BFB_4181_8AA60C682D85",
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
   "click": "this.mainPlayList.set('selectedIndex', 17)",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_4_0_0_map.gif",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_4_0.png",
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
   "click": "this.setMediaBehaviour(this.playList_B2A2CA56_A664_3D24_41E4_21574A2F9B39, 0, this.panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B); this.MainViewerVideoPlayer.play()",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_5_0_0_map.gif",
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
      "url": "media/panorama_FCB0BF57_E582_AC60_41D9_5582106A6A0B_1_HS_5_0.png",
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
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9E77805A_8F10_EAEC_41AD_8016F3A99543, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconColor':'#000000','paddingTop':5,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_AFD77DFC_A5BC_76E4_41E3_1D6280B5ED12, this.video_F73B86C3_E60B_047B_41E8_5E317CE04E04, this.PlayList_AB7E63A6_A5AC_3364_41A4_5981A85BE244, '95%', '95%', true, true) }",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E898B626_F9AA_D21F_41E0_B1F22AAFCC2C",
 "pitch": 57.07,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -161.07,
 "bleachingDistance": 0.2
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_2_0_0_map.gif",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_2_0.png",
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
      "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73E98F0D_62E5_6BFB_41C6_D3EE0DBAB216",
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
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E8959834_F9AD_3E73_41C7_9617B5DA4CB7",
 "pitch": 60.09,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 120.35,
 "bleachingDistance": 0.2
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
   "image": "this.AnimatedImageResource_73F42F1D_62E5_6A1B_41D6_AC3A1CF197D9",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_1_0_0_map.gif",
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
      "url": "media/panorama_FCB0B06E_E582_D423_41E9_F37DE315CA58_1_HS_1_0.png",
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
 "id": "overlay_E89C3D0A_F9AB_3617_41D2_F10DB561149C",
 "pitch": 35.39,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -132.5,
 "bleachingDistance": 0.2
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "id": "viewer_uidB2A34A56_A664_3D24_41D6_F519A28812F9",
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
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
  "name": "ViewerArea4710"
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
  "label": "Arrow 02a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.3,
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
   "pitch": -15.85,
   "hfov": 8.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_887D4B75_91BD_7E1B_41D6_A0A4E5B19F2D",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.3,
   "pitch": -15.85,
   "hfov": 8.61,
   "distance": 50
  }
 ],
 "id": "overlay_F9EA9A48_E586_B460_41A6_C64E60D49C49",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
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
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_5_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_721F8EFE_62E5_6A18_41D3_6C2C5B08EC20",
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
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_EB5EC4AB_F9AF_F615_41E1_EE7AC3F93331",
 "pitch": 57.07,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -115.48,
 "bleachingDistance": 0.2
},
{
 "useHandCursor": true,
 "data": {
  "label": "Info Red 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 26.03,
   "hfov": 19.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_721EAEFE_62E5_6A18_41A0_A230A9B99F07",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.45,
   "pitch": 26.03,
   "hfov": 19.18,
   "distance": 100
  }
 ],
 "id": "overlay_10DBCA6E_03DB_7626_416D_16022585A719",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B.get('visible')){ this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_E8105785_F9AD_CDF0_41D3_258AE6CA2B1B, false, 0, null, null, false) }; if(!this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310.get('visible')){ this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_EBB67FB1_F9AC_BD11_41D2_BB232269C310, false, 0, null, null, false) }",
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
   "yaw": -143.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.23,
   "hfov": 9.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8879AB84_91BD_7EFA_41D0_D0975E18F530",
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -143.82,
   "pitch": -8.23,
   "hfov": 9.13,
   "distance": 50
  }
 ],
 "id": "overlay_C46B6EF2_E58D_EC23_41E4_260483F2DA9A",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E9685282_F9AB_3217_41CD_23FA7DD1973E",
 "pitch": 54.33,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": 173.62,
 "bleachingDistance": 0.1
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
      "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73EE1F1D_62E5_6A1B_41D0_5ADBFBB619D5",
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
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E96BF3A2_F9AB_5217_41E8_AC824E47427C",
 "pitch": 55.97,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -134.43,
 "bleachingDistance": 0.1
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
   "image": "this.AnimatedImageResource_73F5DF1D_62E5_6A1B_41CE_0CCD2EF6C334",
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
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "overlay_E897E1B4_F9AB_4E73_41EE_39A325719CF9",
 "pitch": 34.57,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "yaw": -120.42,
 "bleachingDistance": 0.2
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73EBAF0D_62E5_6BFB_41D4_AD3D8A7D02B5",
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
   "click": "this.mainPlayList.set('selectedIndex', 28)",
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
      "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_73EA2F0D_62E5_6BFB_41AF_EB21E9620BA4",
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
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "id": "IconButton_720240A9_62ED_F638_41D4_DC15D6509E83",
 "paddingBottom": 0,
 "shadow": false,
 "width": 40,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "iconURL": "skin/IconButton_720240A9_62ED_F638_41D4_DC15D6509E83.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27664"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "gap": 4,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_720200A9_62ED_F638_41C3_39B24FD1C57A",
  "this.IconButton_720230A9_62ED_F638_41CA_834E7BE5CCF6",
  "this.IconButton_7202D0A9_62ED_F638_41BA_460128E23EBB"
 ],
 "id": "Container_720210A9_62ED_F638_4197_67B812528813",
 "paddingBottom": 0,
 "shadow": false,
 "layout": "vertical",
 "width": 40,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "overflow": "hidden",
 "paddingRight": 0,
 "borderSize": 0,
 "height": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "data": {
  "name": "Container27666"
 },
 "minWidth": 20,
 "contentOpaque": false,
 "paddingTop": 0
},
{
 "id": "IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675",
 "paddingBottom": 0,
 "shadow": false,
 "width": 40,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675_pressed.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "height": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "iconURL": "skin/IconButton_7202E0A9_62ED_F638_41D1_3EB5FB890675.png",
 "minWidth": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Button27671"
 },
 "cursor": "hand",
 "paddingTop": 0
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E86F0D_62E5_6BFB_41AA_5EC3C5833451",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8FDB1E_E586_75E3_41E0_DF56010960F8_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_88612B94_91BD_7E1A_41CF_FA7FA1BCCFDB",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0B485_E582_DCE1_41B6_B27321B0ED61_0_HS_5_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_721EEEFE_62E5_6A18_419F_58814F31078F",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8241C_E586_B3E7_41DB_CFF273941A18_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_721CDEFE_62E5_6A18_41C5_CE4DF8A8E94B",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8CAD4_E586_D460_41DB_8D8E03757078_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E08EFE_62E5_6A18_41A0_2C566CA297E9",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC93D25_E586_AC20_41B6_6BBE20DF1C8D_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E18EFE_62E5_6A18_41D3_D19287CDF836",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC9017B_E586_5421_41E2_E3533361EA29_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E1FEFE_62E5_6A18_41C0_60AD6F27C36F",
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
 "id": "AnimatedImageResource_8D4DB493_9195_AA1E_41C4_98873B0D8F7B",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0CA06_E582_D7E3_41D2_16D31F23A7B5_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73EE6F1D_62E5_6A1B_41C8_789A5FC79210",
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
 "id": "AnimatedImageResource_721BDEFE_62E5_6A18_41C5_E214B6E501A2",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCA4DD3_E586_EC60_41DA_A98E908D62A2_1_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_998BDE9E_8F33_9664_41B4_1A29E9A4833C",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCE420A_E586_D7E3_41C6_B31E4D7FE57E_0_HS_4_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73F3DF1D_62E5_6A1B_41AA_D2A963E2DB9D",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0F5CF_E582_DC60_41E3_CF83E2235917_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E38EFE_62E5_6A18_41D0_D3659F17111B",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCB4B6F_E586_5421_41B1_3DB51D528004_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73EB1F0D_62E5_6BFB_41D4_BFE16E0D0E8A",
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
 "id": "AnimatedImageResource_88671B94_91BD_7E1A_41C8_19048B6D450C",
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
 "id": "AnimatedImageResource_721C0EFE_62E5_6A18_41A6_1FCC2D0EBC6D",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFCF669E_E586_DCE3_41D8_F10BEDFECB7D_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73EAEF0D_62E5_6BFB_41BA_F9E88C3E96C3",
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
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_73F55F1D_62E5_6A1B_41D6_1BF23A7B6708",
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
 "id": "AnimatedImageResource_72182EEE_62E5_6A39_41D7_47D19DFB6A4B",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EEAB020B_E586_F7E1_41D9_633B62E85186_1_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E30EFE_62E5_6A18_41D5_41A835C4E625",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC8461F_E586_5FE1_41CA_94D0080D0F69_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_998E1E9E_8F33_9664_41B8_A995D653E9DF",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0C13B_E582_D421_41E6_8F844DCBD97E_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73E1AEFE_62E5_6A18_41C4_CFD3595EC5F2",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC858C0_E586_B45F_41C4_4C41FBF597F6_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_73EAAF0D_62E5_6BFB_4181_8AA60C682D85",
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
 "id": "AnimatedImageResource_73E98F0D_62E5_6BFB_41C6_D3EE0DBAB216",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EA8A465B_E586_7C61_41E7_128DB6FF7A65_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_73F42F1D_62E5_6A1B_41D6_AC3A1CF197D9",
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
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_887D4B75_91BD_7E1B_41D6_A0A4E5B19F2D",
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
 "id": "AnimatedImageResource_721F8EFE_62E5_6A18_41D3_6C2C5B08EC20",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_5_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_721EAEFE_62E5_6A18_41A0_A230A9B99F07",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFC80F78_E586_AC20_41E6_928C6F78ACA2_1_HS_10_0.png",
   "width": 580,
   "height": 870
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_8879AB84_91BD_7EFA_41D0_D0975E18F530",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB0AD24_E582_AC27_41D7_2C0CA4312275_0_HS_1_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73EE1F1D_62E5_6A1B_41D0_5ADBFBB619D5",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCB043DC_E582_B467_41E3_9F8A2DF4D3AE_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_73F5DF1D_62E5_6A1B_41CE_0CCD2EF6C334",
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
 "id": "AnimatedImageResource_73EBAF0D_62E5_6BFB_41D4_AD3D8A7D02B5",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_73EA2F0D_62E5_6BFB_41AF_EB21E9620BA4",
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC8F3294_E582_54E0_41D7_DF8DEDA7333E_1_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ]
}],
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "propagateClick": false,
 "buttonToggleMute": "this.IconButton_720290A9_62ED_F638_41B1_D93AE3E486D3",
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "verticalAlign": "top",
 "data": {
  "name": "Player435"
 },
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
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
