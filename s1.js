//接口列表
vjc_config.apiList = {
	"GetDictionary": {
		apiName: 'GetDictionary',
		url: '/GetDictionary',
		name: '获取字典',
		method: 'get',
		dataType: 'json',
		data: {
			Type: 'all'
		},
		flag: false //是否等待提示
	}, 
	"UserOperationUpdate": {
		apiName: 'UserOperationUpdate',
		url: '/UserOperationUpdate',
		name: '修改用户功能权限',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserRoleNew": {
		apiName: 'UserRoleNew',
		url: '/UserRoleNew',
		name: '新建用户角色',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserRoleDelete": {
		apiName: 'UserRoleDelete',
		url: '/UserRoleDelete',
		name: '删除用户角色',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserRoleList": {
		apiName: 'UserRoleList',
		url: '/UserRoleList',
		name: '查看列表用户角色',
		method: 'get',
		dataType: 'json',
		data:{page:1 , rows:10},
		flag: false //是否等待提示
	},
	"UserDepartmentNew": {
		apiName: 'UserDepartmentNew',
		url: '/UserDepartmentNew',
		name: '新建用户分科设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserDepartmentDelete": {
		apiName: 'UserDepartmentDelete',
		url: '/UserDepartmentDelete',
		name: '删除用户分科设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserDepartmentList": {
		apiName: 'UserDepartmentList',
		url: '/UserDepartmentList',
		name: '查看列表用户分科设置',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserUpdate": {
		apiName: 'UserUpdate',
		url: '/UserUpdate',
		name: '修改用户',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserDelete": {
		apiName: 'UserDelete',
		url: '/UserDelete',
		name: '删除用户',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"UserNew": {
		apiName: 'UserNew',
		url: '/UserNew',
		name: '新建用户',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"OrgList": {
		apiName: 'OrgList',
		url: '/OrgList',
		name: '查看列表机构',
		method: 'get',
		dataType: 'json',
		data:{page:1 , rows:10},
		flag: false //是否等待提示
	},
	"RoleNew": {
		apiName: 'RoleNew',
		url: '/RoleNew',
		name: '新建角色',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"RoleUpdate": {
		apiName: 'RoleUpdate',
		url: '/RoleUpdate',
		name: '修改角色',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"OperationList": {
		apiName: 'OperationList',
		url: '/OperationList',
		name: '系统权限列表',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"RoleDelete": {
		apiName: 'RoleDelete',
		url: '/RoleDelete',
		name: '删除角色',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"RoleInfo": {
		apiName: 'RoleInfo',
		url: '/RoleInfo',
		name: '获取信息角色',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"RoleList": {
		apiName: 'RoleList',
		url: '/RoleList',
		name: '查看列表角色',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"ServiceDelete": {
		apiName: 'ServiceDelete',
		url: '/ServiceDelete',
		name: '删除服务项目',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"MessageSettingDelete": {
		apiName: 'MessageSettingDelete',
		url: '/MessageSettingDelete',
		name: '删除短信账户设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"MessageSettingUpdate": {
		apiName: 'MessageSettingUpdate',
		url: '/MessageSettingUpdate',
		name: '修改短信账户设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"MessageSettingNew": {
		apiName: 'MessageSettingNew',
		url: '/MessageSettingNew',
		name: '新建短信账户设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"MessageSettingInfo": {
		apiName: 'MessageSettingInfo',
		url: '/MessageSettingInfo',
		name: '获取信息短信账户设置',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PrintSetupUpdate": {
		apiName: 'PrintSetupUpdate',
		url: '/PrintSetupUpdate',
		name: '修改打印设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PrintSetupNew": {
		apiName: 'PrintSetupNew',
		url: '/PrintSetupNew',
		name: '新建打印设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PrintSetupInfo": {
		apiName: 'PrintSetupInfo',
		url: '/PrintSetupInfo',
		name: '获取信息打印设置',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"OrgPatientDocCodeSet": {
		apiName: 'OrgPatientDocCodeSet',
		url: '/OrgPatientDocCodeSet',
		name: '机构病案号设置',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"JobSchedulingUnitNew": {
		apiName: 'JobSchedulingUnitNew',
		url: '/JobSchedulingUnitNew',
		name: '新建班次',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"JobSchedulingUnitDelete": {
		apiName: 'JobSchedulingUnitDelete',
		url: '/JobSchedulingUnitDelete',
		name: '删除班次',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"JobSchedulingUnitUpdate": {
		apiName: 'JobSchedulingUnitUpdate',
		url: '/JobSchedulingUnitUpdate',
		name: '修改班次',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"JobSchedulingUnitInfo": {
		apiName: 'JobSchedulingUnitInfo',
		url: '/JobSchedulingUnitInfo',
		name: '获取信息班次',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"JobSchedulingUnitList": {
		apiName: 'JobSchedulingUnitList',
		url: '/JobSchedulingUnitList',
		name: '查看列表班次',
		method: 'get',
		dataType: 'json',
		data:{
			page: 1,
			rows: 10
		},
		flag: false //是否等待提示
	},
	"OrgUpdate": {
		apiName: 'OrgUpdate',
		url: '/OrgUpdate',
		name: '修改机构',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"OrgInfo": {
		apiName: 'OrgInfo',
		url: '/OrgInfo',
		name: '获取信息机构',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PerformanceUpdate": {
		apiName: 'PerformanceUpdate',
		url: '/PerformanceUpdate',
		name: '修改绩效设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PerformanceDelete": {
		apiName: 'PerformanceDelete',
		url: '/PerformanceDelete',
		name: '删除绩效设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PerformanceInfo": {
		apiName: 'PerformanceInfo',
		url: '/PerformanceInfo',
		name: '获取信息绩效设置',
		method: 'get',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"PerformanceNew": {
		apiName: 'PerformanceNew',
		url: '/PerformanceNew',
		name: '新建绩效设置',
		method: 'post',
		dataType: 'json',
		data:{},
		flag: false //是否等待提示
	},
	"SettingInfo": {
		apiName: 'SettingInfo',
		url: '/SettingInfo',
		name: '查看列表绩效设置',
		method: 'get',
		dataType: 'json',data:{},
		flag: false //是否等待提示
	},
	"PerformanceList": {
		apiName: 'PerformanceList',
		url: '/PerformanceList',
		name: '业务设置基础设置',
		method: 'get',
		dataType: 'json',
		data:{
			page:1,
			rows:10
		},
		flag: false //是否等待提示
	},
	"SettingUpdate": {
		apiName: 'SettingUpdate',
		url: '/SettingUpdate',
		name: '积分提成',
		method: 'post',
		dataType: 'json',data:{},
		flag: false //是否等待提示
	},
	"ServiceList": {
		apiName: 'ServiceList',
		url: '/ServiceList',
		name: '查看列表服务项目',
		method: 'get',
		dataType: 'json',
		data: {
			page:1,
			rows:20
		},
		flag: false //是否等待提示
	},
	"ServiceInfo": {
		apiName: 'ServiceInfo',
		url: '/ServiceInfo',
		name: '查看详情服务项目',
		method: 'get',
		dataType: 'json',data:{},
		flag: false //是否等待提示
	},
	"ServiceNew": {
		apiName: 'ServiceNew',
		url: '/ServiceNew',
		name: '新建服务项目',
		method: 'post',
		dataType: 'json',data:{},
		flag: false //是否等待提示
	},
	"ServiceUpdate": {
		apiName: 'ServiceUpdate',
		url: '/ServiceUpdate',
		name: '更新服务项目',
		method: 'post',
		dataType: 'json',data:{},
		flag: false //是否等待提示
	},
	"ProductTypeList": {
		apiName: 'ProductTypeList',
		url: '/ProductTypeList',
		name: '查看列表库存分类',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ProductTypeInfo": {
		apiName: 'ProductTypeInfo',
		url: '/ProductTypeInfo',
		name: '获取信息库存产品分类',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ProductTypeNew": {
		apiName: 'ProductTypeNew',
		url: '/ProductTypeNew',
		name: '新增产品分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ProductTypeUpdate": {
		apiName: 'ProductTypeUpdate',
		url: '/ProductTypeUpdate',
		name: '更新产品分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ProductTypeDelete": {
		apiName: 'ProductTypeDelete',
		url: '/ProductTypeDelete',
		name: '删除库存产品分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"DepartmentList": {
		apiName: 'DepartmentList',
		url: '/DepartmentList',
		name: '查看列表分科',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"DepartmentNew": {
		apiName: 'DepartmentNew',
		url: '/DepartmentNew',
		name: '新建分科接口',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"DepartmentDelete": {
		apiName: 'DepartmentDelete',
		url: '/DepartmentDelete',
		name: '删除分科',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ServiceTypeDelete": {
		apiName: 'ServiceTypeDelete',
		url: '/ServiceTypeDelete',
		name: '删除分科分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"DepartmentUpdate": {
		apiName: 'DepartmentUpdate',
		url: '/DepartmentUpdate',
		name: '修改分科',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ServiceTypeList": {
		apiName: 'ServiceTypeList',
		url: '/ServiceTypeList',
		name: '查看列表服务项目分类',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},  
	"ServiceTypeNew": {
		apiName: 'ServiceTypeNew',
		url: '/ServiceTypeNew',
		name: '新建分科分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	}, 
	"ServiceTypeUpdate": {
		apiName: 'ServiceTypeUpdate',
		url: '/ServiceTypeUpdate',
		name: '修改分科分类',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"ServiceTypeInfo": {
		apiName: 'ServiceTypeInfo',
		url: '/ServiceTypeInfo',
		name: '查看列表分科详情',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"DepartmentInfo": {
		apiName: 'DepartmentInfo',
		url: '/DepartmentInfo',
		name: '获取信息分科',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"PrepayTypeDelete": {
		apiName: 'PrepayTypeDelete',
		url: '/PrepayTypeDelete',
		name: '删除预付费类型',
		method: 'post',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	"PrepayTypeList": {
		apiName: 'PrepayTypeList',
		url: '/PrepayTypeList',
		name: '预付费类型列表',
		method: 'get',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	"PrepayTypeUpdate": {
		apiName: 'PrepayTypeUpdate',
		url: '/PrepayTypeUpdate',
		name: '预付费类型更新',
		method: 'post',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	"PrepayTypeInfo": {
		apiName: 'PrepayTypeInfo',
		url: '/PrepayTypeInfo',
		name: '预付费类型详情',
		method: 'get',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	"PrepayTypeNew": {
		apiName: 'PrepayTypeNew',
		url: '/PrepayTypeNew',
		name: '新建',
		method: 'post',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	
	"PrefertypeDelete": {
		apiName: 'PrefertypeDelete',
		url: '/PrefertypeDelete',
		name: '删除优惠卡类型',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
		},
		"PrefertypeList": {
			apiName: 'PrefertypeList',
			url: '/PrefertypeList',
			name: '优惠卡列表',
			method: 'get',
			dataType: 'json',
			data: {
			},
			flag: false //是否等待提示
		},
		"PrefertypeUpdate": {
			apiName: 'PrefertypeUpdate',
			url: '/PrefertypeUpdate',
			name: '优惠卡更新',
			method: 'post',
			dataType: 'json',
			data: {
			},
			flag: false //是否等待提示
		},
		"PrefertypeInfo": {
			apiName: 'PrefertypeInfo',
			url: '/PrefertypeInfo',
			name: '优惠卡详情',
			method: 'get',
			dataType: 'json',
			data: {
			},
			flag: false //是否等待提示
		},
		"PrefertypeNew": {
			apiName: 'PrefertypeNew',
			url: '/PrefertypeNew',
			name: '新建优惠卡',
			method: 'post',
			dataType: 'json',
			data: {
			},
			flag: false //是否等待提示
		},
	
	"GetTreeList": {
		apiName: 'GetTreeList',
		url: '/GetTreeList',
		name: '获取tree',
		method: 'get',
		dataType: 'json',
		data: {
			TreeType: ''
		},
		flag: false //是否等待提示
	},
	"GetAuth": {
		apiName: 'GetAuth',
		url: '/GetAuth',
		name: '获取权限',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: false //是否等待提示
	},
	"Login": {
		apiName: 'Login',
		url: '/Login',
		name: '登录',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"Regist_App1": {
		apiName: 'Regist_App1',
		url: '/Regist_App1',
		name: '注册1',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"Regist_App2": {
		apiName: 'Regist_App2',
		url: '/Regist_App2',
		name: '注册2',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"ModifyPwd": {
		apiName: 'ModifyPwd',
		url: '/ModifyPwd',
		name: '重置密码',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"GetMessageCheck": {
		apiName: 'GetMessageCheck',
		url: '/GetMessageCheck',
		name: '获取验证码-注册',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"ModifyPwdMsgCheck": {
		apiName: 'ModifyPwdMsgCheck',
		url: '/ModifyPwdMsgCheck',
		name: '获取验证码-重置',
		method: 'get',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"BindingPhone": {
		apiName: 'BindingPhone',
		url: '/BindingPhone',
		name: '绑定手机',
		method: 'post',
		dataType: 'json',
		data: {},
		flag: true //是否等待提示
	},
	"UserInfo": {
		apiName: 'UserInfo',
		url: '/UserInfo',
		name: '获取用户信息',
		method: 'get',
		data: {},
		flag: false
	},
	"UserList": {
		apiName: 'UserList',
		url: '/UserList',
		name: '用户列表及搜索',
		method: 'get',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},
	"ProductList": {
		apiName: 'ProductList',
		url: '/ProductList',
		name: '产品列表',
		method: 'get',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},
	"ProductInfo": {
		apiName: 'ProductInfo',
		url: '/ProductInfo',
		name: '产品详情',
		method: 'get',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},
	"ProductUpdate": {
		apiName: 'ProductUpdate',
		url: '/ProductUpdate',
		name: '产品更新',
		method: 'post',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},
	"ProductNew": {
		apiName: 'ProductNew',
		url: '/ProductNew',
		name: '产品列表',
		method: 'post',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},
	"ProductDelete": {
		apiName: 'ProductDelete',
		url: '/ProductDelete',
		name: '产品删除',
		method: 'post',
		dataType: 'json',
		checkupdate: true,
		data: {},
		flag: false
	},


}
