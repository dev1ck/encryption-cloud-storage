/**
 * ownCloud Wopi
 *
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @copyright 2018 ownCloud GmbH.
 *
 * This code is covered by the ownCloud Commercial License.
 *
 * You should have received a copy of the ownCloud Commercial License
 * along with this program. If not, see <https://owncloud.com/licenses/owncloud-commercial/>.
 *
 */
(function ($, OC, OCA) {

	OCA.Wopi = {

		initialize: function () {
			if (OCA && OCA.Files) {
				OCA.Wopi.loadDiscovery().then(function (config) {
					_.keys(config.view).forEach(function (key) {
						OCA.Files.fileActions.registerAction({
							name: 'Open in Office Online',
							displayName: t('wopi', 'View in Office Online'),
							mime: key,
							permissions: OC.PERMISSION_ALL,
							iconClass: 'icon-wopi',
							actionHandler: function (fileName, context) {
								var fileId = context.$file.attr('data-id');
								var mime = context.$file.attr('data-mime');
								var ext = fileName
									.substr(fileName.lastIndexOf('.')+1)
									.toLowerCase();
								var size = context.$file.attr('data-size');
								var actionUrl = config.view[mime][ext];
								if (typeof actionUrl === 'undefined') {
									return;
								}

								if (size === "0") {
									OC.Notification.showTemporary(
										t('wopi', 'Cannot view empty file. Please edit it first to initialize file.')
									);
								} else {
									var url = OC.generateUrl('/apps/wopi/office/view/{fileId}', {
										fileId: fileId
									});
									window.open(url, '_blank');
								}

							}
						});
					});
					_.keys(config.edit).forEach(function (key) {
						OCA.Files.fileActions.registerAction({
							name: 'Edit in Office Online',
							displayName: t('wopi', 'Edit in Office Online'),
							mime: key,
							permissions: OC.PERMISSION_ALL,
							iconClass: 'icon-wopi',
							actionHandler: function (fileName, context) {
								var fileId = context.$file.attr('data-id');
								var mime = context.$file.attr('data-mime');
								var ext = fileName
									.substr(fileName.lastIndexOf('.')+1)
									.toLowerCase();
								var size = context.$file.attr('data-size');
								var actionUrl = config.edit[mime][ext];
								if (typeof actionUrl === 'undefined') {
									return;
								}

								var url;
								if (size === "0") {
									url = OC.generateUrl('/apps/wopi/office/editnew/{fileId}', {
										fileId: fileId
									});
								} else {
									url = OC.generateUrl('/apps/wopi/office/edit/{fileId}', {
										fileId: fileId
									});
								}
								window.open(url, '_blank');
							}
						});
					});
				}, function (error) {
					console.error(error);
				});
			}
		},

		loadDiscovery: function () {
			return new Promise(function (resolve, reject) {
				var sessionStore = window.sessionStorage;
				if (sessionStore.getItem('discovery.json')) {
					resolve(JSON.parse(sessionStore.getItem('discovery.json')));
				} else {
					$.ajax({
						type: "get",
						url: OC.generateUrl('/apps/wopi/discovery.json'),
						success: function(data) {
							sessionStore.setItem('discovery.json', JSON.stringify(data));
							resolve(data);
						},
						error: function(xhr, status) {
							reject(Error(status));
						}
					});
				}
			});
		}

	};

	OCA.Wopi.NewFileMenuPlugin = {

		attach: function(menu) {
			var fileList = menu.fileList;

			// only attach to main file list, public view is not supported yet
			if (fileList.id !== 'files') {
				return;
			}

			var menuEntries = [
				{ext: 'docx', icon: 'icon-office365-word', app: 'Word'},
				{ext: 'xlsx', icon: 'icon-office365-excel', app: 'Excel'},
				{ext: 'pptx', icon: 'icon-office365-powerpoint', app: 'PowerPoint'}
			];
			menuEntries.forEach(function (data) {
				// register the new menu entry
				menu.addMenuEntry({
					id: 'office-',
					displayName: t('wopi', '{app} Document', data),
					templateName: t('wopi', 'New {app} file.{ext}', data),
					iconClass: data.icon,
					fileType: 'file',
					actionHandler: function(name) {
						fileList.createFile(name).then(function(status, data) {
							var fileId = data.id;
							var mime = data.mimetype;
							var ext = data.name
								.substr(data.name.lastIndexOf('.')+1)
								.toLowerCase();
							OCA.Wopi.loadDiscovery().then(function (config) {
								var actionUrl = config.editnew[mime][ext];
								if (typeof actionUrl !== 'undefined') {
									var url = OC.generateUrl('/apps/wopi/office/editnew/{fileId}', {
										fileId: fileId
									});
									window.open(url, '_blank');
								}
							});
						});
					}
				});
			});
		}
	};

	OC.Plugins.register('OCA.Files.NewFileMenu', OCA.Wopi.NewFileMenuPlugin);

	$(document).ready(function () {
		OCA.Wopi.initialize();
	});

})(jQuery, OC, OCA);
