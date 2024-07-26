const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"部门管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBumen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"津贴类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJintie"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"绩效类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJixiao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"员工考勤类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYuangongKaoqin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"津贴管理",
                        "menuJump":"列表",
                        "tableName":"jintie"
                    }
                ],
                "menu":"津贴管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"绩效管理",
                        "menuJump":"列表",
                        "tableName":"jixiao"
                    }
                ],
                "menu":"绩效管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"工资管理",
                        "menuJump":"列表",
                        "tableName":"xinzi"
                    }
                ],
                "menu":"工资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工考勤管理",
                        "menuJump":"列表",
                        "tableName":"yuangongKaoqin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"员工考勤详情管理",
                        "menuJump":"列表",
                        "tableName":"yuangongKaoqinList"
                    }
                ],
                "menu":"员工考勤管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
    ,
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"公告管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"津贴管理",
                                "menuJump":"列表",
                                "tableName":"jintie"
                            }
                        ],
                        "menu":"津贴管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"绩效管理",
                                "menuJump":"列表",
                                "tableName":"jixiao"
                            }
                        ],
                        "menu":"绩效管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"工资管理",
                                "menuJump":"列表",
                                "tableName":"xinzi"
                            }
                        ],
                        "menu":"工资管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"我的考勤",
                                "menuJump":"列表",
                                "tableName":"yuangongKaoqinList"
                            }
                        ],
                        "menu":"我的考勤"
                    }
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"员工",
                "tableName":"yuangong"
            }
]
    }
}
export default menu;
