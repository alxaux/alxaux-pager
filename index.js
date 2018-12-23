exports.setPageTitle = function(titleParts, properties = {}) {
	properties.binder = properties.hasOwnProperty('binder') ? properties.binder : ' / ';
	document.title = titleParts.join(properties.binder);
}