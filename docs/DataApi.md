# 数据接口需求

## 技师相关

1. 首页技师列表 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechniciansList.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| page_now | int | 1 | 0 | true | 记录开始
| page_size | int |  | 10 | true | 记录条数
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |


> 返回数据示例

```json
{
  "Status": 0,
  "Data": {
  "TechnicianLists": [
    {
      "TECHLEADER_ID": "1",//技师id
      "AVATAR": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170518/5b7a121d91934c2aa1ea87e592c47264.JPG",//头像地址
      "NAME": "振慌6",//技师名
      "RIGHTS": "22",//服务项目的权限和（服务端调用）
      "AGE": "18",//年龄
      "STAR": "",//星级
      "LEVEL": 0,//级别（0普通技师，1优秀技师）
      "HOT": 0,//推荐，是否热门（0热门，1普通）
      "IF_LINE": 0,//是否在线，0在线，1不在线
      "CERTIFICATE_IDS": "",//证书id拼接（按“,”隔开）
      "ITEMS": "",//所服务的项目id拼接（按“,”隔开）
      "TEL": "18859959028",//手机号
      "CERTIFICATE_NAME": "高级按摩师",
      "SEX": "1",//性别
      "REGISTAR": "福建",//籍贯
      "REGISTER_TIME": "2017-05-18 16:36:24",//注册时间
      "TECHNICIAN_ID": "1",//领班id
      "SERVE_CONTENT": "d",//服务内容
      "TODAY_ABOUT": "d"//今日可约（0可约，1不可约）
    },
    {
      "TECHLEADER_ID": "1",
      "AVATAR": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170518/5b7a121d91934c2aa1ea87e592c47264.JPG",
      "NAME": "振慌4",
      "RIGHTS": "22",
      "AGE": "18",
      "STAR": "",
      "LEVEL": 0,
      "HOT": 0,
      "IF_LINE": 0,
      "CERTIFICATE_IDS": "",
      "ITEMS": "",
      "TEL": "18859959028",
      "CERTIFICATE_NAME": "高级推拿师,高级催乳师",
      "SEX": "1",
      "REGISTAR": "福建",
      "REGISTER_TIME": "2017-05-18 16:36:24",
      "TECHNICIAN_ID": "10",
      "SERVE_CONTENT": "d",
      "TODAY_ABOUT": "d"//今日可约（0可约，1不可约）
    }
  ]
  },
  "ErrMsg": "OK"
}
```


2. 获取技师的推拿时间段 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechniciansList.do**
- postData
 
| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| TECHNICIAN_ID | string |  |  | true | 技师id 

- response
 
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |
 
 
> 请求url示例

 http://localhost:8080/massage/appTechnicianData/getTechTime.do?TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b
> 返回数据示例
   
```json
{
 "Status": 0,
 "Data": {
   "TechtimeLists": [
     {
       "TECH_TIME_1500": 2,//技师在当天的15：00的状态（该时间段技师状态（0约满，1可约，2不可约））
       "TECH_TIME_0600": 2,
       "TECH_TIME_2130": 2,
       "TECH_TIME_2230": 2,
       "TECH_TIME_1400": 2,
       "TECH_TIME_0130": 2,
       "TECH_TIME_1930": 2,
       "TECH_TIME_1900": 2,
       "TECH_TIME_1300": 2,
       "TECH_TIME_DAY": "2017-06-06",//日期
       "TECH_TIME_1600": 2,
       "TECH_TIME_1000": 2,
       "TECH_TIME_0830": 2,
       "TECH_TIME_1230": 2,
       "TECH_TIME_1730": 2,
       "TECH_TIME_0700": 2,
       "TECH_TIME_0500": 2,
       "TECH_TIME_2300": 2,
       "TECH_TIME_0800": 2,
       "TECH_TIME_0900": 2,
       "TECH_TIME_2330": 2,
       "TECH_TIME_2000": 2,
       "TECH_TIME_0400": 2,
       "TECH_TIME_0230": 2,
       "TECHNICIAN_ID": "a082147cf09f471f96c6380d1c77a43b",//技师id
       "TECH_TIME_1830": 2,
       "TECH_TIME_0330": 2,
       "TECH_TIME_2100": 2,
       "TECH_TIME_0430": 2,
       "TECH_TIME_0930": 2,
       "TECH_TIME_0100": 2,
       "TECH_TIME_1330": 2,
       "TECH_TIME_1800": 2,
       "TECH_TIME_1430": 2,
       "TECH_TIME_0730": 2,
       "TECH_TIME_1030": 2,
       "TECH_TIME_ID": "c0a361ff924244c1883d329df918aae3",
       "TECH_TIME_0000": 2,
       "TECH_TIME_0630": 2,
       "TECH_TIME_2200": 2,
       "TECH_TIME_1130": 2,
       "TECH_TIME_0030": 2,
       "TECH_TIME_1630": 2,
       "TECH_TIME_1100": 2,
       "TECH_TIME_0200": 2,
       "TECH_TIME_0530": 2,
       "TECH_TIME_1700": 2,
       "TECH_TIME_1200": 2,
       "TECH_TIME_0300": 2,
       "TECH_TIME_2030": 2,
       "TECH_TIME_1530": 2
     }
   ]
 },
 "ErrMsg": "OK"
}

```
3. 技师详情 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechnicianInfo.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string | 1 | 0 | true | 客户id
| TECHNICIAN_ID | string |  | 10 | true | 技师id
| page_now | int | 1 | 0 | true | 记录开始
| page_size | int |  | 10 | true | 记录条数
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getTechnicianInfo.do?TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b&CUSTOMER_ID=1111
 > 返回数据示例
  
 ```json
 {
   "Status": 0,
   "Data": {
     "CommentsList": [
       {
         "COMMENTS_STATUS": 0,
         "COMMENTS_ID": "1",
         "COMMENTS_CONTENT": "ddddddddddd",
         "CREATETIME": "2017-5-25",
         "TECHNICIAN_ID": "6bab8de3e2aa40b3910611f9472e67fb",
         "CUSTOMER_TEL": "1212",
         "COMMENTS_STAR": 1
       }
     ],
     "IF_COLLECT": 1,
     "CERTIFICATE_NUM": 1
   },
   "ErrMsg": "OK"
 }
 ```
  
4. 获取技师的证书 POST
- url: **http://hostname:port/massage/appTechnicianData/getCertificateListById.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CERTIFICATE_IDS | string | 1 | 0 | true | 客户id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getCertificateListById.do?CERTIFICATE_IDS=2,3
 > 返回数据示例
  
 ```json
 {
   "Status": 0,
   "Data": {
     "CertificateList": [
       {
         "CERTIFICATE_ID": "2",
         "CERTIFICATE_IMG": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CERTIFICATE_NAME": "高级推拿师"
       },
       {
         "CERTIFICATE_ID": "3",
         "CERTIFICATE_IMG": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CERTIFICATE_NAME": "高级催乳师"
       }
     ]
   },
   "ErrMsg": "OK"
 }
 ```
 
5. 技师根据自身位置获取酒店列表 POST
- url: **http://hostname:port/massage/appTechnicianData/getHotelListByLonAndLat.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| type | string |  |  | true | 传1技师调用酒店的接口，传2客户调用酒店的接口
| TECHNICIAN_ID | string |  |  | false | 技师id/客户id
| longitude | string |  |  | true | 经度
| latitude | string |  |  | true | 纬度
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getHotelListByLonAndLat.do?longitude=118.684639&latitude=24.877331
 > 返回数据示例
  
 ```json
{
  "Status": 0,
  "Data": {
    "HotelList": [
      {
        "HOTEL_NAME": "悦华酒店",
        "HOTEL_CITY": "11",
        "DISTANCE": "0.010325640910587151",//技师距离该酒店的距离
        "HOTEL_TEL": "110011110",
        "HOTEL_LONGITUDE": "118.68460083007813",
        "HOTEL_PROVINCE": "1",
        "HOTEL_ID": "1",
        "HOTEL_CITY_NAME": "泉州市",
        "IF_SELECTED": 1,//1是表示该技师已选择设置该酒店，0表示没有
        "HOTEL_ADD": "丰泽街110号",
        "HOTEL_LATITUDE": "24.87724494934082",
        "HOTEL_PROVINCE_NAME": "福建省"
      },
      {
        "HOTEL_NAME": "老钱饭店",
        "HOTEL_CITY": "11",
        "DISTANCE": "0.08770871592123217",
        "HOTEL_TEL": "110011110",
        "HOTEL_LONGITUDE": "118.68388366699219",
        "HOTEL_PROVINCE": "1",
        "HOTEL_ID": "2",
        "HOTEL_CITY_NAME": "泉州市",
        "IF_SELECTED": 1,
        "HOTEL_ADD": "东海街道110号",
        "HOTEL_LATITUDE": "24.87771987915039",
        "HOTEL_PROVINCE_NAME": "福建省"
      }
    ]
  },
  "ErrMsg": "OK"
}
 ```
6. 添加技师/项目收藏 POST
- url: **http://hostname:port/massage/appCommentsData/addCollect.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string |  |  | true | 技师id
| TYPE | string |  |  | true | (0-技师，1-项目)
| TECHNICIAN_ID | string |  |  | true | 技师/项目id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1/1 | 返回状态码 |
| ErrMsg | str |  | ok/desc/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appCommentsData/addCollect.do?TYPE=0&CUSTOMER_ID=1111&TECHNICIAN_ID=6bab8de3e2aa40b3910611f9472e67fb
 > 返回数据示例
  
 ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
 ```
 7. 取消技师/项目收藏 POST
 - url: **http://hostname:port/massage/appCommentsData/cancelCollect.do**
 - postData
 
 | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
 | :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string |  |  | true | 技师id
| TYPE | string |  |  | true | (0-技师，1-项目)
| TECHNICIAN_ID | string |  |  | true | 技师/项目id
 - response
 
 | KEY | TYPE | DEFAULT | VALUE | DESC |
 | :---: | :---: | :---: | :---: | :---: |
 | Status | int |  | 0/-1 | 返回状态码 |
 | ErrMsg | str |  | ok/desc | 请求错误描述 |
 | Data | json(array) |  |  | 返回的数据 |
 
 > 请求url示例
 
 http://localhost:8080/massage/appCommentsData/cancelCollect.do?TYPE=0&CUSTOMER_ID=1111&TECHNICIAN_ID=6bab8de3e2aa40b3910611f9472e67fb
  > 返回数据示例
   
  ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
  ```
 8. 收藏列表 POST
  - url: **http://hostname:port/massage/appCommentsData/getCollectListByCustomerid.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string |  |  | true | 客户id
| TYPE | string |  |  | true | (0-技师，1-项目)
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appCommentsData/getCollectListByCustomerid.do?TYPE=0&CUSTOMER_ID=1111
   > 返回数据示例
    
   ```json
{
  "Status": 0,
  "Data": {
    "CollectList": [
      {
        "CUSTOMER_ID": "1111",
        "CREATETIME": "2017-06-05 10:17:12",
        "TECHNICIAN_ID": "74eacd86512247d38ae70133dd6d94bc",//项目id/技师id
        "TYPE": 0,
        "COLLECT_ID": "3d77f44214324cee992da4837630341c"
      }
    ]
  },
  "ErrMsg": "OK"
}
   ```
9. 客户下单 POST
  - url: **http://hostname:port/massage/appOrderData/submitOrder.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string |  |  | true | 客户ID
| TECHNICIAN_ID | string |  |  | true | 技师ID
| ITEM_ID | string |  |  | true | 项目ID
| ORDER_NUM | int |  |  | true | 下单项目数量
| ORDER_TEL | string |  |  | true | 下单联系电话
| ORDER_ADD | string |  |  | true | 下单服务地址
| ORDER_CALL_TIME | string |  |  | true | 上门时间
| ORDER_REMARK | string |  |  | true | 备注
| COUPON_ID | string |  |  | false | （有就传，没有就不传）优惠券
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appOrderData/submitOrder.do?CUSTOMER_ID=1111&TECHNICIAN_ID=6bab8de3e2aa40b3910611f9472e67fb&ITEM_ID=1&ORDER_NUM=2&ORDER_TEL=17777777777&ORDER_ADD=haixingxiaoqu&ORDER_CALL_TIME=2017-6-18 20:30&ORDER_REMARK=hello&COUPON_ID=1
   > 返回数据示例
    
   ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
   ```
10. 订单列表 POST
  - url: **http://hostname:port/massage/appOrderData/orderList.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
 | TECHNICIAN_ID | string |  |  | false | 技师ID（客户端的已下单待确认，就传客户id，传技师id，就不传客户id）
 | CUSTOMER_ID | string |  |  | false | 客户ID（技师端的已下单待确认，就传技师id，传客户id就不传技师id）
 | STATUS | int |  |  | true |（订单状态（状态（0下单未支付待技师确定，1技师确定接单，2下单已支付，3订单进行中，4订单已完成,，5订单完成确认未评论，6订单已结束，7订单退款确认，8订单退款中，9订单退款结束，10订单关闭））））
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appOrderData/orderList.do?ORDER_ID=18828c7c79e14ae0952a502363a1d813
   > 返回数据示例
    
   ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
   ```
 11. 处理订单 POST
   - url: **http://hostname:port/massage/appOrderData/handleOrder.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |

 | ORDER_ID | string |  |  | true | 客户ID
 | type | int |  |  | true |（0技师接单，1技师开始项目，2技师结束项目,3技师拒单，订单关闭,4客户申请退款，改为退款中）
   - response
   
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
   http://localhost:8080/massage/appOrderData/handleOrder.do?ORDER_ID=18828c7c79e14ae0952a502363a1d813&type=0
    > 返回数据示例
     
    ```json
 {
   "Status": 0,
   "ErrMsg": "OK"
 }
    ```
 12. 首页广告 POST
   - url: **http://hostname:port/massage/appAdData/getAdsList.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |

   - response
   
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
   http://localhost:8080/massage/appAdData/getAdsList.do
    > 返回数据示例
     
    ```json
 {
   "Status": 0,
   "ErrMsg": "OK"
 }
    ```
 13. 获取我的优惠券列表 POST
    - url: **http://hostname:port/massage/appCouponData/getMyCouponList.do**
    - postData
    
    | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
    | :---: | :---: | :---: | :---: | :---: |:---: |
 
  | COSTOMER_ID | string |  |  | true | 客户ID
  - response
    
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appCouponData/getMyCouponList.do?COSTOMER_ID=1111
  > 返回数据示例
    
 ```json
{
  "Data": {
    "CouponList": [
      {
        "LEADER_TIME": "2017-06-05 10:17:12",
        "NAME": "好好养生优惠券",
        "COUPON_PRICE": 30,
        "OPEN_TIME": "2017-06-05 10:17:12",
        "COUPON_CONDITION": "无",
        "COUPON_ID": "1",
        "CUSTOMER_ID": "1111",
        "STATUS": 3,
        "COUPON_USERFULTIME": "2018-06-05 10:17:12",
        "CDKEY": "555555",
        "REMAIN_TIME": 364 //剩余几天
      }
    ]
  },
  "Status": 0,
  "ErrMsg": "OK"
}
```
     
     

15. 提交评论 POST

- url: **http://hostname:port/massage/appCommentsData/sendComment.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| ORDER_ID | string |  |  | true | 订单ID
| TECHNICIAN_ID | string |  |  | true | 技师ID
| TYPE | int |  |  | true | 类型(0-技师，1-项目)
| COMMENTS_CONTENT | string |  |  | true | 评论内容
| COMMENTS_STAR | int |  |  | true | 评论星级
| CUSTOMER_TEL | string |  |  | true | 客户的电话


- response
  
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1/1/2 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appCommentsData/sendComment.do?ORDER_ID=18828c7c79e14ae0952a502363a1d813&TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b&TYPE=0&COMMENTS_CONTENT=wonderful&COMMENTS_STAR=5&CUSTOMER_TEL=1885990000
> 返回数据示例
  
```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
 ```

 