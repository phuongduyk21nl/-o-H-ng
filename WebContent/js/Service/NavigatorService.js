app.service('NavigatorService', function($http) {
	this.getAllMenus = function() {
		var sub = [ 'Tư liệu', 'Phân tích', 'Người Việt 5 châu',
				'Cuộc sống đó đây', 'Quân sự' ];
		// khai báo đối tượng Menu.
		var thegioi = {
			'id' : 1,
			name : 'Thế giới','url':'thegioi',
			children : sub
		};
		var thethao = {
			'id' : 2,
			name : 'Thể thao','url':'thethao',
			children : []
		};
		var phapluat = {
			'id' : 3,
			name : 'Pháp luật','url':'phapluat',
			children : []
		};
		var khoahoc = {
			'id' : 4,
			name : 'Khoa học','url':'khoahoc',
			children : []
		};

		// create array.1 tập hợp các đối tượng.
		var Menus = [ thegioi, thethao, phapluat, khoahoc ];

		return Menus;
	};
});