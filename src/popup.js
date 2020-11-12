document.addEventListener('DOMContentLoaded', function () {
	
	document.getElementById('saveBtn').addEventListener('click', function(){
		var value = document.getElementById('ufindServerAPI').value;
		localStorage['ufindServerAPI'] = value;

		var domains = document.getElementById('mudomain').value;
		domains = domains.split("\n");
		localStorage['domains'] = domains;
		// chrome.storage.local.set({'domains': domains}, function() {
		//   console.log('domains saved');
		// });
	});
	
});
window.onload = function(){
chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url)
  var domain = url.hostname;
 document.getElementById('mudomain').value="."+domain;
  });

}