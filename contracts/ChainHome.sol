pragma solidity 0.4.24;
import "./UtilsLib.sol";
contract ChainHome{
    address owner;//系统拥有者
    uint totalAmount;//系统中所有充值金额的和
    uint withdrawAmount;//所有被提款总额
    
	struct House{
        bytes32 houseID;//房屋id 
        address belong;//所有者 
        uint area; //房屋面积
        uint price_month;//月租
        uint cash_pledge;//押金
        uint end_time;//本次租赁结束时间
        uint signed_time;//登记时间
        bool isRented;//是否被租
        bool isEnsured;//房东是否确定该租赁
        bool isDisuse;//是否废弃该房源
        address beRentBy;//当前租户的地址
		bytes32 location;
        bytes32 otherinfo;//其他信息，待定
    }
    struct Landlord{
        address landlordAddr;//房东address
        bytes32 passwd;//密码
        uint balance;//余额
        bytes32[] rentHouses;//名下出租房屋
    }
    struct Tenant{
        address tenantAddr;//租户地址
        bytes32 passwd; //租户密码
        uint balance;//余额
        uint frozenBalance;//冻结金额
        bytes32[] nowLivingHouses;//当前租的房屋列表
    }
    // struct Deal{//订单
    //     address landlord;
    //     address tenant;
    //     bytes32 houseID;
    //     uint start_time;
    //     uint end_time;
    // }
    mapping(address=>Landlord) landlord;//根据房东address查找房东
    mapping(address=>Tenant) tenant;//根据租户address查找租户
    mapping(bytes32=>House) house;//根据房屋编码查找房屋
    //mapping(bytes32=>Deal) deal;//根据房屋ID查找订单

    address[] landlords;//已经注册的房东,使用address标识
    address[] tenants;//已经注册的租户,使用address标识
    bytes32[] houses;//已经注册的房屋,使用houseId标识
   // bytes32[] deals;//已经生成的订单，使用houseId标识
    
	//构造函数
    function ChainHome(){
        totalAmount=0;
        withdrawAmount=0;
        owner=msg.sender;
    }
    //注册成为房东
    event NewLandLord(address sender,bool isSuccess,string message);
    function newLandLord(address _landlordAddr,string _passwd){
        //判断是否已经注册 
        if(!isLandlordAlreadyIn(_landlordAddr)){//没有注册
            landlord[_landlordAddr].landlordAddr=_landlordAddr;
            landlord[_landlordAddr].passwd=UtilsLib.stringToBytes32(_passwd);
            landlords.push(_landlordAddr);
            NewLandLord(msg.sender,true,"注册成功");
            return;
        }else{
            NewLandLord(msg.sender,false,"该账户已经注册");
            return;
        }
    }
    //注册成为租户
    event NewTenant(address sender,bool isSuccess,string message);
    function newTenant(address _tenantAddr,string _passwd){
        //判断是否已经注册 
        if(!isTenantsAlreadyIn(_tenantAddr)){
            tenant[_tenantAddr].tenantAddr=_tenantAddr;
            tenant[_tenantAddr].passwd=UtilsLib.stringToBytes32(_passwd);
            tenant[_tenantAddr].frozenBalance=0;
            tenants.push(_tenantAddr);
            NewTenant(msg.sender,true,"注册成功");
            return;
        }else{
            NewTenant(msg.sender,false,"该账户已经注册");
            return;
        }
    }
    //判断房东是否已经注册
    function isLandlordAlreadyIn(address _landlordAddr) internal returns(bool){
        for(uint i =0; i< landlords.length;i++){
            if(landlords[i]==_landlordAddr){
                return true;
            }
        }
        return false;
    }
    //判断租户是否已经注册
    function isTenantsAlreadyIn(address _tenantAddr) internal returns(bool){
        for(uint i =0; i< tenants.length;i++){
            if(tenants[i]==_tenantAddr){
                return true;
            }
        }
        return false;
    }
    //判断房源是否已经被添加过
    function isHouseAlreadyIn(bytes32 _houseID)internal returns(bool){
        for(uint i=0;i<houses.length;i++){
            if(houses[i]==_houseID){
                return true;
            }
        }
        return false;
    }
    
    //添加房源
    event AddHouse(address sender,bool isSuccess,string message);
    function addHouse(address _landlordAddr,string _houseID,uint _area,uint _price,string _location,uint _cash_pledge){
        bytes32 tempID=UtilsLib.stringToBytes32(_houseID);
        if(!isHouseAlreadyIn(tempID)){//该房屋未被注册
            house[tempID].houseID=tempID;
            house[tempID].belong=_landlordAddr;
            house[tempID].area=_area;
			house[tempID].location=UtilsLib.stringToBytes32(_location);
            house[tempID].price_month=_price;
            house[tempID].end_time=now;
            house[tempID].signed_time=now;
            house[tempID].cash_pledge=_cash_pledge;
            house[tempID].beRentBy=0x0;
            house[tempID].isRented=false;
            house[tempID].isEnsured=false;
            house[tempID].isDisuse=false;
            houses.push(tempID);
            landlord[_landlordAddr].rentHouses.push(tempID);
            AddHouse(msg.sender,true,"添加房源成功");
            return;
        }else{
            AddHouse(msg.sender,false,"房源已经被添加");
            return;
        }
    }
    //根据房屋id获取房屋信息（所有者，房屋id,月租，押金）
    event GetHouseByHouseId(address sender,bytes32 houseID,uint price_month,uint cash_pledge);
    function getHouseByHouseId(string houseID)returns(address,bytes32,uint,uint){
        bytes32 _houseID = UtilsLib.stringToBytes32(houseID);
        if(isHouseAlreadyIn(_houseID)){
            GetHouseByHouseId(msg.sender,_houseID,house[_houseID].price_month,house[_houseID].cash_pledge);
            return (house[_houseID].belong,_houseID,house[_houseID].price_month,house[_houseID].cash_pledge);
        }else{
            return (0x0,0,0,0);
        }
    }
	//根据房屋地址获取房屋所有者，房屋id,月租，押金（暂时只获得一条）
	function searchHouseByKeyWords(string  keywords)returns(address,bytes32,uint,uint){
    //
        for(uint i=0;i<houses.length;i++){
            bytes32 _houseID=houses[i];
            if(house[_houseID].isRented==false && house[_houseID].isDisuse==false )
                continue;
            if(house[_houseID].location==UtilsLib.stringToBytes32(keywords)){
                return (house[_houseID].belong,_houseID,house[_houseID].price_month,house[_houseID].cash_pledge);
            }
        }  
        return (0x0,0,0,0);
    }
    
    //更新房屋信息
    event UpdateHouseInfo(address sender,bytes32 houseID,bool isSuccess,string message);
    function updateHouseInfo(string _houseID,uint price,uint _cash_pledge)returns(bool){
        bytes32 tempID=UtilsLib.stringToBytes32(_houseID);
        if(house[tempID].isEnsured==false&&house[tempID].isRented==false){
            UpdateHouseInfo(house[tempID].belong,tempID,false,"有租赁请求未处理，请处理后再修改");
        }else{
            house[tempID].price_month=price;
            house[tempID].cash_pledge=_cash_pledge;
            UpdateHouseInfo(msg.sender,tempID,true,"");
            return true;
        }
    }
    
    //移除房源
    event DeleteHouse(address sender,bytes32 houseID,bool isSuccess,string message);
    function deleteHouse(address _landlordAddr,string houseID){
        bytes32 tempID=UtilsLib.stringToBytes32(houseID);
        house[tempID].isDisuse=true;
        DeleteHouse(_landlordAddr,tempID,true,"该房屋被移出房源");
    }
    
    //租房，并冻结金额
    event RentHouse(address sender,bytes32 houseID,uint _months,bool isSuccess,string message);
    function rentHouse(address _tenantAddr,string _houseID,uint _months)returns(bool){
        bytes32 tempID=UtilsLib.stringToBytes32(_houseID);
        if(isHouseAlreadyIn(tempID)){
            if(tenant[_tenantAddr].balance<house[tempID].price_month+house[tempID].cash_pledge){
                RentHouse(_tenantAddr,tempID,_months,false,"余额不足以支付押金以及首月金额");
                return false;
            }else {
                tenant[_tenantAddr].frozenBalance+=house[tempID].price_month+house[tempID].cash_pledge;//添加到冻结金额中
                tenant[_tenantAddr].balance=tenant[_tenantAddr].balance -(house[tempID].price_month+house[tempID].cash_pledge);//更新当前余额
                house[tempID].isRented=true;
                house[tempID].isEnsured=false;
                house[tempID].beRentBy=_tenantAddr;
                RentHouse(_tenantAddr,tempID,_months,true,"租赁成功，向房东提醒确认该交易");
                return true;
            }
        }
        RentHouse(_tenantAddr,tempID,_months,false,"房源不存在");
        return false;
    }
    //房东确认交易
    event EnsureRentDeal(address sender,bytes32 houseID,uint _months,bool isSuccess,string message);
    function ensureRentDeal(address _landlordAddr,string houseID,uint _months,bool isEnsured)returns(bool){
        bytes32 tempID=UtilsLib.stringToBytes32(houseID);
        address _tenantAddr=house[tempID].beRentBy;
        if(isEnsured){//房东确认交易
            if(house[tempID].isEnsured==false){//防止房东重复确认
                house[tempID].isEnsured=true;
                house[tempID].end_time=now+_months*30 days;
                //deal[]
                landlord[_landlordAddr].balance=landlord[_landlordAddr].balance+house[tempID].price_month;
                tenant[_tenantAddr].frozenBalance=tenant[_tenantAddr].frozenBalance-house[tempID].price_month;
                
                EnsureRentDeal(_landlordAddr,tempID,_months,true,"租赁成功，通知租户");
            }else{
             return true;  
            }
        }else{//房东拒绝交易
            if((!house[tempID].isEnsured)&&house[tempID].isRented){//防止房东重复拒绝
                house[tempID].isEnsured=false;
                house[tempID].isRented=false;
                uint totalCost=house[tempID].price_month+house[tempID].cash_pledge;
                tenant[_tenantAddr].balance=tenant[_tenantAddr].balance+totalCost;
                tenant[_tenantAddr].frozenBalance = tenant[_tenantAddr].frozenBalance - totalCost;
            }
            EnsureRentDeal(_landlordAddr,tempID,_months,false,"租赁失败，通知租户");
        }
    }
    
    //获取房东密码
    function getLandlordPasswd(address _landlordAddr)constant returns(bool,bytes32){
        if(isLandlordAlreadyIn(_landlordAddr)){
            return (true,landlord[_landlordAddr].passwd);
        }else{
            return(false,"");
        }
    }
    function getTenantPasswd(address _tenantAddr)constant returns(bool,bytes32){
        if(isTenantsAlreadyIn(_tenantAddr)){
            return (true,tenant[_tenantAddr].passwd);
        }else{
            return(false,"");
        }
    }
    
    event RechargeFoTenantByAddress(address sender,string message);
    function rechargeForTenantByAddress(address _receiver,uint _amount){
        if(isTenantsAlreadyIn(_receiver)){
            totalAmount+=_amount;
            tenant[_receiver].balance+=_amount;
            RechargeFoTenantByAddress(msg.sender,"充值成功");
            return;
        }else{
            RechargeFoTenantByAddress(msg.sender,"账户为注册，充值失败");
            return ;
        }
    }
    
    event Withdraw(address sender,string message);
    function withdrawForLandlord(address _landlordAddr,uint _amount){
        if(landlord[_landlordAddr].balance<_amount){
            Withdraw(msg.sender,"余额不足，请降低体现额");
        }else{
            landlord[_landlordAddr].balance-=_amount;
            //to  do......
            Withdraw(msg.sender,"提现成功");
        }
    }
}